(this["webpackJsonpxsolla-test"]=this["webpackJsonpxsolla-test"]||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var r,a,i,o,c,s,l,u,d,b=n(0),m=n.n(b),p=n(18),f=n.n(p),h=n(29),g=n.n(h),x=n(35),j=n(10),y=n(6),v=n(7),O=n.p+"static/media/AvenirLTStd-Roman.0bfb049d.otf",w=Object(v.a)(r||(r=Object(y.a)(["\n  @font-face {\n    font-family: 'Avenir';\n    src: local('Avenir'), url(",") format('opentype');\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    min-height: 100vh;\n    padding: 6vw;\n    color: #2e282c;\n    background-color: #f0f3ff;\n    font-family: 'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI',\n      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n      'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  button, label {\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  .app {\n    height: 100%;\n    max-width: 1240px;\n    margin: auto;\n    padding: 55px;\n    background: #ffffff;\n    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);\n    border-radius: 16px;\n  }\n\n  @media only screen and (max-width: 499px) {\n    .app {\n      padding: 30px;\n    }\n  }\n"])),O),k=v.b.h1(a||(a=Object(y.a)(["\n  font-size: 2rem;\n  font-style: normal;\n  font-weight: 900;\n"]))),E=n(9),S=n(5),C=n(23),L=n(32),N=n(1),I=v.b.div(i||(i=Object(y.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  :not(:first-of-type) {\n    margin-left: 20px;\n  }\n"]))),T=v.b.label(o||(o=Object(y.a)(["\n  margin-right: 15px;\n  cursor: pointer;\n  white-space: nowrap;\n"]))),M=v.b.svg(c||(c=Object(y.a)(["\n  position: absolute;\n  top: 2px;\n  right: -22px;\n  stroke: none;\n"]))),A=v.b.input(s||(s=Object(y.a)(["\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n\n  & + ",":after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    margin-left: 15px;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #444444;\n    border-radius: 3px;\n  }\n\n  &:checked + "," > "," {\n    stroke: #444444;\n  }\n\n  &:focus + ",":after {\n    box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.3);\n  }\n"])),T,T,M,T),F=v.b.div(l||(l=Object(y.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 25px;\n\n  @media only screen and (max-width: 799px) {\n    flex-direction: column;\n    align-items: flex-start;\n\n    ",":not(:first-of-type) {\n      margin-top: 20px;\n      margin-left: 0;\n    }\n\n    ",":nth-of-type(1) > [class$='-container'] {\n      width: 169px;\n    }\n  }\n"])),I,I),J={indicatorSeparator:function(){return null},container:function(e){return Object(S.a)(Object(S.a)({},e),{},{width:"150px"})},control:function(e,t){var n=t.isFocused;return Object(S.a)(Object(S.a)({},e),{},{paddingLeft:"10px",borderStyle:"solid",borderWidth:"1px",borderColor:"#444444",borderRadius:"6px",boxShadow:n?"0 0 0 1px rgba(68, 68, 68, 0.3)":"none","&:hover":{cursor:"pointer"}})},option:function(e){return Object(S.a)(Object(S.a)({},e),{},{color:"#444444","&:hover":{cursor:"pointer"}})}},z=function(e){return Object(S.a)(Object(S.a)({},e),{},{colors:Object(S.a)(Object(S.a)({},e.colors),{},{primary:"rgba(68, 68, 68, 0.12)",primary25:"rgba(68, 68, 68, 0.08)",primary50:"rgba(68, 68, 68, 0.16)"})})},B=n(4);function D(e){var t=e.events,n=e.loaded,r=e.onSetFilter,a=[{label:"All",value:"all"}],i=["All","January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e){return{label:e,value:e.toLowerCase()}}));n&&a.push.apply(a,Object(C.a)(Array.from(new Set(t.map((function(e){return e.city})))).map((function(e){return{label:e,value:e.toLowerCase()}}))));var o={styles:J,theme:z,components:{DropdownIndicator:R},openMenuOnFocus:!0,isDisabled:!n,isSearchable:!1},c=function(e,t){var n=e.value,a=t.name;r((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(E.a)({},a,n))}))};return Object(B.jsxs)(F,{children:[Object(B.jsxs)(I,{children:[Object(B.jsx)(T,{htmlFor:"city",children:"City:"}),Object(B.jsx)(L.a,Object(S.a)(Object(S.a)({},o),{},{inputId:"city",name:"city",defaultValue:a[0],options:a,onChange:c}))]}),Object(B.jsxs)(I,{children:[Object(B.jsx)(T,{htmlFor:"month",children:"Month:"}),Object(B.jsx)(L.a,Object(S.a)(Object(S.a)({},o),{},{inputId:"month",name:"month",defaultValue:i[0],options:i,onChange:c}))]}),Object(B.jsxs)(I,{children:[Object(B.jsx)(A,{type:"checkbox",id:"bookmark",onInput:function(){r((function(e){return Object(S.a)(Object(S.a)({},e),{},{bookmarked:!e.bookmarked})}))}}),Object(B.jsxs)(T,{htmlFor:"bookmark",children:["Bookmarked:",Object(B.jsx)(M,{viewBox:"0 0 24 24",stroke:"#0080d3",strokeWidth:"3",width:"22",height:"16",strokeDasharray:"33",children:Object(B.jsx)("path",{strokeLinecap:"round",strokeMiterlimit:"10",fill:"none",d:"M22.9 3.7l-15.2 16.6-6.6-7.1"})})]})]})]})}function R(e){return Object(B.jsx)(N.p.DropdownIndicator,Object(S.a)(Object(S.a)({},e),{},{children:Object(B.jsx)("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("path",{d:"M1 1L7 7L13 1",stroke:"#444444",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}))}function V(e,t){return e.filter((function(e){if("all"!==t.city&&e.city.toLowerCase()!==t.city)return!1;if("all"!==t.month){var n=Number.parseInt(e.date.split(".")[1])-1;if(t.month!==function(e,t){if("number"!==typeof e)throw Error("Index must be of type number");if(e<0||e>11)throw Error("Index is out of range");var n=["January","February","March","April","May","June","July","August","September","October","November","December"][e];return t?n.toLowerCase():n}(n,!0))return!1}return!(t.bookmarked&&!e.isSaved)}))}function W(){var e;return null!==(e=JSON.parse(localStorage.getItem("bookmarked")))&&void 0!==e?e:{}}var P,H,U,Y,X,Z,$,q,G,K,Q,_,ee,te,ne,re,ae=v.b.p(u||(u=Object(y.a)(["\n  font-size: 1.4rem;\n  margin: auto;\n"]))),ie=v.b.main(d||(d=Object(y.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  row-gap: 25px;\n  column-gap: 25px;\n  margin-top: 40px;\n\n  @media only screen and (max-width: 799px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(e){return 0!==e.eventsCount?"repeat(2, 1fr)":"1fr"})),oe=v.b.div(P||(P=Object(y.a)(["\n  position: absolute;\n  top: 9%;\n  left: 6%;\n  padding: 6px 8px;\n  border: 2px solid #ffffff;\n  border-radius: 6px;\n  font-size: 2.6vw;\n  font-weight: 400;\n"]))),ce=v.b.h2(H||(H=Object(y.a)(["\n  position: absolute;\n  bottom: 9%;\n  left: 6%;\n  line-height: 1;\n  font-size: 3vw;\n"]))),se=v.b.button(U||(U=Object(y.a)(["\n  position: absolute;\n  top: calc(9% - 15px);\n  right: calc(6% - 15px);\n  padding: 15px;\n  background-color: transparent;\n  border-style: none;\n  cursor: pointer;\n\n  &:active {\n    transform: scale(0.92);\n  }\n"]))),le=v.b.article(Y||(Y=Object(y.a)(["\n  position: relative;\n  height: 0;\n  padding-top: 66.66%;\n  color: #fff;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  overflow: hidden;\n\n  @media only screen and (max-width: 799px) {\n    "," {\n      font-size: 4vw;\n    }\n\n    "," {\n      font-size: 5.2vw;\n    }\n  }\n"])),(function(e){return e.img}),oe,ce);function ue(e){var t=e.id,n=e.name,r=e.date,a=e.img,i=e.saved,o=e.onSave,c=Object(b.useState)(i),s=Object(j.a)(c,2),l=s[0],u=s[1],d=Object(b.useRef)(!0);return Object(b.useEffect)((function(){if(d.current)return d.current=!1;!function(e,t){if("boolean"!==typeof t)throw Error("Value must be of type boolean");var n=W();n[e]=t,localStorage.setItem("bookmarked",JSON.stringify(n))}(t,l),o((function(e){return Object(S.a)(Object(S.a)({},e),{},{events:e.events.map((function(e){return e.id===t?Object(S.a)(Object(S.a)({},e),{},{isSaved:l}):e}))})}))}),[l]),Object(B.jsxs)(le,{img:a,children:[Object(B.jsx)(oe,{children:r}),Object(B.jsx)(ce,{children:n}),Object(B.jsx)(se,{"aria-label":"Bookmark",onClick:function(){u((function(e){return!e}))},children:Object(B.jsx)("svg",{width:"20",height:"24",viewBox:"0 0 16 20",fill:l?"white":"none",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("path",{d:"M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}var de=["title","titleId"];function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function pe(e,t){var n=e.title,r=e.titleId,a=me(e,de);return b.createElement("svg",be({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"rgb(255, 255, 255)",display:"block",shapeRendering:"auto"},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},a),n?b.createElement("title",{id:r},n):null,X||(X=b.createElement("g",{transform:"rotate(0 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})))),Z||(Z=b.createElement("g",{transform:"rotate(30 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})))),$||($=b.createElement("g",{transform:"rotate(60 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})))),q||(q=b.createElement("g",{transform:"rotate(90 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})))),G||(G=b.createElement("g",{transform:"rotate(120 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})))),K||(K=b.createElement("g",{transform:"rotate(150 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})))),Q||(Q=b.createElement("g",{transform:"rotate(180 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})))),_||(_=b.createElement("g",{transform:"rotate(210 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})))),ee||(ee=b.createElement("g",{transform:"rotate(240 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})))),te||(te=b.createElement("g",{transform:"rotate(270 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})))),ne||(ne=b.createElement("g",{transform:"rotate(300 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})))),re||(re=b.createElement("g",{transform:"rotate(330 50 50)"},b.createElement("rect",{x:48.5,y:27,rx:1.32,ry:1.32,width:3,height:12,fill:"#444444"},b.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})))))}var fe,he=b.forwardRef(pe),ge=(n.p,v.b.div(fe||(fe=Object(y.a)(["\n  width: 70px;\n  height: 70px;\n  margin: auto;\n"]))));function xe(){return Object(B.jsx)(ge,{children:Object(B.jsx)(he,{})})}function je(e){var t=e.events,n=e.loaded,r=e.onToggleSaved;return Object(B.jsxs)(ie,{eventsCount:t.length,children:[n?t.map((function(e){return Object(B.jsx)(ue,{id:e.id,name:e.name,date:e.date.split(".")[1],img:e.image,saved:e.isSaved,onSave:r},e.id)})):Object(B.jsx)(xe,{}),n&&0===t.length&&Object(B.jsx)(ae,{children:"No events found"})]})}var ye=function(){var e=Object(b.useState)({events:[],isLoaded:!1}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(b.useState)({city:"all",month:"all",bookmarked:!1}),i=Object(j.a)(a,2),o=i[0],c=i[1],s=V(n.events,o);return Object(b.useEffect)((function(){Object(x.a)(g.a.mark((function e(){var t,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=W(),n.forEach((function(e){var t;return e.isSaved=null!==(t=a[e.id])&&void 0!==t&&t})),r({events:n,isLoaded:!0});case 9:case"end":return e.stop()}}),e)})))()}),[]),Object(B.jsxs)(b.Fragment,{children:[Object(B.jsx)(w,{}),Object(B.jsx)(k,{children:"Event Listing"}),Object(B.jsx)(D,{events:n.events,loaded:n.isLoaded,onSetFilter:c}),Object(B.jsx)(je,{events:s,loaded:n.isLoaded,onToggleSaved:r})]})};f.a.render(Object(B.jsx)(m.a.StrictMode,{children:Object(B.jsx)(ye,{})}),document.getElementById("root"))}},[[62,1,2]]]);