import React from "react";
import RoomsCard from "./RoomsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const RoomsDataFetch = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session)
  const prom = await fetch(
    `https://study-nook-backend-tau.vercel.app/studynook` );
  const res = await prom.json();

  return (
    <div>
      <div className="my-5">
        <h1 className="text-6xl text-center font-bold xl mt-2 block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
          All Rooms
        </h1>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {res.map((e) => (
            <RoomsCard key={e._id} e={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsDataFetch;
