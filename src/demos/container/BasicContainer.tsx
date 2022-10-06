import './basicContainer.css';
import { Demo } from '../../Demo';
import { useState } from 'react';

export default function BasicContainer() {
  const [count, setCount] = useState(6);

  return (
    <Demo>
      <Demo.Implementation>
        <div className="basic-container mx-auto">
          <h1 className="mb-6 pt-6 text-4xl">Container Query</h1>
          <div className="mx-auto flex w-fit gap-4">
            <button
              className="mx-auto mt-auto w-fit rounded border-b-4 border-green-700 bg-green-500 py-2 px-4 font-bold text-white hover:border-green-500 hover:bg-green-400"
              onClick={() => setCount(count + 1)}
            >
              Add child
            </button>
            <button
              className="mx-auto mt-auto w-fit rounded border-b-4 border-green-700 bg-green-500 py-2 px-4 font-bold text-white hover:border-green-500 hover:bg-green-400"
              onClick={() => setCount(count - 1)}
            >
              Remove child
            </button>
          </div>
          <ul className="mt-4 flex h-80 flex-wrap items-start justify-center gap-1">
            {[...Array(count)].map((x, i) => (
              <li key={i}>
                <span></span>
              </li>
            ))}
          </ul>
        </div>
      </Demo.Implementation>
      <Demo.Source
        foo={`li { container-type: inline-size; }

li span { background-color: gold; }

@container (min-width: 45ch) {
  li span {
    background-color: rebeccapurple;
  }
}

@container (min-width: 90ch) { ... }
`}
        html={`<ul>
  <li><span></span></li>
  <li><span></span></li>
  ...
</ul>`}
      ></Demo.Source>
    </Demo>
  );
}
