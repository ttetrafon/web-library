import { clamp } from "@ttetrafon/core";
import { Button } from "@ttetrafon/react";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Component Playground</h1>
      <p>Use this app to develop and test your components.</p>

      <section>
        <h2>Button</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant="primary" onClick={() => alert("Primary clicked!")}>
            Primary
          </Button>
          <Button variant="secondary" onClick={() => alert("Secondary clicked!")}>
            Secondary
          </Button>
        </div>
      </section>

      <section>
        <h2>Core utilities</h2>
        <p>clamp(15, 0, 10) = {clamp(15, 0, 10)}</p>
      </section>
    </div>
  );
}
