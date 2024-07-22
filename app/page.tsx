"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [url, setUrl] = useState(1);
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    setUrl(Math.floor(Math.random() * 7) + 1);
    setLoading(1);
  }, []);
  return (
    <div>
      {loading === 0 ? (
        <p className="text-center text-xl py-5">Loading...</p>
      ) : (
        <div className="text-center">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Image
              src={`/${url}.jpg`}
              alt="Loading..."
              width={300}
              height={300}
              className="hidden lg:flex"
            />
            <Image
              src="/loading.jpg"
              alt="Loading..."
              width={300}
              height={300}
            />
            <Image
              src={`/${url + 1}.jpg`}
              alt="Loading..."
              width={300}
              height={300}
              className="hidden lg:flex"
            />
          </div>
          <Link href="/certification">
            <button className="mt-4 mb-4 px-4 py-2 bg-blue-500 text-white rounded">
              게시물 만들러 가기 → → →
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
