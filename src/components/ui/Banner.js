"use client";
import Image from "next/image";
import bannerImg from "@/assets/ban.jpg";
import shopping from "@/assets/Shopping.json";
import { Grid } from "@mui/material";
import Lottie from "lottie-react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-700 to-blue-500 lg:min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto pt-14 pb-5 px-4 sm:px-6 lg:px-5">
        <div className="relative  rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative z-10 py-10 px-8 sm:py-16 sm:px-12 lg:px-16 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Welcome to Our E-Commerce Store
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                Discover amazing deals on a wide range of products!
              </p>
              <Link href={'/shop'}>
              <button className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Shop Now
              </button>
              </Link>
            </div>
            <div className="mt-8 sm:mt-0 sm:ml-8 w-full sm:w-auto flex justify-center items-center">
              <Lottie animationData={shopping} className="w-[70%] h-[70%]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
