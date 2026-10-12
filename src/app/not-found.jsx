'use client'
import { Button } from "@heroui/react";
import { House, ArrowLeft } from "@gravity-ui/icons";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center bg-white px-4 py-12 text-center text-black">
      <h1 className="text-8xl font-black tracking-tight sm:text-9xl">404</h1>

      <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Page Not Found</h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
       href={'/'}
        className="mt-8 bg-black px-6 p-4 rounded-full font-medium text-white hover:bg-gray-800"
        startContent={<House />}
      >
        Go Back Home
      </Link>

      <button
        onClick={() => window.history.back()}
        className="mt-5 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
      >
        <ArrowLeft />
        Go Back
      </button>
    </section>
  );
};

export default NotFound;
