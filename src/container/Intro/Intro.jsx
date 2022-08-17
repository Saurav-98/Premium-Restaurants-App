import React from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className="app__video-overlay flex__center">
        <div
          onClick={handleV}
          className="app__video-overlay_circle flex__center"
        ></div>
      </div>
    </div>
  );
};

export default Intro;
