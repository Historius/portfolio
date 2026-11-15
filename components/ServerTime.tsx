import { connection } from "next/server";

export default async function ServerTime() {
  await connection();
  const now = new Date().toLocaleTimeString("ru-RU");
  return <p>Время сервера: {now}</p>;
}
