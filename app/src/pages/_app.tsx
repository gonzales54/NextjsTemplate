import "@/styles/globals.css";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import { initMock } from "@/mocks";

if(process.env.NODE_ENV === "development") {
  initMock();
}

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if(!isLoading) {
      setLoading(true);
    }
  }, [isLoading]);

  if(!isLoading) return <></>
  return <Component {...pageProps} />;
}
