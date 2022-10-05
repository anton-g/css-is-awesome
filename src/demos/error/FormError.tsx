import './formError.css';
import { Demo } from '../../Demo';

export default function FormError() {
  return (
    <Demo>
      <Demo.Implementation>
        <form className="form-error mx-auto">
          <div className="flex items-center gap-5 text-4xl">
            <label htmlFor="email">Email</label>
            <input
              className="form-control m-0 w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-4xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="email"
              type="email"
            ></input>
          </div>
        </form>
      </Demo.Implementation>
      <Demo.Source
        foo={`input { border: 4px solid var(--color); }
label { color: var(--color); }

form:has(:invalid) { --color: red; }
form:has(:focus) { --color: white; }
form:has(:valid) { --color: green; }
form:has(:placeholder-shown) { --color: white; }
`}
        html={`<form>
  <label for="email">Email</label>
  <input type="email" id="email" placeholder=".." pattern="..." />
</form>`}
      ></Demo.Source>
    </Demo>
  );
}
