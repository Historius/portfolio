import { cookies } from "next/headers";

export default async function Welcome() {
  const cookieStore = await cookies();
  const userName = cookieStore.get("userName")?.value ?? "Guest";
  return <p>Добро пожаловать, {userName}!</p>;
}
