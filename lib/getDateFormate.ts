import { format } from "date-fns";

// Function to format date string to day-month-year
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return format(date, "dd-MM-yyyy");
}

