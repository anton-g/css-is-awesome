import ChildCount from './demos/childcount/ChildCount';
import FormError from './demos/error/FormError';
import Hover from './demos/hover/Hover';
import Other from './demos/other/Other';
import Tabs from './demos/tabs/Tabs';

export default function App() {
  return (
    <div className="mx-auto flex h-full items-center justify-center p-4 text-center">
      {/* <Intro /> */}
      {/* <Hover /> */}
      {/* <Tabs /> */}
      {/* <Other /> */}
      {/* <ChildCount /> */}
      <FormError />
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
