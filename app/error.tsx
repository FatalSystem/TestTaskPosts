"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-white p-4">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-6 text-gray-300">
        We&apos;re sorry for the inconvenience. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200"
      >
        Try again
      </button>
    </div>
  );
}
