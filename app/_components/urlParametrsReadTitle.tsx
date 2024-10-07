"use client";

import { useSearchParams } from "next/navigation";

const UrlParametrsReadTitle = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");

  return <p className="text-4xl font-bold">{title}</p>;
};

export default UrlParametrsReadTitle;
