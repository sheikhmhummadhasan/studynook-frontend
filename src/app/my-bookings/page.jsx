import { auth } from "@/lib/auth";
import { Calendar, TrashBin } from "@gravity-ui/icons";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const prom = await fetch(`http://localhost:5000/booking`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await prom.json();
  const handleCancel = (e) => {
    e.preventDefault;
  };
  return (
    <div className="mx-auto w-full md:w-9/12 space-y-5 px-4 py-8 sm:px-6">
        <p className="text-6xl text-center font-bold xl mt-2 block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">My Bookings</p>
      {res.map((booking) => {
        const { _id, roomName, imageUrl, bookingDate, hourlyRate, status } =
          booking;
        return (
          <div
            key={booking._id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-56 sm:w-60 md:w-72 lg:w-80">
                <Image
                  src={imageUrl}
                  alt={roomName || "Room"}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-cyan-800 shadow-sm backdrop-blur">
                  StudyNook
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5 md:flex-row md:items-center md:p-6">
                <div className="min-w-0 flex-1">
                  <h2 className="break-words text-xl font-bold text-slate-800">
                    {roomName}
                  </h2>

                  <div className="mt-4 flex items-start gap-3">
                    <Calendar className="mt-0.5 size-5 shrink-0 text-cyan-600" />

                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Booking Date
                      </p>
                      <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                        {bookingDate
                          ? new Date(bookingDate).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          : "Date not available"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                        status?.toLowerCase() === "cancelled"
                          ? "bg-red-50 text-red-600"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      <span
                        className={`size-2 rounded-full ${
                          status?.toLowerCase() === "cancelled"
                            ? "bg-red-500"
                            : "bg-emerald-500"
                        }`}
                      />
                      {status || "Confirmed"}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-slate-500">Hourly Rate</p>
                    <p className="mt-1 text-2xl font-bold text-cyan-700">
                      ${hourlyRate}
                      <span className="ml-1 text-sm font-normal text-slate-500">
                        / hour
                      </span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 md:flex md:min-w-40 md:items-center md:border-l md:border-t-0 md:pl-5 md:pt-0">
                  {status?.toLowerCase() !== "cancelled" && (
                    <button
                      type="button"
                    //   onClick={() => onCancel?.(_id)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 transition hover:border-red-500 hover:bg-red-50"
                    >
                      <TrashBin className="size-4" />
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyBookingPage;
