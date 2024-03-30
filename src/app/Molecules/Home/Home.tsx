"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Define the route you want to navigate to
    const routeToLoad = "/login";

    // Navigate to the specified route
    router.push(routeToLoad);
  }, []);

  return <main></main>;
}
