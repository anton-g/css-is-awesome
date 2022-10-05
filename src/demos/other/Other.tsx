import './other.css';
import { Demo } from '../../Demo';

export default function Other() {
  return (
    <Demo>
      <Demo.Implementation>
        <form className="other-radio mx-auto ">
          <h1 className="mb-6 pt-6 text-4xl">
            Is this a great lightning talk?
          </h1>

          <div className="flex gap-2 pl-12">
            <div className="mr-4 mb-4 flex items-center">
              <input
                className="hidden"
                defaultChecked
                id="radio1"
                name="radio"
                type="radio"
              />
              <label
                className="flex cursor-pointer items-center text-xl"
                htmlFor="radio1"
              >
                <span className="border-grey flex-no-shrink mr-2 inline-block h-8 w-8 rounded-full border"></span>
                Yes
              </label>
            </div>

            <div className="mr-4 mb-4 flex items-center">
              <input className="hidden" id="radio2" name="radio" type="radio" />
              <label
                className="flex cursor-pointer items-center text-xl"
                htmlFor="radio2"
              >
                <span className="border-grey flex-no-shrink mr-2 inline-block h-8 w-8 rounded-full border"></span>
                No
              </label>
            </div>

            <div className="mr-4 mb-4 flex items-center">
              <input
                className="other hidden"
                id="radio3"
                name="radio"
                type="radio"
              />
              <label
                className="flex cursor-pointer items-center text-xl"
                htmlFor="radio3"
              >
                <span className="border-grey flex-no-shrink mr-2 inline-block h-8 w-8 rounded-full border"></span>
                Other
              </label>
            </div>
          </div>
          <input
            className="reason-input
            form-control
            m-0
            w-full
            rounded
            border
            border-solid
            border-gray-300
            bg-white bg-clip-padding
            px-3 py-1.5 text-base
            font-normal
            text-gray-700
            transition
            ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            placeholder="Reason"
            type="text"
          ></input>
        </form>
      </Demo.Implementation>
      <Demo.Source
        foo={`.reason-input {
  display: none;
}
form:has(input.other:checked) .reason-input {
  display: block;
}`}
        html={`<form>
  <input type="radio" name="rating" /> Yes
  <input type="radio" name="rating" /> No
  <input type="radio" name="rating" class="other" /> Other
  <input type="text" class="reason-input" />
</form>`}
      ></Demo.Source>
    </Demo>
  );
}
