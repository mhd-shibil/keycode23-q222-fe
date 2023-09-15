import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame } from "remotion";
import { dummyMap } from "../../constants";
import { Rain } from "../Rain/Rain";

export const MyVideo = ({ jsonData }) => {
  const frame = useCurrentFrame();

  const getTranslateX = (val) => {
    if (val?.length) {
      const translateX = interpolate(frame, [val[0], val[1]], [0, 1000]);
      return `translateX(${translateX}px)`;
    } else return "";
  };

  const getTranslateY = (val) => {
    if (val?.length) {
      const translateY = interpolate(frame, [val[0], val[1]], [0, 1000]);
      return `translateY(${translateY}px)`;
    } else return "";
  };

  const getRotate = (val) => {
    if (val) {
      console.log(val);
      const rotateX = interpolate(frame, [0, 200], [0, 1080], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      });
      return `rotate(${rotateX}deg)`;
    }
    return "";
  };

  const getScaleX = (val) => {
    if (val && val !== 1) {
      const scaleX = interpolate(frame, [0, 200], [1, 2], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      });
      return `scaleX(${scaleX})`;
    }
    return "";
  };

  const getScaleY = (val) => {
    if (val && val !== 1) {
      const scaleY = interpolate(frame, [0, 200], [1, 2], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      });
      return `scaleX(${scaleY})`;
    }
    return "";
  };

  return (
    <>
      <AbsoluteFill style={{backgroundColor: '#87CEEB'}}>
        {jsonData?.map((layer) => {
          return (
              <Img 
              style={{
                position: 'absolute',
                bottom: `${layer?.bottom}px`,
                left: `${layer?.left}px`,
                width: 200,
                transform: `${
                  getTranslateX(layer.translateX) +
                  getTranslateY(layer.transalteY)
                } 
                  ${getRotate(layer.rotate)} ${getScaleX(
                  layer.scaleX
                )}`,
              }} width={200} src={dummyMap[layer?.object]} />
          );
        })}
        <Rain/>
      </AbsoluteFill>
    </>
  );
};
