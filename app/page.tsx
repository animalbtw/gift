'use client'

import AudioPlayer from 'react-h5-audio-player';
import classNames from "classnames";
import anim from './assets/styles/animations.module.css'

export default function Home() {
  return (
    <div className={classNames('container', anim.slide)}>
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        onPlay={() => console.log("onPlay")}
      />
    </div>
  );
}
