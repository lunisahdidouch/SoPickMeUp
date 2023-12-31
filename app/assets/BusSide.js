import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent({width, height, color}){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="${color}" stroke="none">
  <path d="M59 663 c-56 -34 -59 -51 -59 -300 0 -210 2 -231 18 -246 10 -10 33 -17 51 -17 23 0 34 -6 40 -23 18 -45 59 -72 111 -72 52 0 93 27 111 72 8 23 12 23 169 23 157 0 161 0 169 -22 18 -46 59 -73 111 -73 52 0 93 27 111 73 5 13 17 22 30 22 11 0 34 13 50 29 28 29 29 32 29 133 0 116 -18 189 -80 312 -55 110 -36 106 -470 106 -320 0 -368 -3 -391 -17z m788 -45 c16 -17 14 -18 -45 -18 -86 0 -102 -17 -102 -107 0 -55 4 -71 22 -90 20 -21 30 -23 130 -23 l108 0 0 -110 c0 -100 -2 -110 -21 -120 -24 -13 -49 -7 -49 13 0 7 -14 26 -31 43 -58 55 -161 32 -190 -43 -8 -23 -12 -23 -169 -23 -157 0 -161 0 -169 23 -18 45 -59 72 -111 72 -52 0 -93 -27 -111 -73 -7 -18 -15 -23 -37 -20 l-27 3 -3 223 -2 223 25 25 25 25 370 -3 c336 -3 371 -5 387 -20z m61 -110 c11 -29 23 -61 27 -71 7 -16 0 -18 -91 -15 l-99 3 -3 54 c-5 79 -3 81 76 81 l69 0 21 -52z m-633 -333 c33 -32 33 -78 0 -110 -32 -33 -78 -33 -110 0 -16 15 -25 36 -25 55 0 19 9 40 25 55 15 16 36 25 55 25 19 0 40 -9 55 -25z m560 0 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55 -25z"/>
  <path d="M100 580 c-16 -16 -20 -33 -20 -88 0 -59 3 -72 23 -90 20 -19 35 -22 108 -22 76 0 88 2 107 23 18 19 22 35 22 88 0 56 -4 69 -23 87 -20 19 -35 22 -110 22 -74 0 -90 -3 -107 -20z m195 -90 l0 -65 -85 0 -85 0 -3 54 c-5 82 -4 82 90 79 l83 -3 0 -65z"/>
  <path d="M400 580 c-16 -16 -20 -33 -20 -88 0 -59 3 -72 23 -90 21 -19 35 -22 118 -22 87 0 97 2 117 23 18 19 22 35 22 88 0 56 -4 69 -23 87 -21 19 -34 22 -120 22 -84 0 -100 -3 -117 -20z m215 -90 l0 -65 -95 0 -95 0 -3 54 c-5 83 -6 82 100 79 l93 -3 0 -65z"/>
  </g>
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;  

  return <SvgImage />;
}