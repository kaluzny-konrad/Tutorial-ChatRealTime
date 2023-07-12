import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const session = await getServerSession();
  return <div>{session?.user.email}</div>;
}
