import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color, strokeColor}){  
  const svgMarkup = `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5L16 12L9 19" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}