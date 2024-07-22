"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [detail, setDetail] = useState("");
  const [tee, setTee] = useState("🏠 일상");
  const [hidden, setHidden] = useState(true);
  return (
    <div id="page">
      <Link href="/">
        <p>← back</p>
      </Link>
      <div className="text-center justify-center items-center">
        <h1 className="text-xl mb-5 mt-2">게시물 만들기</h1>
        <input type="file" id="fileInput" accept="image/" />
        <select
          defaultValue="daily"
          onChange={(e) => {
            setTee(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="🏠 일상">🏠 일상</option>
          <option value="🏫 학교">🏫 학교</option>
          <option value="📖공부">📖공부</option>
          <option value="💻 코딩">💻 코딩</option>
        </select>
        <textarea
          className="border-2 border-blue-500 rounded-lg p-2 m-2 w-full h-32 resize-none mt-5"
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        ></textarea>
        <button
          className=" bg-blue-500 text-white rounded p-3 px-10"
          onClick={() => {
            setHidden(false);
          }}
        >
          인증하기!
        </button>
      </div>
      <div
        className={hidden ? "hidden" : "m-10 border-blue-400 border-4 pt-2 "}
      >
        <p className="text-center">사진은 준비하지 못했습니다 :(</p>
        <div className="p-3 pt-5 pb-10">
          <p className="text-xl mb-3 text-center">목표 : {tee}</p>
          <p className="text-xl text-center">{detail}</p>
        </div>
      </div>
    </div>
  );
}
