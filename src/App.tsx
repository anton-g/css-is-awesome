import { useState } from 'react';
import ChildCount from './demos/childcount/ChildCount';
import BasicContainer from './demos/container/BasicContainer';
import DarkMode from './demos/darkmode/DarkMode';
import FormError from './demos/error/FormError';
import Hover from './demos/hover/Hover';
import Other from './demos/other/Other';
import Tabs from './demos/tabs/Tabs';

export default function App() {
  const [stage, setStage] = useState(0);

  const parts = [
    BasicContainer,
    Intro,
    Hover,
    FormError,
    Other,
    Tabs,
    ChildCount,
    DarkMode,
    Thanks,
  ];

  const Current = parts[stage];

  return (
    <div className="mx-auto flex h-full items-center justify-center p-4 text-center">
      {stage < parts.length - 1 && (
        <button
          className="absolute top-2 right-2 mx-auto mt-auto w-fit rounded border-b-4 border-gray-700 bg-gray-500 py-2 px-4 font-bold text-white hover:border-gray-500 hover:bg-gray-400"
          onClick={() => setStage(stage + 1)}
        >
          Next
        </button>
      )}
      {stage > 0 && (
        <button
          className="absolute top-2 left-2 mx-auto mt-auto w-fit rounded border-b-4 border-gray-700 bg-gray-500 py-2 px-4 font-bold text-white hover:border-gray-500 hover:bg-gray-400"
          onClick={() => setStage(stage - 1)}
        >
          Prev
        </button>
      )}
      <Current />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1 className="text-8xl">
        CSS <strong>*is*</strong> awesome
      </h1>
      <p className="mt-24 mb-8 text-6xl">Anton Gunnarsson</p>
      <p className="my-8 text-4xl">Mpya Digital</p>
      <p className="my-8 text-4xl">www.asdf.pizza</p>
    </div>
  );
}

function Thanks() {
  return (
    <div>
      <h1 className="text-8xl">Thank you!</h1>
      <p className="mt-24 mb-8 text-6xl">Anton Gunnarsson</p>
      <p className="my-8 text-4xl">Mpya Digital</p>
      <p className="my-8 text-4xl">@awnton</p>
    </div>
  );
}
