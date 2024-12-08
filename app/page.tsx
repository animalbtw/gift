'use client'

import { useEffect, useState } from "react";
import classNames from "classnames";
import AudioPlayer from 'react-h5-audio-player';
import { getAudio, getCounter, updateCounter } from "./shared/api/strapi";
import style from './assets/styles/page.module.css'
import anim from './assets/styles/animations.module.css'


export default function Home() {
  const [audio, setAudio] = useState('')
  const [streamings, setStreamings] = useState(0)

  useEffect(() => {
    getAudio().then(res => {
      console.log(res)
      setAudio(res?.data.data.file.name)
    })
    getCounter().then(res => setStreamings(res?.data.data.streaming))
  }, [])



  return (
    <div className={classNames('container', anim.slide)}>
      <AudioPlayer
        className={style.player_container}
        src={`https://gitfcms.up.railway.app/uploads/${audio}`}
        onPlay={() => updateCounter(streamings + 1)}
        showJumpControls={false}
        showDownloadProgress={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
      />
    </div>
  );
}
