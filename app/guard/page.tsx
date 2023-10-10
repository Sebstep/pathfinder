import React from "react";
import Rhf from "@/components/forms/Rhf";
import Typography from "@mui/material/Typography";

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
