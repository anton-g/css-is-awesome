import { useEffect, useState } from 'react';
import ChildCount from './demos/childcount/ChildCount';
import BasicContainer from './demos/container/BasicContainer';
import ContainerCard from './demos/containercard/ContainerCard';
import DarkMode from './demos/darkmode/DarkMode';
import FormError from './demos/error/FormError';
import Hover from './demos/hover/Hover';
import Other from './demos/other/Other';
import Peter from './demos/peter/Peter';
import Tabs from './demos/tabs/Tabs';

export default function App() {
  const [stage, setStage] = useState(0);

  const parts = [
    Intro,
    FormError,
    Other,
    Hover,
    Tabs,
    ChildCount,
    DarkMode,
    BasicContainer,
    ContainerCard,
    Peter,
    Thanks,
  ];

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === ' ' || e.key === 'ArrowRight') {
        if (stage < parts.length - 1) {
          setStage((s) => s + 1);
        }
      }
      if (e.key === 'ArrowLeft') {
        if (stage > 0) setStage((s) => s - 1);
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [parts, stage]);

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
      <p className="my-8 text-4xl">www.asdf.pizza 🇸🇪</p>
    </div>
  );
}

function Thanks() {
  return (
    <div>
      <h1 className="text-8xl">Thank you!</h1>
      <p className="my-8 text-4xl">css-fuck-yeah.netlify.app</p>
      <p className="my-8 text-4xl">github.com/anton-g/css-is-awesome</p>
      <p className="my-8 text-4xl">@awnton</p>
      <p className="my-8 text-4xl">antongunnarsson.com</p>
      <p className="text-l my-20 mx-auto max-w-lg text-center">
        Shoutout to Ahmad Shadeed, Jhey Thompkins & Stephanie Eckles for
        inspiration. Go check them out :)
      </p>
    </div>
  );
}
