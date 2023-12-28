import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color, color1, color2, strokeColor, strokeColor1, strokeColor2}){  
  const svgMarkup = `<svg width="${width}" height="${height}" viewBox="0 0 17 55" fill="${color}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8.5" cy="26.5" r="4.5" fill="${color2}"/>
  <mask id="mask0_0_1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="38" width="17" height="17">
  <path d="M12.5067 49.7987L9.50126 52.8042C9.36982 52.9357 9.21375 53.0401 9.04195 53.1113C8.87015 53.1825 8.686 53.2192 8.50003 53.2192C8.31406 53.2192 8.12991 53.1825 7.95811 53.1113C7.78632 53.0401 7.63024 52.9357 7.4988 52.8042L4.49264 49.7987C3.70017 49.0062 3.1605 47.9965 2.94187 46.8973C2.72325 45.7981 2.83548 44.6587 3.26439 43.6233C3.69329 42.5878 4.4196 41.7028 5.35148 41.0802C6.28335 40.4576 7.37893 40.1252 8.49968 40.1252C9.62043 40.1252 10.716 40.4576 11.6479 41.0802C12.5798 41.7028 13.3061 42.5878 13.735 43.6233C14.1639 44.6587 14.2761 45.7981 14.0575 46.8973C13.8389 47.9965 13.2992 49.0062 12.5067 49.7987Z" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.625 45.7917C10.625 46.3553 10.4011 46.8958 10.0026 47.2943C9.60409 47.6928 9.06358 47.9167 8.5 47.9167C7.93641 47.9167 7.39591 47.6928 6.9974 47.2943C6.59888 46.8958 6.375 46.3553 6.375 45.7917C6.375 45.2281 6.59888 44.6876 6.9974 44.2891C7.39591 43.8906 7.93641 43.6667 8.5 43.6667C9.06358 43.6667 9.60409 43.8906 10.0026 44.2891C10.4011 44.6876 10.625 45.2281 10.625 45.7917Z" stroke="${strokeColor1}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </mask>
  <g mask="url(#mask0_0_1)">
  <rect x="-7" y="28" width="43" height="34" fill="${color1}"/>
  </g>
  <circle cx="9" cy="6" r="5.5" stroke="${strokeColor2}"/>
  </svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}

