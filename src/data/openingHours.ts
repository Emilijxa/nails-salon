/**
 * Display opening hours — informational only.
 *
 * Square Appointments is the source of truth for bookable availability.
 * Do not try to keep these hours in sync with Square; clients always book
 * through the Square link.
 *
 * How to edit:
 * - Change `hours` to a time range such as "10:00 – 19:00"
 * - Set `hours` to "closed" to show the translated “Closed” label
 * - Reorder or remove days as needed
 *
 * Replace the XX:XX placeholders before launch.
 */

export type OpeningHoursEntry = {
  id: string;
  dayKey:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
  hours: string;
};

export const openingHours: OpeningHoursEntry[] = [
  { id: "monday", dayKey: "monday", hours: "XX:XX – XX:XX" },
  { id: "tuesday", dayKey: "tuesday", hours: "XX:XX – XX:XX" },
  { id: "wednesday", dayKey: "wednesday", hours: "XX:XX – XX:XX" },
  { id: "thursday", dayKey: "thursday", hours: "XX:XX – XX:XX" },
  { id: "friday", dayKey: "friday", hours: "XX:XX – XX:XX" },
  { id: "saturday", dayKey: "saturday", hours: "XX:XX – XX:XX" },
  { id: "sunday", dayKey: "sunday", hours: "closed" },
];
