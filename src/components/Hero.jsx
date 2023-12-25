/* eslint-disable no-unused-vars */
import React from "react";
import img from "../assets/Image.svg";

export const Hero = () => {
  return (
    <section className="container mx-auto text-white mt-28 md:-mt-16">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mx-11 h-screen">
        <div className="space-y-8 mb-72 md:mb-0 ">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Ac mattis senectus erat pharetra
          </h1>
          <p className="text-lg">
            Dictum aliquam porta in condimentum ac integer turpis pulvinar, est
            scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Suspendisse
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Malesuada
            </a>
          </div>
        </div>
        <div className=" md:mt-0">
          <img
            src={img}
            alt="hero"
            // width={500}
            className="object-contain h-[300px] md:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};
