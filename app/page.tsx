'use client'

import classNames from "classnames";
import AudioPlayer from 'react-h5-audio-player';
import anim from './assets/styles/animations.module.css'

const mp3 = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'

export default function Home() {
  return (
    <div className={classNames('container', anim.slide)}>
      <AudioPlayer
        autoPlay
        src={mp3}
        onPlay={() => console.log("onPlay")}
        showJumpControls={false}
        showDownloadProgress={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
      // other props here
      />
    </div>
  );
}
