"use client";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
      onClick={() => router.back()}
    >
      Back
    </button>
  );
};

export default GoBackButton;
