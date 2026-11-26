import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hello React!</p>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(0)} >reset</button>
      <p>{count % 2 ? "odd" : "even"}</p>
    </div>
  );
}
