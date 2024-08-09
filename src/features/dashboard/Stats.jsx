import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { FaRegChartBar } from "react-icons/fa";

function Stats({ bookings, confirmedStays,numDays,cabinCount }) {
  // 1
  const numBookings = bookings.length;

//   2;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

//   3
const checkins=confirmedStays.length;

// 4
const occupied=confirmedStays.reduce((acc,cur)=>acc+cur.numNights,0)/(numDays*cabinCount) ;
// num days * num cabins 


  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check Ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupied*100)+'%'}
      />
    </>
  );
}

export default Stats;


