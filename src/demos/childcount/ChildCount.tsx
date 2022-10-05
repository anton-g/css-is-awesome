import './childCount.css';
import { Demo } from '../../Demo';
import { useState } from 'react';

export default function ChildCount() {
  const [count, setCount] = useState(0);

  return (
    <Demo>
      <Demo.Implementation>
        <div className="other-radio mx-auto">
          <h1 className="mb-6 pt-6 text-4xl">Counting children</h1>
          <button
            className="mx-auto mt-auto w-fit rounded border-b-4 border-green-700 bg-green-500 py-2 px-4 font-bold text-white hover:border-green-500 hover:bg-green-400"
            onClick={() => setCount(count + 1)}
          >
            Add child!
          </button>
          <div className="parent mt-4 flex flex-wrap items-start justify-center gap-1">
            {[...Array(count)].map((x) => (
              <img className="h-30" key={x} src="/me.png" />
            ))}
          </div>
        </div>
      </Demo.Implementation>
      <Demo.Source
        foo={`.parent:has(:nth-child(1):last-child) { ... }
.parent:has(:nth-child(2):last-child) { ... }
.parent:has(:nth-child(3):last-child) { ... }
.parent:has(:nth-child(4):last-child) { ... }`}
        html={`<div class="parent">
  <div />
  <div />
  <div />
  ...
</div>`}
      ></Demo.Source>
    </Demo>
  );
}
