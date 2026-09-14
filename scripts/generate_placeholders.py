#!/usr/bin/env python3
"""Generate elegant, clearly-placeholder beauty stills for local development."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
GALLERY = ROOT / "public" / "images" / "gallery"
HERO = ROOT / "public" / "images" / "hero"
ABOUT = ROOT / "public" / "images" / "about"


def mix(c1: np.ndarray, c2: tuple[int, int, int] | np.ndarray, t: np.ndarray | float) -> np.ndarray:
    t = np.asarray(t)[..., None] if np.ndim(t) else t
    return c1 * (1 - t) + np.array(c2, dtype=np.float32) * t


def base_canvas(
    h: int,
    w: int,
    top: tuple[int, int, int],
    bottom: tuple[int, int, int],
    glow: tuple[int, int, int],
    shadow: tuple[int, int, int],
    seed: int,
) -> np.ndarray:
    y = np.linspace(0, 1, h, dtype=np.float32)[:, None]
    x = np.linspace(0, 1, w, dtype=np.float32)[None, :]
    t = y * y * (3 - 2 * y)
    img = mix(np.array(top, dtype=np.float32), bottom, t)
    img = np.broadcast_to(img, (h, w, 3)).copy()

    glow_d = np.hypot(x - 0.32, y - 0.22)
    img = mix(img, glow, np.clip(1 - glow_d / 0.72, 0, 1) ** 2 * 0.38)

    sh_d = np.hypot(x - 0.78, y - 0.82)
    img = mix(img, shadow, np.clip(1 - sh_d / 0.7, 0, 1) ** 2 * 0.24)

    rng = np.random.default_rng(seed)
    grain = rng.normal(0, 5.5, (h, w, 1)).astype(np.float32)
    img = np.clip(img + grain, 0, 255)
    return img


def rounded_nail_mask(h: int, w: int, box: tuple[float, float, float, float], radius: float) -> np.ndarray:
    """Soft rounded-rect mask in normalized 0-1 coords."""
    x0, y0, x1, y1 = box
    ys = np.linspace(0, 1, h, dtype=np.float32)[:, None]
    xs = np.linspace(0, 1, w, dtype=np.float32)[None, :]
    # SDF of rounded rectangle
    cx = (x0 + x1) / 2
    cy = (y0 + y1) / 2
    hw = (x1 - x0) / 2 - radius
    hh = (y1 - y0) / 2 - radius
    dx = np.abs(xs - cx) - hw
    dy = np.abs(ys - cy) - hh
    ax = np.maximum(dx, 0)
    ay = np.maximum(dy, 0)
    dist = np.sqrt(ax * ax + ay * ay) + np.minimum(np.maximum(dx, dy), 0) - radius
    return np.clip(0.5 - dist * min(h, w) * 0.55, 0, 1)


def add_nail(
    img: np.ndarray,
    box: tuple[float, float, float, float],
    color: tuple[int, int, int],
    highlight: tuple[int, int, int],
    opacity: float = 0.92,
) -> None:
    h, w, _ = img.shape
    mask = rounded_nail_mask(h, w, box, radius=min(box[2] - box[0], box[3] - box[1]) * 0.36)
    img[:] = mix(img, color, mask * opacity)
    # Specular oval
    ys = np.linspace(0, 1, h, dtype=np.float32)[:, None]
    xs = np.linspace(0, 1, w, dtype=np.float32)[None, :]
    hx = box[0] + (box[2] - box[0]) * 0.34
    hy = box[1] + (box[3] - box[1]) * 0.28
    rx = (box[2] - box[0]) * 0.22
    ry = (box[3] - box[1]) * 0.16
    spec = np.clip(1 - np.hypot((xs - hx) / rx, (ys - hy) / ry), 0, 1) ** 2
    img[:] = mix(img, highlight, spec * mask * 0.42)


def layout_nails(img: np.ndarray, layout: str, palette: dict, seed: int) -> None:
    rng = np.random.default_rng(seed)
    nail = palette["nail"]
    alt = palette["nail_alt"]

    def shade(t: float) -> tuple[int, int, int]:
        c = np.asarray(mix(np.array(nail, dtype=np.float32), alt, t)).reshape(-1)
        return (int(c[0]), int(c[1]), int(c[2]))

    hi = tuple(min(255, int(c + 36)) for c in nail)

    if layout == "fan":
        nails = [
            (0.10, 0.38, 0.28, 0.78),
            (0.24, 0.22, 0.44, 0.72),
            (0.40, 0.14, 0.60, 0.70),
            (0.56, 0.24, 0.76, 0.74),
            (0.72, 0.40, 0.90, 0.80),
        ]
        for i, box in enumerate(nails):
            add_nail(img, box, shade(i / 5), hi, 0.9)
    elif layout == "closeup":
        add_nail(img, (0.28, 0.10, 0.72, 0.86), shade(0.2), hi, 0.94)
    elif layout == "trio":
        for i, x in enumerate((0.08, 0.36, 0.64)):
            add_nail(img, (x, 0.16, x + 0.28, 0.86), shade(i / 3), hi, 0.9)
    else:
        for _ in range(6):
            cx = float(rng.uniform(0.18, 0.82))
            cy = float(rng.uniform(0.22, 0.78))
            nw = float(rng.uniform(0.11, 0.18))
            nh = nw * float(rng.uniform(1.7, 2.3))
            add_nail(
                img,
                (cx - nw / 2, cy - nh / 2, cx + nw / 2, cy + nh / 2),
                shade(float(rng.random())),
                hi,
                float(rng.uniform(0.72, 0.92)),
            )


def to_image(arr: np.ndarray) -> Image.Image:
    img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")
    img = img.filter(ImageFilter.GaussianBlur(0.65))
    img = ImageEnhance.Contrast(img).enhance(1.05)
    img = ImageEnhance.Color(img).enhance(0.9)
    return img


PALETTES = [
    {"bg_top": (246, 236, 228), "bg_bottom": (214, 186, 172), "glow": (255, 246, 238), "shadow": (168, 132, 118), "nail": (232, 196, 188), "nail_alt": (198, 150, 142)},
    {"bg_top": (238, 228, 220), "bg_bottom": (196, 168, 148), "glow": (250, 240, 228), "shadow": (140, 108, 92), "nail": (245, 238, 230), "nail_alt": (220, 200, 186)},
    {"bg_top": (250, 244, 238), "bg_bottom": (224, 200, 186), "glow": (255, 250, 245), "shadow": (176, 140, 124), "nail": (186, 92, 108), "nail_alt": (160, 72, 88)},
    {"bg_top": (232, 220, 210), "bg_bottom": (186, 166, 150), "glow": (244, 232, 220), "shadow": (120, 96, 82), "nail": (212, 192, 168), "nail_alt": (176, 148, 120)},
    {"bg_top": (248, 240, 236), "bg_bottom": (220, 188, 196), "glow": (255, 246, 248), "shadow": (156, 120, 128), "nail": (236, 214, 218), "nail_alt": (200, 160, 170)},
    {"bg_top": (240, 236, 230), "bg_bottom": (188, 176, 164), "glow": (250, 246, 240), "shadow": (128, 116, 104), "nail": (48, 44, 42), "nail_alt": (72, 64, 60)},
    {"bg_top": (246, 238, 228), "bg_bottom": (210, 178, 150), "glow": (255, 248, 236), "shadow": (150, 118, 90), "nail": (212, 164, 96), "nail_alt": (196, 140, 72)},
    {"bg_top": (244, 236, 232), "bg_bottom": (204, 176, 168), "glow": (255, 248, 244), "shadow": (148, 116, 108), "nail": (248, 244, 240), "nail_alt": (228, 208, 200)},
]


def save_jpeg(img: Image.Image, path: Path, quality: int = 86) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "JPEG", quality=quality, optimize=True, progressive=True)


def render(size: tuple[int, int], palette: dict, seed: int, layout: str) -> Image.Image:
    w, h = size
    arr = base_canvas(h, w, palette["bg_top"], palette["bg_bottom"], palette["glow"], palette["shadow"], seed)
    layout_nails(arr, layout, palette, seed)
    return to_image(arr)


def main() -> None:
    layouts = ["fan", "closeup", "trio", "scattered", "fan", "closeup", "trio", "scattered"]
    for i in range(8):
        img = render((1200, 1500), PALETTES[i], seed=20 + i * 17, layout=layouts[i])
        save_jpeg(img, GALLERY / f"nails-{i + 1:02d}.jpg")
        print("wrote", f"nails-{i + 1:02d}.jpg")

    save_jpeg(render((1400, 1750), PALETTES[1], 99, "fan"), HERO / "hero-nails.jpg", 88)
    print("wrote hero-nails.jpg")

    portrait = render((1200, 1500), PALETTES[0], 3, "closeup")
    w, h = portrait.size
    arr = np.asarray(portrait).astype(np.float32)
    ys = np.linspace(-0.42, 0.58, h)[:, None]
    xs = np.linspace(-0.5, 0.5, w)[None, :]
    d = np.sqrt((xs * 1.15) ** 2 + (ys * 1.05) ** 2)
    t = np.clip((d - 0.22) / 0.7, 0, 1)
    arr = mix(arr, (232, 220, 210), t * 0.55)
    save_jpeg(to_image(arr), ABOUT / "neringa-portrait.jpg")
    print("wrote neringa-portrait.jpg")


if __name__ == "__main__":
    main()
