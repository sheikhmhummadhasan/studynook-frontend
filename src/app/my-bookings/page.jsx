import CancelBooking from "@/Components/CancelBooking";
import NoBookings from "@/Components/NoBookings";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyBookingPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const prom = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await prom.json();
  
  return(
    res.length === 0 ?  <NoBookings /> : <CancelBooking res={res} /> 
  ) 
};

export default MyBookingPage;
