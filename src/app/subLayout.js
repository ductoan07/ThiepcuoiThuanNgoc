"use client";
import { Suspense } from "react";
import Loading from "./component/loading/loading";

function Sublayout({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default Sublayout;
