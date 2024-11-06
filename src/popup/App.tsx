import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import wxtLogo from "/wxt.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div>
        <a href="https://wxt.dev" target="_blank" rel="noreferrer">
          <img src={wxtLogo} className="logo inline-block" alt="WXT logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react logo-spin inline-block"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl leading-tight">WXT + React + Tailwind</h1>
      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium 
                   bg-zinc-800 hover:border-indigo-500 transition-colors duration-250
                   focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="font-mono">src/App.tsx</code> and save to test
          HMR
        </p>
      </div>
      <p className="text-zinc-400">
        Click on the WXT and React logos to learn more
      </p>
    </div>
  );
}

export default App;
