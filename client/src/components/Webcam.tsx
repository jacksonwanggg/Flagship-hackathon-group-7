import { Webcam } from '@webcam/react';

export const WebcamSnapshot = () => (
  <Webcam mirrored>
    {({ getSnapshot }) => (
      <button onClick={() => getSnapshot({ quality: 0.8 })}>
        Make photo
      </button>
    )}
  </Webcam>
);