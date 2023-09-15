import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame } from "remotion";
import { dummyMap } from "../../constants";
import { Rain } from "../Rain/Rain";
import { Sun } from "../Sun/Sun";

export const MyVideo = ({ jsonData }) => {
  const frame = useCurrentFrame();

  const getTranslateX = (val) => {
    if (val?.length) {
      const translateX = interpolate(frame, [0, 150], [val[0], val[1]]);
      return `translateX(${translateX}px)`;
    } else return "";
  };

  const getTranslateY = (val) => {
    if (val?.length) {
      const translateY = interpolate(frame, [0, 150], [val[0], val[1]]);
      return `translateY(${translateY}px)`;
    } else return "";
  };

  const getRotate = (val) => {
    if (val) {
      const rotateX = interpolate(frame, [0, 200], [0, 1080], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      });
      return `rotate(${rotateX}deg)`;
    }
    return "";
  };

  const getWeather = (weather) => {
    switch (weather) {
      case "rainy":
        return <Rain />;
      case "snowy":
        return <Rain type="snow" />;
      case "sunny":
        return <Sun />;
      default:
        return;
    }
  };

  const getContent = (layer) => {
    switch(layer?.type) {
      case 'text': {
        return (<div 
      style={{
        position: 'absolute',
        bottom: `${layer?.bottom}px`,
        left: `${layer?.left}px`,
        transform: `${
          getTranslateX(layer.translateX) +
          getTranslateY(layer.transalteY)
        } 
        ${getRotate(layer.rotate)}  scaleX(${
          layer.scaleX || layer?.scale || 1
        }) scaleY(${layer.scaleY || layer?.scale || 1})`,
      }}>
{layer.text}
      </div>)};
      default: return (
        <Img
          style={{
            position: "absolute",
            bottom: `${layer?.bottom}px`,
            left: `${layer?.left}px`,
            width: layer?.width,
            height: layer?.height,
            transform: `${
              getTranslateX(layer.translateX) +
              getTranslateY(layer.transalteY)
            } 
            ${getRotate(layer.rotate)}  scaleX(${
              layer.scaleX || layer?.scale || 1
            }) scaleY(${layer.scaleY || layer?.scale || 1})`,
          }}
          width={layer?.width}
          height={layer?.height}
          src={dummyMap[layer?.object]}
        />)
    }
  }

  return (
    <>
      <AbsoluteFill style={{background: jsonData?.background || 'white'}}>
        {jsonData?.data?.map((layer) => {
          return (
              getContent(layer)
              // <Img
              //   style={{
              //     position: "absolute",
              //     bottom: `${layer?.bottom}px`,
              //     left: `${layer?.left}px`,
              //     width: 200,
              //     transform: `${
              //       getTranslateX(layer.translateX) +
              //       getTranslateY(layer.transalteY)
              //     } 
              //     ${getRotate(layer.rotate)}  scaleX(${
              //       layer.scaleX || layer?.scale || 1
              //     }) scaleY(${layer.scaleY || layer?.scale || 1})`,
              //   }}
              //   width={200}
              //   src={dummyMap[layer?.object]}
              // />
          );
        })}
        {getWeather(jsonData?.weather)}
      </AbsoluteFill>
    </>
  );
};
