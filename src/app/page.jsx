"use client";

import { useState } from "react";

export default function Home() {
  return <Lorems />;
}

const paragraphs = [
  {
    id: 1,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur facilis deleniti ad eaque voluptas, optio commodi, iure rerum minima eveniet molestias quas suscipit quae modi qui, nam corrupti maiores eius.",
  },
  {
    id: 2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur facilis deleniti ad eaque voluptas, optio commodi, iure rerum minima eveniet molestias quas suscipit quae modi qui, nam corrupti maiores eius.",
  },
  {
    id: 3,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur facilis deleniti ad eaque voluptas, optio commodi, iure rerum minima eveniet molestias quas suscipit quae modi qui, nam corrupti maiores eius.",
  },
  {
    id: 4,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur facilis deleniti ad eaque voluptas, optio commodi, iure rerum minima eveniet molestias quas suscipit quae modi qui, nam corrupti maiores eius.",
  },
  {
    id: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur facilis deleniti ad eaque voluptas, optio commodi, iure rerum minima eveniet molestias quas suscipit quae modi qui, nam corrupti maiores eius.",
  },
  {
    id: 6,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur facilis deleniti ad eaque voluptas, optio commodi, iure rerum minima eveniet molestias quas suscipit quae modi qui, nam corrupti maiores eius.",
  },
  {
    id: 7,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur facilis deleniti ad eaque voluptas, optio commodi, iure rerum minima eveniet molestias quas suscipit quae modi qui, nam corrupti maiores eius.",
  },
  {
    id: 8,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur facilis deleniti ad eaque voluptas, optio commodi, iure rerum minima eveniet molestias quas suscipit quae modi qui, nam corrupti maiores eius.",
  },
];

const Lorems = () => {
  const [lorems, setLorems] = useState([]);
  const [count, setCount] = useState(1);

  const generate = () => {
    setLorems(paragraphs.slice(0, count));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-10 mt-20">
        <h1 className="text-2xl p-4">TIRED OF BORING LOREM IPSUM ?</h1>
        <div className="flex gap-2 py-6">
          <p className="text-xl">Paragraphs:</p>
          <input
            className="bg-[#cbd5e1] rounded-sm w-12.25 px-2"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            type="number"
            min="1"
            max="8"
          />

          <button
            onClick={generate}
            className="bg-[#12b981] rounded-sm text-white p-1.5 text-sm"
          >
            Generate
          </button>
        </div>
        {lorems.map((lorem, id) => {
          return (
            <div className="flex gap-10 w-150 py-4" key={id}>
              <span>{lorem.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
