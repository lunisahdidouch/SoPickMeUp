import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color, strokeColor}){  
  const svgMarkup = `<svg viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round"></path> 
  <path d="M4 12L20 12" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round"></path> 
  <path d="M4 6L20 6" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round"></path> </g>
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}