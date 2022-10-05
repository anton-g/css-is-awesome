import './hover.css';
import { Demo } from '../../Demo';

export default function Hover() {
  return (
    <Demo>
      <Demo.Implementation>
        <div className="grid">
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
          <div className="grid_item"></div>
        </div>
      </Demo.Implementation>
      <Demo.Source
        foo={`.grid_item:hover {
  transform: scale(1.5);
}
.grid:has(.grid_item:hover) .grid_item:not(:hover) {
  opacity: 0.15;
}`}
        html={`<div class="grid">
  <div class="grid_item"></div>
  <div class="grid_item"></div>
  ...
  <div class="grid_item"></div>
  <div class="grid_item"></div>
</div>`}
      ></Demo.Source>
    </Demo>
  );
}
