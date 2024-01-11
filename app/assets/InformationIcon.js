import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color, strokeColor}){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 24 24" fill="${color}">
  <g clip-path="url(#clip0_429_11160)">
  <circle cx="12" cy="11.9999" r="9" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="12" y="8" width="0.01" height="0.01" stroke="${strokeColor}" stroke-width="3.75" stroke-linejoin="round"/>
  <path d="M12 12V16" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_429_11160">
  <rect width="${width}" height="${height}" fill="${color}"/>
  </clipPath>
  </defs>
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}