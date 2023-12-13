<<<<<<< HEAD
"use client"; // Add this line to mark the component as a client entry

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetCart } from '@/redux/proSlice';
import Container from '@/components/Container';
import Link from 'next/link';
=======
"use client";

import Container from "@/components/Container";
import { resetCart } from "@/redux/proSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Import statements...
>>>>>>> 96d62cea58e44f2ebce479a643b6f9b53891e7d3

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart());
<<<<<<< HEAD
  }, [dispatch]);
=======
  }, []);
>>>>>>> 96d62cea58e44f2ebce479a643b6f9b53891e7d3

  return (
    <Container className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">
          Your Payment Accepted by nextamazonpro.com
        </h2>
        <p>Now you can view your Orders or continue Shopping with us</p>
        <div className="flex items-center gap-x-5">
<<<<<<< HEAD
          <Link href="/order">
=======
          <Link href={"/order"}>
>>>>>>> 96d62cea58e44f2ebce479a643b6f9b53891e7d3
            <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-designColor duration-300">
              View Orders
            </button>
          </Link>
<<<<<<< HEAD
          <Link href="/">
=======
          <Link href={"/"}>
>>>>>>> 96d62cea58e44f2ebce479a643b6f9b53891e7d3
            <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-designColor duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Page;
