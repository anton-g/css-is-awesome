/* eslint-disable react/no-unescaped-entities */
import './tabs.css';
import { Demo } from '../../Demo';

export default function Tabs() {
  return (
    <Demo>
      <Demo.Implementation>
        <div className="tabs">
          <div className="tab-group">
            <input
              defaultChecked
              id="tab1"
              name="tab"
              type="radio"
              value="Tab 1"
            />
            <label htmlFor="tab1">Tab 1</label>
            <input id="tab2" name="tab" type="radio" value="Tab 2" />
            <label htmlFor="tab2">Tab 2</label>
            <input id="tab3" name="tab" type="radio" value="Tab 3" />
            <label htmlFor="tab3">Tab 3</label>
          </div>
          <div className="tab-panel" data-tab="Tab 1">
            <h2 className="text-3xl">Tab 1</h2>
            <p>
              Built in 1913, the Seagull monument in the Salt Lake City
              commemorates the ‘Miracle of the Gulls’, an event wherein the
              seagulls ended a severe cricket infestation, thereby helping the
              Mormon settlers.
            </p>
          </div>
          <div className="tab-panel" data-tab="Tab 2">
            <h2 className="text-3xl">Tab 2</h2>
            <p>
              Did you know that a group of hippopotamus are called a "bloat"?
              Neither did I but now you all know.
            </p>
          </div>
          <div className="tab-panel" data-tab="Tab 3">
            <h2 className="text-3xl">Tab 3</h2>
            <p>
              In 1971 two fans approached Zappa during a break in his show in
              Stockholm, asking him to come to their house after the show and
              wake up their brother Hannes. Zappa thought this was a grand idea.
              He went home with the fans, walked into Hannes’ bedroom and said,
              “Hannes! Hannes! Wake up! It’s me, Frank Zappa!” The parents,
              along with Hannes, woke up, and everyone sat up talking until
              dawn.
            </p>
          </div>
        </div>
      </Demo.Implementation>
      <Demo.Source
        foo={`.tabs:has(input[type='radio'][value='Tab 1']:checked) 
  .tab-panel[data-tab='Tab 1'] {
    display: block;
}
`}
        html={`<div class="tabs">
  <div class="tab-group">
    <input id="tab1" name="tab" type="radio" value="Tab 1" />
    <label html="tab1">Tab 1</label>
    <input id="tab2" name="tab" type="radio" value="Tab 2" />
    <label html="tab2">Tab 2</label>
    ...
  </div>
  <div class="tab-panel" data-tab="Tab 1">
    <h2>Tab 1</h2>
    <p>Content</p>
  </div>
  <div class="tab-panel" data-tab="Tab 2">...</div>
  ...
</div>`}
      ></Demo.Source>
    </Demo>
  );
}
