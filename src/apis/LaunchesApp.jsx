import React from "react";
import Launches from "./Launches";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Chat() {
  const client = new QueryClient();

  return (
    <>
      <h1>Launches GraphQl</h1>
      <hr />
      <QueryClientProvider client={client}>
        <Launches />
      </QueryClientProvider>
      ,
    </>
  );
}
