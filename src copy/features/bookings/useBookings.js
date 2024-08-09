import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startdate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };



  const {
    isLoading,
    data: { data:bookings,count}={},
    error,
  } = useQuery({
    queryKey: ["bookings", filter,sortBy],
    queryFn: () => getBookings({ filter,sortBy }),
  });

  return { isLoading, error, bookings,count };
}
