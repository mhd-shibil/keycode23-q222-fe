import React from 'react'
import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import RainDropImage from './raindrop.svg';
import SnowFlake from './snowflake.svg';

export const RainDrop = ({
  delay,
  x,
  size

}) => {
  const {fps}=useVideoConfig();
  const frame=useCurrentFrame();
  const drop = spring({
    fps,
    frame:frame-delay,
    config:{
      damping: 1000
    },
    durationInFrames: 200
  });
  const top = interpolate(drop,[0,1],[-0.2,1.1],{
    extrapolateLeft: "identity",
    extrapolateRight: "identity",});
  return (
    <Img 
     style={{
        width: 30,
        position: 'absolute',
        left: x,
        top: top*100+'%',
        transform: `scale(${size})`
      }} 
       src={SnowFlake} />
  
  )
}
