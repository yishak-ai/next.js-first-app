"use client";
import { useState } from "react";
import React from "react";

const ErrorSmulator = ({
  message = "an error occured",
}: {
  message?: string;
}) => {
  const [error, seterror] = useState(false);
  if (error) {
    throw new Error(message);
  }
  return (
    <>
      <button
        onClick={() => seterror(true)}
        className="bg-slate-400 text-slate-50 rounded-md px-4 py-2 font-serif font-semibold"
      >
        Simulate Error
      </button>
    </>
  );
};

export default function ErrorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold font-mono text-blue-600">
        Error page{" "}
      </h1>
      <ErrorSmulator message="error in rooot layout" />
      {children}
    </div>
  );
}
