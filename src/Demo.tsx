import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const Snippet = ({ code, lang }: { code: string; lang: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="bg-white">
      <code className={`language-${lang}`} style={{ fontSize: '24px' }}>
        {code}
      </code>
    </pre>
  );
};

const DemoContext = createContext(false);
const Demo = ({ children }: { children: ReactNode }) => {
  const [showSource, setShowSource] = useState(false);

  return (
    <DemoContext.Provider value={showSource}>
      <div className="flex h-full flex-col justify-center">
        <div className="mt-auto">{children}</div>
        <button
          className="mx-auto mt-auto w-fit rounded border-b-4 border-gray-700 bg-gray-500 py-2 px-4 font-bold text-white hover:border-gray-500 hover:bg-gray-400"
          onClick={() => setShowSource(!showSource)}
        >
          {showSource ? 'Demo' : 'Source'}
        </button>
      </div>
    </DemoContext.Provider>
  );
};

const Implementation = ({ children }: { children: ReactNode }) => {
  const hide = useContext(DemoContext);

  if (hide) return null;

  return <>{children}</>;
};

const Source = ({ foo, html }: { foo: string; html: string }) => {
  const show = useContext(DemoContext);

  if (!show) return null;

  return (
    <div
      style={{
        display: 'grid',
        gap: '0 24px',
        gridTemplateColumns: 'min(40vw, 1fr) min(40vw, 1fr)',
      }}
    >
      <Snippet code={html} lang={'html'} />
      <Snippet code={foo} lang={'css'} />
    </div>
  );
};

Demo.Source = Source;
Demo.Implementation = Implementation;

export { Demo };
