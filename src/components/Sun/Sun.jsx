import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import SunImage from'./sun.svg';

export const Sun = () => {

  const videoConfig=useVideoConfig()
  const frame=useCurrentFrame()

	const rotate = interpolate(
		frame,
		[0, 10],
		[0, 360]
	);
  return (
        <img style={{
          position: 'absolute',
        top: 50,
        left: '50%',
        transform: `rotate(${rotate}deg)`
        }} width={70} height={70} src={SunImage}/>
  )
}
