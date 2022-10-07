import './containerCard.css';
import { Demo } from '../../Demo';
import { useState } from 'react';

export default function ContainerCard() {
  const [count, setCount] = useState(6);

  return (
    <Demo hideSource>
      <Demo.Implementation>
        <div className="card-wrapper w-64">
          <div className="card mx-auto">
            <div className="card_img"></div>
            <div className="card_content">
              <h3 className="text-3xl font-semibold">
                What a fantastic feature
              </h3>
              <p>
                Did you know that you can set "resize: horizontal" to enable
                resizing an element?
              </p>
            </div>
          </div>
        </div>
      </Demo.Implementation>
    </Demo>
  );
}
