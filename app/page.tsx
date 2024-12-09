'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import classNames from "classnames";
import AudioPlayer from 'react-h5-audio-player';
import { getAudio, getCounter, updateCounter } from "./shared/api/strapi";
import { Snowfall } from "./widgets/snowfall";
import bg from '../public/bg.png'
import style from './assets/styles/page.module.css'
import anim from './assets/styles/animations.module.css'


export default function Home() {
  const [audio, setAudio] = useState('')
  const [streamings, setStreamings] = useState(0)

  useEffect(() => {
    getAudio().then(res => setAudio(res?.data.data.file.url))
    getCounter().then(res => setStreamings(res?.data.data.streaming))
  }, [])

  return (
    <div className={classNames('container', anim.slide)}>
      <div className={style.background} />
      <AudioPlayer
        className={style.player_container}
        src={`https://gitfcms.up.railway.app${audio}`}
        onPlay={() => updateCounter(streamings + 1)}
        showJumpControls={false}
        showDownloadProgress={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
      />
      <Snowfall />
    </div>
  );
}
