import './darkmode.css';
import { Demo } from '../../Demo';

export default function DarkMode() {
  return (
    <Demo>
      <Demo.Implementation>
        <div>
          <h1 className="mb-6 pt-6 text-4xl">Themes</h1>
          <div className="flex items-center gap-2">
            <label className="text-2xl">Toggle dark mode</label>
            <input className="theme-toggle h-6 w-6" type="checkbox" />
          </div>
          <p className="mt-4 text-xl text-slate-500">
            Sorry for the flashing 😬
          </p>
        </div>
      </Demo.Implementation>
      <Demo.Source
        foo={`:root {
  --bg-color: black;
  --text-color: white;
}

:root:has(.theme-toggle:checked) {
  --bg-color: white;
  --text-color: black;
}
`}
        html={`<input class="theme-toggle" type="checkbox" />`}
      ></Demo.Source>
    </Demo>
  );
}
