import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-100/70">
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl sm:h-96 sm:w-96" />

        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/70 px-4 py-2 text-sm font-bold text-cyan-700 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
              Your Space, Your Success
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Find Your Perfect
              <span className="mt-2 block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                Study Rooms
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Discover comfortable rooms designed for focus, creativity, and
              productivity. Find a space that inspires you to learn, grow, and
              achieve more every day.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-cyan-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Explore Rooms
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/90 bg-white/65 px-8 py-4 text-base font-bold text-slate-800 shadow-md backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-t border-slate-200/80 pt-7 lg:justify-start">
              <div>
                <p className="text-2xl font-extrabold text-slate-900">
                  Comfort
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Designed for focus
                </p>
              </div>

              <div className="hidden h-10 w-px bg-slate-200 sm:block" />

              <div>
                <p className="text-2xl font-extrabold text-slate-900">
                  Flexible
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Spaces for everyone
                </p>
              </div>

              <div className="hidden h-10 w-px bg-slate-200 sm:block" />

              <div>
                <p className="text-2xl font-extrabold text-slate-900">Simple</p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Easy room booking
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -right-3 top-8 h-24 w-24 rounded-full bg-cyan-300/40 blur-2xl sm:-right-5 sm:h-32 sm:w-32" />

            <div className="absolute -bottom-4 -left-3 h-28 w-28 rounded-full bg-sky-300/40 blur-2xl sm:-left-5 sm:h-36 sm:w-36" />

            <div className="relative rounded-[2rem] border border-white/80 bg-white/40 p-3 shadow-2xl shadow-sky-900/10 backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-5">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-cyan-100 via-sky-100 to-blue-200 sm:rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                  alt="Bright modern study and workspace"
                  className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-sky-900/10" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="rounded-2xl border border-white/50 bg-white/20 p-4 text-white shadow-xl backdrop-blur-xl sm:p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                      Welcome to StudyNook
                    </p>

                    <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                      A Better Place to Focus
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-white/85">
                      Find your comfort zone and make every study session count.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-8 max-w-[190px] rounded-2xl border border-white/80 bg-white/75 p-3 shadow-xl backdrop-blur-2xl sm:-left-8 sm:top-12 sm:max-w-[220px] sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-xl">
                  ✨
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Your Ideal Space
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Learn without limits
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-1 bottom-20 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-2xl sm:-right-5 sm:bottom-24 sm:px-5">
              <p className="text-sm font-extrabold text-slate-900">
                Focus More
              </p>
              <p className="mt-1 text-xs font-medium text-cyan-700">
                Achieve More
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
