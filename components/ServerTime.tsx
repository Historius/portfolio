import LocalTime from "./LocalTime";
import { connection } from "next/server";
import { Suspense } from "react";

export default async function ServerTime() {
  await connection();
  const now = new Date().toISOString();
  return (
    <p>
      Время сервера:{" "}
      <Suspense fallback="…">
        <LocalTime iso={now} />
      </Suspense>
    </p>
  );
}
