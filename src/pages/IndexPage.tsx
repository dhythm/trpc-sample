import React from "react";
import { trpc } from "../utils/trpc";
export default function IndexPage() {
  const user = trpc.getUser.useQuery("9b47e0ac-899a-42ec-9459-5370ee6f4fb3");
  if (user.data === undefined) return <div>Loading...</div>;

  return (
    <div>
      <p>Hello, {user.data ? user.data.name : "World"}!</p>
    </div>
  );
}
