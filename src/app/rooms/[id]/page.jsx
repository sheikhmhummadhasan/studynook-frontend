import RoomsDetailcard from "@/Components/RoomsDetailcard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const RoomDetailPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);
  const prom = await fetch(`https://study-nook-backend-tau.vercel.app/studynook/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await prom.json();
  console.log(res);

  return (
    <div>
      <RoomsDetailcard res={res} />
    </div>
  );
};

export default RoomDetailPage;
