import { useQuery } from "@tanstack/react-query";
// import { getCabins } from "../../services/apiCabins";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";
// import { id } from "date-fns/locale";

export function useBooking(){
  const {bookingId}=useParams();
    const {
        isLoading,
        data: booking,
        error,
      } = useQuery({
        queryKey: ["booking",bookingId],
        queryFn:()=> getBooking(bookingId),
        retry:false
      });

      return {isLoading,error,booking}

}