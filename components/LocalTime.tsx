"use client";

import { use } from "react";
import { browser } from "react-dom";

export default function LocalTime({ iso }: { iso: string }) {
  use(browser("Часовой пояс знает только браузер"));
  const time = new Date(iso).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return <span>{time}</span>;
}
