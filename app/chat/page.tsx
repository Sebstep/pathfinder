import React from "react";
import Typography from "@mui/material/Typography";
import Rhf from "@/components/Rhf";

export default function Home() {
  return (
    <main className="">
      <div className="container m-auto">
        <Typography variant="h1">Chat</Typography>
        <Rhf />
      </div>
    </main>
  );
}
