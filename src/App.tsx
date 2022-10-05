import Hover from './demos/hover/Hover';
import Tabs from './demos/tabs/Tabs';

export default function App() {
  return (
    <div className="mx-auto flex h-full items-center justify-center p-4 text-center">
      {/* <Intro /> */}
      {/* <Hover /> */}
      <Tabs />
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
