import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color}){  
  const svgMarkup = `<svg width="${width}" height="${height}" viewBox="0 0 139 93" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M-140 -6C-140 -31.9574 -118.957 -53 -93 -53H92C117.957 -53 139 -31.9574 139 -6V45.4456C139 73.8259 114.039 95.7321 85.8988 92.0479L-52.4953 73.9291C-59.7322 72.9816 -67.0904 73.7326 -73.9867 76.1226L-77.6098 77.3782C-108.143 87.9598 -140 65.2844 -140 32.9694V-6Z" fill="#0070AD"/>
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}