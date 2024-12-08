'use client'

import classNames from "classnames";
import ReactAudioPlayer from 'react-audio-player';
import anim from './assets/styles/animations.module.css'

export default function Home() {
  return (
    <div className={classNames('container', anim.slide)}>
      <ReactAudioPlayer
        src="my_audio_file.ogg"
        autoPlay
        controls
      />
    </div>
  );
}
