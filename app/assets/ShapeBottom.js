import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color}){  
  const svgMarkup = `<svg width="${width}" height="${height}" viewBox="0 0 119 110" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 54.5461C0 30.0266 18.8492 9.6268 43.2923 7.6925L136.765 0.295529C139.251 0.0988214 141.749 0.10024 144.234 0.299769L235.761 7.6473C260.181 9.60771 279 29.9976 279 54.4966V122C279 147.957 257.957 169 232 169H118.5H47C21.0426 169 0 147.957 0 122V54.5461Z" fill="#12B3DB"/>
  </svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}