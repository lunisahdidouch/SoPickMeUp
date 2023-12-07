import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color}){  
  const svgMarkup = `<svg width="38" height="38" viewBox="0 0 38 38" fill="${color}" xmlns="http://www.w3.org/2000/svg">
  <path d="M30.0832 19H7.9165M7.9165 19L17.4165 28.5M7.9165 19L17.4165 9.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}