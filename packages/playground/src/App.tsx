import { clamp } from "@ttetrafon/core";
import { Button, MarkdownEditor } from "@ttetrafon/react";

export default function App() {
  return (
    <div className="p-6 h-dvh">
      {/* <h1>Component Playground</h1>
      <p>Use this app to develop and test your components.</p> */}

      <MarkdownEditor editable={true}></MarkdownEditor>
    </div>
  );
}
