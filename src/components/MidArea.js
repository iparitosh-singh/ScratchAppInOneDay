import { useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";
import Editor from "./Editor";

export default function MidArea() {


  return (
    <div className="flex-1 h-full overflow-hidden">
        <Editor />
    </div>
  );
}
