"use client";
import { useState } from "react";

export default function LikeButton({ title }: { title: string }) {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      aria-label={`Лайк: ${title}`}
    >
      ❤ {likes}
    </button>
  );
}
