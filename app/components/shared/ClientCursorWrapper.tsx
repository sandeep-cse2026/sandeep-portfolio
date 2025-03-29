"use client";

import dynamic from "next/dynamic";

// Dynamically import CursorEffect component with no SSR
// This is correct here because this is a Client Component
const CursorEffect = dynamic(() => import("../ui/CursorEffect"), {
  ssr: false,
});

export default function ClientCursorWrapper() {
  return <CursorEffect />;
}
