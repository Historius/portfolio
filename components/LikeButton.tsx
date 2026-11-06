"use client";
import { useState } from "react";

export default function LikeButton({ title }: { title: string }) {
  const [liked, setLiked] = useState(0);

  return (
    <button onClick={() => setLiked((prev) => prev + 1)}>
      {title} ({liked})
    </button>
  );
}
