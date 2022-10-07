import { Demo } from '../../Demo';

export default function Peter() {
  return (
    <Demo hideSource>
      <Demo.Implementation>
        <iframe
          style={{ height: '100vh', width: '800px' }}
          scrolling="no"
          title="Peter's CSS Blinds 😎 [Pull the cord][Container Queries]"
          src="https://codepen.io/jh3y/embed/poVWrPK?default-tab=result"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen{' '}
          <a href="https://codepen.io/jh3y/pen/poVWrPK">
            Peter's CSS Blinds 😎 [Pull the cord][Container Queries]
          </a>{' '}
          by Jhey (<a href="https://codepen.io/jh3y">@jh3y</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </Demo.Implementation>
    </Demo>
  );
}
