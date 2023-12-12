import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color, strokeColor}){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="${color}">
  <path d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}