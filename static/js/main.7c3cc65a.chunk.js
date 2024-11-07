(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{346:function(e,t,i){},348:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i.n(a),o=i(82),r=i.n(o),c=i(7),s=i(3);const l={body:"#FCF6F4",text:"#000000",fontFamily:"'Source Sans Pro', sans-serif",bodyRgba:"252, 246, 244",textRgba:"0,0,0"},d={body:"#000000",text:"#FCF6F4",fontFamily:"'Source Sans Pro', sans-serif",textRgba:"252, 246, 244",bodyRgba:"0,0,0"};var h=s.b`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}
`,m=i(349),p=i(11),b=i(1);const x=s.c.h1`
  display: inline-block;
  color: ${e=>"dark"===e.color?d.text:d.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 1.2rem;
  top: 2rem;
  z-index: 3;

  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;var g=e=>Object(b.jsx)(x,{color:e.theme,children:"M\xb2O"});const f=s.c.div`
  position: fixed;
  padding: 25px 30px;
  color: #03e9f4;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  cursor: pointer;

  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
`,j=s.d`
0%{
  left: -100%;

}
50%,100%{ left:  100%; }
`,u=s.d`
0%{
  top: -100%;

}
50%,100%{ top:  100%; }
`,v=s.d`
0%{
  right: -100%;

}
50%,100%{ right:  100%; }
`,w=s.d`
0%{
  bottom: -100%;

}
50%,100%{ bottom:  100%; }
`,O=s.c.div`
  position: absolute;
  display: block;
  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${j} 1s linear infinite;
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: ${u} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: ${v} 1s linear infinite;
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    left: 0;
    bottom: -100%;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: ${w} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;var y=()=>Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("a",{href:"https://drive.google.com/uc?export=download&id=15VLITdN7-e46-8VeyTLhivk8FaOs19TH",children:Object(b.jsxs)(f,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(O,{}),Object(b.jsx)(O,{}),Object(b.jsx)(O,{}),"Download CV"]})})});const k=e=>Object(b.jsx)("svg",{"aria-hidden":"true","data-prefix":"fab","data-icon":"github",className:"prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...e,children:Object(b.jsx)("path",{fill:e.fill,d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}),$=e=>Object(b.jsx)("svg",{"aria-hidden":"true","data-prefix":"fab","data-icon":"facebook",className:"prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:Object(b.jsx)("path",{fill:e.fill,d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})}),_=e=>Object(b.jsx)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"yin-yang",className:"prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...e,children:Object(b.jsx)("path",{fill:e.fill,d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"})}),z=e=>Object(b.jsx)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"anchor",className:"prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",...e,children:Object(b.jsx)("path",{fill:e.fill,d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"})}),S=e=>Object(b.jsx)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"link",className:"prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:Object(b.jsx)("path",{fill:e.fill,d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"})}),C=e=>Object(b.jsx)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"palette",className:"prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:Object(b.jsx)("path",{fill:e.fill,d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"})}),R=e=>Object(b.jsx)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"laptop-code",className:"prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",...e,children:Object(b.jsx)("path",{fill:e.fill,d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"})}),M=s.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 1.2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.4rem 0;
  }
`,N=Object(s.c)(m.a.span)`
  width: 2px;
  height: 8rem;
  background-color: ${e=>e.color};
`;var A=e=>Object(b.jsxs)(M,{children:[Object(b.jsx)(m.a.div,{initial:{transform:"scale(0)"},animate:{scale:[0,1,1.5,1]},transition:{type:"spring",duration:1,delay:1},children:Object(b.jsx)(p.c,{style:{color:"inherit"},target:"_blank",to:{pathname:"https://github.com/min-maw"},children:Object(b.jsx)(k,{width:25,height:25,fill:e.theme})})}),Object(b.jsx)(m.a.div,{initial:{transform:"scale(0)"},animate:{scale:[0,1,1.5,1]},transition:{type:"spring",duration:1,delay:1.4},children:Object(b.jsx)(p.c,{style:{color:"inherit"},target:"_blank",to:{pathname:"https://web.facebook.com/minnmawoo.ucsm"},children:Object(b.jsx)($,{width:25,height:25,fill:e.theme})})}),Object(b.jsx)(N,{color:e.theme,initial:{height:0},animate:{height:"8rem"},transition:{type:"spring",duration:1,delay:.8}})]}),Y=i.p+"static/media/profile-img.472b3646.png";const I=Object(s.c)(m.a.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  backdrop-filter: blur(4px);

  z-index: 1;

  @media only screen and (min-width: 800px) {
    border-left: 2px solid ${e=>e.theme.body};
    border-right: 2px solid ${e=>e.theme.text};

    background: linear-gradient(
          to right,
          ${e=>e.theme.body} 50%,
          ${e=>e.theme.text} 50%
        )
        bottom,
      linear-gradient(
          to right,
          ${e=>e.theme.body} 50%,
          ${e=>e.theme.text} 50%
        )
        top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
  }

  @media only screen and (max-width: 800px) {
    // border-right: 2px solid ${e=>e.theme.text};
    // border-left: 2px solid ${e=>e.theme.text};
    // border-bottom: 2px solid ${e=>e.theme.text};
    box-sizing: content-box;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to right bottom, white, black);
    border-image-slice: 1;  
   
   }
  }


`,T=s.c.div`
  position: relative;
  display: flex;

  @media only screen and (min-width: 800px) {
    width: 50%;
    height: auto;
    .pic {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (max-width: 800px) {
    width: auto;
    height: 50%;
    .pic {
      position: absolute;
      bottom: -100%;
      right: 5%;
      left: 20%
      transform: translate(-50%, 0%);
      width: auto;
      height: 120%;
    }
  }
`,B=s.c.div`
  font-size: calc(1em + 1.5vw);
  color: ${e=>e.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > *:last-child {
    color: ${e=>`rgba(${e.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media only screen and (max-width: 800px) {
  }
`;var F=()=>Object(b.jsxs)(I,{initial:{height:0},animate:{height:"55vh"},transition:{type:"spring",duration:2,delay:.1},children:[Object(b.jsx)(T,{children:Object(b.jsxs)(B,{children:[Object(b.jsx)("h2",{children:"Hi,"}),Object(b.jsx)("h4",{children:"I'm Min Maw Oo."}),Object(b.jsx)("h6",{children:"I design and Code simple yet beautiful websites."})]})}),Object(b.jsx)(T,{children:Object(b.jsx)(m.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2,delay:.1},children:Object(b.jsx)("img",{className:"pic",src:Y,alt:"Profile Pic"})})})]}),P=i(86),J=i.n(P),V=i(87),H=i(88),L=i(89);const D=s.c.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;var E=e=>Object(b.jsx)(D,{children:Object(b.jsx)(J.a,{style:{position:"absolute",top:0},params:"light"===e.theme?H:"dark"===e.theme?V:L})}),W=i(93),X=i(90);const q=s.c.div`
  background-image: url(https://cutewallpaper.org/21/web-development-wallpaper/12-Striking-Dark-Wallpaper-Sites-That-Are-Perfect-for-Your-.jpg);
  background-size: cover;
  // background: #e5e27a;
  // background: -webkit-linear-gradient(top left, #e5e27a, #ffef0a);
  // background: -moz-linear-gradient(top left, #e5e27a, #ffef0a);
  // background: linear-gradient(to bottom right, #e5e27a, #ffef0a);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`,K=s.c.div`
  padding: 2rem;
`,U=Object(s.c)(p.b)`
  color: white;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 10;

  font-size: 1.5rem;
  &:hover {
    font-size: 1.6rem;
  }
`,G=s.d`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`,Z=s.c.button`
  position: absolute;
  top: ${e=>e.click?"85%":"50%"};
  left: ${e=>e.click?"92%":"50%"};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  border-radius: 50%;
  & > :first-child {
    animation: ${G} infinite 1.5s linear;
  }
  // & > :last-child {
  //   display: ${e=>e.click?"none":"inline-block"};
  //   padding-top: 1rem;
  // }

  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    filter: hue-rotate(110deg);
  }
  @media only screen and (max-width: 800px) {
    width: ${e=>e.click?"60px":"150px"};
    height: ${e=>e.click?"60px":"150px"};
  }
  @media only screen and (max-width: 500px) {
    width: ${e=>e.click?"40px":"150px"};
    height: ${e=>e.click?"40px":"150px"};
  }
`,Q=s.c.div`
  position: absolute;

  background-color: #000;

  width: ${e=>e.click?"50%":"0%"};
  height: ${e=>e.click?"100%":"0%"};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  @media only screen and (min-width: 800px) {
    top: 0;
    bottom: 0;
    right: 50%;
  }

  @media only screen and (max-width: 800px) {
    right: 0;
    left: 0;
    bottom: 50%;
    width: 100%;
  }
`;var ee=()=>{const[e,t]=Object(a.useState)(!1);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(q,{children:[Object(b.jsx)(Q,{click:e}),Object(b.jsxs)(K,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(g,{theme:"dark"}),Object(b.jsx)(A,{theme:"white"}),Object(b.jsx)(Z,{click:e,children:Object(b.jsx)(_,{onClick:()=>t(!e),width:e?80:120,height:e?80:120,fill:"currentColor"})}),Object(b.jsx)(U,{target:"_blank",children:Object(b.jsx)("a",{href:"mailto:minmawoo.ucsm@gmail.com",style:{color:"white"},children:Object(b.jsx)(m.a.div,{initial:{x:500,transition:{type:"spring",duration:1.5}},animate:{x:0,transition:{type:"spring",duration:1.5}},whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(b.jsx)(W.a,{icon:X.a})})})})]}),e?Object(b.jsx)(F,{click:e}):null]})})},te=i(91);const ie=s.c.h1`
  position: fixed;
  top: ${e=>e.top};
  left: ${e=>e.left};
  right: ${e=>e.right};
  color: ${e=>`rgba(${e.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
  @media only screen and (max-width: 800px) {
    font-size: calc(1rem + 5vw);
  }
`;var ae=e=>Object(b.jsx)(ie,{top:e.top,left:e.left,right:e.right,children:Object(b.jsx)(te.a,{text:e.text,fontSize:60})}),ne=i.p+"static/media/spaceman.5ec7fcfa.png";const oe=s.c.div`
  background-color: ${e=>e.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`,re=s.d`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`,ce=s.c.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${re} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`,se=Object(s.c)(m.a.div)`
  border: 2px solid ${e=>e.theme.text};
  color: ${e=>e.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 55vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.45rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 8rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media only screen and (max-width: 800px) {
    height: 50vh;
    left: calc(3rem + 5vw);
  }
`,le={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:1,duration:1}}};var de=()=>Object(b.jsx)(s.a,{theme:d,children:Object(b.jsxs)(oe,{children:[Object(b.jsx)(g,{theme:"dark"}),Object(b.jsx)(A,{theme:"white"}),Object(b.jsx)(E,{theme:"dark"}),Object(b.jsx)(ce,{children:Object(b.jsx)("img",{src:ne,alt:"spaceman"})}),Object(b.jsxs)(se,{variants:le,initial:"hidden",animate:"show",exit:{opacity:0,transition:{duration:.5}},children:["I'm a react developer located in Myanmar. I love to create simple yet beautiful websites with great user experience.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"I'm interested in the whole frontend stack Like trying new things and building great projects. I love playing Guitar \ud83c\udfb8 and reading books \ud83d\udcd6.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"I believe everything is an Art when you put your consciousness in it. You can connect with me via social links."]}),Object(b.jsx)(ae,{text:"ABOUT",top:"10%",left:"5%"})]})}),he=i.p+"static/media/patrick-tomasso-Oaqk7qqNh_c-unsplash.8ca90014.jpg";const me=[{id:1,name:"Building CodePen Clone with ReactJS, CSS, LocalStorage",tags:["react","CSS","LocalStorage"],date:"Sept, 2020",imgSrc:"http://drive.google.com/uc?export=view&id=1BXDEX6069eAbAD0gkT4Uejqcnp9uDxCo",link:"https://github.com/devM2O/CodePen-clone-with-React"},{id:2,name:"Building a Fabulous Todo App using React, Redux and Framer-Motion",tags:["react","redux","framer-motion"],date:"April, 2022",imgSrc:"http://drive.google.com/uc?export=view&id=1Pqw5AsfYIqB6oiEnFxBmySzNYUTwr_g-",link:"https://github.com/devM2O/ReactTodoList"},{id:3,name:"building a flashcard quiz application using React while connecting to an external API.",tags:["react","external API"],date:"Oct, 2020",imgSrc:"http://drive.google.com/uc?export=view&id=1742RgW0T4D-4ni5a5Ti81V-ZWZWPj9nV",link:"https://github.com/devM2O/flash-card-quiz-react"},{id:4,name:"Building Sidebar navigation menu in ReactJS with react router and framer-motion",tags:["react","framer-motion","styled-components"],date:"March, 2022",imgSrc:"http://drive.google.com/uc?export=view&id=1GXpKKt_UyMsBH7xSrxSZ3Oaa3y8R2M68",link:"https://github.com/devM2O/React-sidebar"}];i(60);const pe=Object(s.c)(m.a.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${e=>e.theme.body};
  border: 2px solid ${e=>e.theme.body};

  border-radius: 7px;
  background-color: rgba(103, 128, 159, 0.1);
  backdrop-filter: blur(2px);

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:hover {
    color: ${e=>e.theme.body};
    background-color: ${e=>e.theme.text};
    transition: all 0.3s ease;
  }
`,be=s.c.div`
  background-image: ${e=>`url(${e.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid;
  border-radius: 7px;
  background-position: center center;
  ${pe}:hover & {
    border: 1px solid ${e=>e.theme.body};
  }
`,xe=s.c.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${e=>e.theme.body};
  ${pe}:hover & {
    border-bottom: 1px solid ${e=>e.theme.body};
  }
`,ge=s.c.div`
  padding: 0.5rem 0;
`,fe=s.c.span`
  padding-right: 0.5rem;
`,je=s.c.span`
  padding: 0.5rem 0;
`,ue=Object(s.c)(m.a.div)``,ve={hidden:{scale:0},show:{scale:1,transition:{type:"spring",duration:.5}}};var we=e=>{const{name:t,tags:i,date:a,imgSrc:n,link:o}=e.blog;return Object(b.jsx)(ue,{variants:ve,children:Object(b.jsxs)(pe,{href:o,target:"_blank",children:[Object(b.jsx)(be,{img:n}),Object(b.jsx)(xe,{children:t}),Object(b.jsx)(ge,{children:i.map(((e,t)=>Object(b.jsxs)(fe,{children:["#",e]},t)))}),Object(b.jsx)(je,{children:a})]})})};const Oe=s.c.div`
  @media only screen and (max-width: 640px) {
    display: none;
  }
  position: relative;
`,ye=s.c.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  .chain {
    transform: rotate(135deg);
  }
`,ke=s.c.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;var $e=e=>{const t=Object(a.useRef)(null),i=Object(a.useRef)(null);return Object(a.useEffect)((()=>{const e=()=>{let e=window.pageYOffset,a=window.innerHeight,n=document.body.offsetHeight,o=100*Math.max(n-(e+a))/(n-a);t.current.style.transform=`translateY(${-o}%)`,window.pageYOffset>5?i.current.style.display="none":i.current.style.display="block"};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),Object(b.jsxs)(Oe,{children:[Object(b.jsx)(ke,{ref:i,className:"hidden",children:Object(b.jsx)(z,{width:70,height:70,fill:"black"})}),Object(b.jsxs)(ye,{ref:t,children:[[...Array(e.number)].map(((e,t)=>Object(b.jsx)(S,{width:25,height:25,fill:"black",className:"chain"},t))),Object(b.jsx)(z,{width:70,height:70,fill:"black"})]})]})};const _e=Object(s.c)(m.a.div)`
  background-image: url(${he});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`,ze=s.c.div`
  background-color: ${e=>`rgba(${e.theme.textRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`,Se=s.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  z-index: 1;
`,Ce=s.c.div`
  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
  }
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  z-index: 1;
`,Re={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.5,duration:.5}}};var Me=()=>{const[e,t]=Object(a.useState)(0);return Object(a.useEffect)((()=>{let e=(window.innerHeight-70)/30;t(parseInt(e))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_e,{variants:Re,initial:"hidden",animate:"show",exit:{opacity:0,transition:{duration:.5}},children:Object(b.jsxs)(ze,{children:[Object(b.jsx)(g,{theme:"dark"}),Object(b.jsx)(A,{theme:"white"}),Object(b.jsx)($e,{number:e}),Object(b.jsx)(Se,{children:Object(b.jsx)(Ce,{children:me.map((e=>Object(b.jsx)(we,{blog:e},e.id)))})}),Object(b.jsx)(ae,{text:"PROJECTS",top:"5rem",left:"2rem"})]})})})};const Ne=[{id:1,name:"Agency Landing Page",description:"It is build on top of the React JS, with styledComponents and GSAP for smooth scrolling animations.",tags:["react","gsap","styledComponents"],demo:"https://agency-website-eta.vercel.app/",github:"https://github.com/codebucks27/Agency-website"},{id:2,name:"Job listing website",description:"A Job listing website build in ReactJS. With searching and filtering functionalities.",tags:["react","sass"],demo:"http://react-job-listing-website.codebucks27.vercel.app/",github:"https://github.com/codebucks27/react-job-listing-website"},{id:3,name:"Dev.to Clone",description:"A clone of Dev.to build using ReactJS. With realtime fetching of articles from dev.to using API.",tags:["react","api","sass"],demo:"http://devto-clone-codebucks27.vercel.app/",github:"https://github.com/codebucks27/devto-clone"},{id:4,name:"Sidebar Menu",description:"A cool looking sidebar menu build using ReactJS and styledComponents.It has really smooth animations.",tags:["react","styledComponents","react-router"],demo:"https://react-sidebar.vercel.app/",github:"https://github.com/codebucks27/react-sidebar"},{id:5,name:"Todo App(React + Redux)",description:"A todo app build using Redux-toolkit and framer-motion for smooth animations.",tags:["react","redux","framer-motion"],demo:"http://react-redux-todo-app-git-main-codebucks27.vercel.app/",github:"https://github.com/codebucks27/React-Redux-Todo-App"},{id:6,name:"Responsive Navigation Menu",description:"A reponsive navbar menu component in ReactJS with react-router functionalities. Built from scratch.",tags:["react","react-router","css"],demo:"http://react-responsive-navbar-codebucks27.vercel.app/",github:"https://github.com/codebucks27/React-responsive-navbar"}],Ae=Object(s.c)(m.a.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${e=>e.theme.text};
  color: ${e=>e.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${e=>e.theme.body};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${e=>e.theme.body};
    color: ${e=>e.theme.text};
    border: 1px solid ${e=>e.theme.text};
  }
`,Ye=s.c.h2`
  font-size: calc(1em + 0.5vw);
`,Ie=s.c.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`,Te=s.c.div`
  border-top: 2px solid ${e=>e.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Ae}:hover & {
    border-top: 2px solid ${e=>e.theme.text};
  }
`,Be=s.c.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`,Fe=s.c.footer`
  display: flex;
  justify-content: space-between;
`,Pe=Object(s.c)(p.c)`
  background-color: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);
  ${Ae}:hover & {
    background-color: ${e=>e.theme.text};
    color: ${e=>e.theme.body};
  }
`,Je=Object(s.c)(p.c)`
  color: inherit;
  text-decoration: none;
  ${Ae}:hover & {
    & > * {
      fill: ${e=>e.theme.text};
    }
  }
`,Ve={hidden:{scale:0},show:{scale:1,transition:{type:"spring",duration:.5}}};var He=e=>{const{id:t,name:i,description:a,tags:n,demo:o,github:r}=e.data;return Object(b.jsxs)(Ae,{variants:Ve,children:[Object(b.jsx)(Ye,{children:i}),Object(b.jsx)(Ie,{children:a}),Object(b.jsx)(Te,{children:n.map(((e,t)=>Object(b.jsxs)(Be,{children:["#",e]},t)))}),Object(b.jsxs)(Fe,{children:[Object(b.jsx)(Pe,{to:{pathname:`${o}`},target:"_blank",children:"Visit"}),Object(b.jsx)(Je,{to:{pathname:`${r}`},target:"_blank",children:Object(b.jsx)(k,{width:30,height:30})})]})]},t)};const Le=s.c.div`
  background-color: ${e=>e.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`,De=Object(s.c)(m.a.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  @media only screen and (max-width: 800px) {
    left: calc(10rem + 5vw);
  }
  @media only screen and (max-width: 550px) {
    left: calc(7rem + 1vw);
  }
  @media only screen and (max-width: 500px) {
    left: calc(5rem + 1vw);
  }

  transition: 0.3s ease;
`,Ee=s.c.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 40px;
  height: 40px;
  z-index: 1;
`,We={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.5,duration:.5}}};var Xe=()=>{const e=Object(a.useRef)(null),t=Object(a.useRef)(null);return Object(a.useEffect)((()=>{let i=e.current;const a=()=>(i.style.transform=`translateX(${-window.pageYOffset}px)`,t.current.style.transform="rotate("+-window.pageYOffset+"deg)");return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}}),[]),Object(b.jsx)(s.a,{theme:d,children:Object(b.jsxs)(Le,{children:[Object(b.jsx)(g,{theme:"dark"}),Object(b.jsx)(A,{theme:"white"}),Object(b.jsx)(De,{ref:e,variants:We,initial:"hidden",animate:"show",exit:{opacity:0,transition:{duration:.5}},children:Ne.map((e=>Object(b.jsx)(He,{data:e},e.id)))}),Object(b.jsx)(Ee,{ref:t,children:Object(b.jsx)(_,{width:40,height:40,fill:d.text})}),Object(b.jsx)(ae,{text:"WORK",top:"10%",right:"20%"})]})})};const qe=Object(s.c)(m.a.div)`
  background-color: ${e=>e.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding-top: 4rem;
    padding-bottom: 5rem;
  }
`,Ke=Object(s.c)(m.a.div)`
  border: 2px solid ${e=>e.theme.text};
  color: ${e=>e.theme.text};
  background-color: ${e=>e.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${e=>e.theme.body};
    background-color: ${e=>e.theme.text};
  }
  @media only screen and (max-width: 800px) {
    width: 50vw;
    margin-top: 30px;
  }
`,Ue=s.c.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Ke}:hover & {
    & > * {
      fill: ${e=>e.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`,Ge=s.c.div`
  color: ${e=>e.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Ke}:hover & {
    color: ${e=>e.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`,Ze={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.5,duration:.5}}};var Qe=()=>Object(b.jsx)(s.a,{theme:l,children:Object(b.jsxs)(qe,{variants:Ze,initial:"hidden",animate:"show",exit:{opacity:0,transition:{duration:.5}},children:[Object(b.jsx)(g,{theme:"light"}),Object(b.jsx)(A,{theme:"black"}),Object(b.jsx)(E,{theme:"light"}),Object(b.jsxs)(Ke,{children:[Object(b.jsxs)(Ue,{children:[Object(b.jsx)(C,{width:40,height:40})," Designer"]}),Object(b.jsx)(Ge,{children:"I love to create design which speaks, Keep it clean, minimal and simple."}),Object(b.jsxs)(Ge,{children:[Object(b.jsx)("strong",{children:"I like to Design"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Web Design"}),Object(b.jsx)("li",{children:"Mobile Apps"})]})]}),Object(b.jsxs)(Ge,{children:[Object(b.jsx)("strong",{children:"Tools"}),Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:"Figma"})})]})]}),Object(b.jsxs)(Ke,{children:[Object(b.jsxs)(Ue,{children:[Object(b.jsx)(R,{width:40,height:40})," Frontend Developer"]}),Object(b.jsx)(Ge,{children:"I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life."}),Object(b.jsxs)(Ge,{children:[Object(b.jsx)("strong",{children:"Skills"}),Object(b.jsx)("p",{children:"Html, Css, Js, React, Redux, Bootstrap, Tailwind etc."})]}),Object(b.jsxs)(Ge,{children:[Object(b.jsx)("strong",{children:"Tools"}),Object(b.jsx)("p",{children:"VScode, Github, Codepen etc."})]})]})]})}),et=i.p+"static/media/DustInTheWind.a645fe50.mp3";const tt=s.c.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 2.5rem;
  z-index: 10;
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }

  @media only screen and (max-width: 800px) {
    left: 1.2rem;
    top: 25%;
  }
`,it=s.d`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`,at=s.c.span`
  background: ${e=>e.theme.text};
  border: 1px solid ${e=>e.theme.body};
  animation: ${it} 1s ease infinite;
  animation-play-state: ${e=>e.click?"running":"paused"};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;

  @media only screen and (max-width: 800px) {
    height: 0.6rem;
  }
`;var nt=()=>{const e=Object(a.useRef)(null),[t,i]=Object(a.useState)(!1);return Object(b.jsxs)(tt,{onClick:()=>(i(!t),void(t?e.current.pause():e.current.play())),children:[Object(b.jsx)(at,{click:t}),Object(b.jsx)(at,{click:t}),Object(b.jsx)(at,{click:t}),Object(b.jsx)(at,{click:t}),Object(b.jsx)(at,{click:t}),Object(b.jsx)("audio",{src:et,ref:e,loop:!0})]})},ot=i(92),rt=i(38);i(346);const ct=s.c.div`
  background: #add8e6;
  width: 250px;
  height: 50px;
  display: block;
  padding: 0.3rem 1.2rem;
  z-index: 10;
  position: fixed;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.65rem;
  box-shadow: 0 8px 32px hsla(231, 44%, 45%, 0.2);

  @media only screen and (max-width: 800px) {
    padding: 0.3rem 1.2rem;
  }
`,st=s.c.div`
  font-size: smaller;
  position: absolute;
  font-weight: 500;
  transform: translateY(45px);
  opacity: 0;
  transition: 0.4s;
  z-index: 10;
`,lt=Object(s.c)(p.c)`
  background: transparent;

  // padding-bottom: 1.4rem;
  border-radius: 50%;
  color: var(--color-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  z-index: 10;

  &.aaa {
    padding: 1rem;
  }

  &.active .name {
    opacity: 1;
    transform: translateY(3px);
    color: black;
  }
  &.active .icon {
    transform: translateY(-45px);
    background: rgba(0, 0, 0, 0.3);
    border: 4px solid black;
    backdrop-filter: blur(4px);

    padding: 0.6rem;
    border-radius: 50%;
    color: white;
  }

  &.aaa:hover {
    color: red;
  }
`,dt=s.c.div`
  display: flex;
  justify-content: center;
`;var ht=()=>{const[e,t]=Object(a.useState)(window.location.pathname);return Object(a.useEffect)((()=>{t(window.location.pathname)})),console.log(e),Object(b.jsx)(ct,{children:Object(b.jsxs)(dt,{children:[Object(b.jsxs)(lt,{exact:!0,to:"/",onClick:()=>t("/"),className:"/"===e?"active":"aaa",children:[Object(b.jsx)(ot.a,{className:"icon"}),Object(b.jsx)(st,{className:"name",children:"Home"})]}),Object(b.jsxs)(lt,{to:"/blog",onClick:()=>t("/blog"),className:"/blog"===e?"active":"aaa",children:[Object(b.jsx)(rt.a,{className:"icon"}),Object(b.jsx)(st,{className:"name",children:"Work"})]}),Object(b.jsxs)(lt,{to:"/about",onClick:()=>t("/about"),className:"/about"===e?"active":"aaa",children:[Object(b.jsx)(rt.c,{className:"icon"}),Object(b.jsx)(st,{className:"name",children:"About"})]}),Object(b.jsxs)(lt,{to:"/skills",onClick:()=>t("/skills"),className:"/skills"===e?"active":"aaa",children:[Object(b.jsx)(rt.b,{className:"icon"}),Object(b.jsx)(st,{className:"name",children:"Skills"})]})]})})};var mt=function(){const e=Object(c.f)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(s.a,{theme:l,children:[Object(b.jsx)(nt,{}),Object(b.jsx)(ht,{}),Object(b.jsxs)(c.c,{location:e,children:[Object(b.jsx)(c.a,{exact:!0,path:["/","portfolio"],component:ee}),Object(b.jsx)(c.a,{exact:!0,path:"/about",component:de}),Object(b.jsx)(c.a,{exact:!0,path:"/blog",component:Me}),Object(b.jsx)(c.a,{exact:!0,path:"/work",component:Xe}),Object(b.jsx)(c.a,{exact:!0,path:"/skills",component:Qe})]},e.pathname)]})]})};i(347);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(mt,{})})}),document.getElementById("root"))},87:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":7,"density":{"enable":true,"value_area":500}},"color":{"value":"#fcf6f4"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":true,"speed":3,"size_min":0.4,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},88:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":20,"density":{"enable":true,"value_area":800}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#000000","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},89:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":20,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"image","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":5},"image":[{"src":"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg","width":500,"height":500,"fill":"black"},{"src":"https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg","width":500,"height":500},{"src":"profile-img.png","width":500,"height":500}]},"opacity":{"value":1,"random":false,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":true}},"size":{"value":20,"random":true,"anim":{"enable":true,"speed":5,"size_min":0.1,"sync":true}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.7}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')}},[[348,1,2]]]);
//# sourceMappingURL=main.7c3cc65a.chunk.js.map