import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color, strokeColor}){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="${width}" height="${height}" viewBox="0 -12 32 32" version="1.1">
  <g id="Page-1" stroke="${strokeColor}" stroke-width="1" fill="${color}" fill-rule="evenodd" sketch:type="MSPage">
      <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -1047.000000)" fill="${color}">
          <path d="M440,1053 L416,1053 C414.896,1053 414,1052.1 414,1051 C414,1049.9 414.896,1049 416,1049 L440,1049 C441.104,1049 442,1049.9 442,1051 C442,1052.1 441.104,1053 440,1053 L440,1053 Z M440,1047 L416,1047 C413.791,1047 412,1048.79 412,1051 C412,1053.21 413.791,1055 416,1055 L440,1055 C442.209,1055 444,1053.21 444,1051 C444,1048.79 442.209,1047 440,1047 L440,1047 Z" id="minus" sketch:type="MSShapeGroup">

</path>
      </g>
  </g>
</svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}