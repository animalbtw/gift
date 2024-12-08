'use client'

import { useEffect, useState } from "react";
import classNames from "classnames";
import AudioPlayer from 'react-h5-audio-player';
import { getAudio } from "./shared/api/strapi";
import style from './assets/styles/page.module.css'
import anim from './assets/styles/animations.module.css'


export default function Home() {
  const [audio, setAudio] = useState('')

  useEffect(() => {
    getAudio().then(res => setAudio(res?.data.data.file.url))
  }, [])

  return (
    <div className={classNames('container', anim.slide)}>
      <AudioPlayer
        className={style.player_container}
        src={`${process.env.NEXT_PUBLIC_STRAPI}${audio}`}
        onPlay={() => console.log("onPlay")}
        showJumpControls={false}
        showDownloadProgress={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
      />
    </div>
  );
}
