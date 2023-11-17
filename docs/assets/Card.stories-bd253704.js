import{s as t,n as g,j as r}from"./styled-components.browser.esm-719bfb77.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const x=t.div`
  font-family: "system-ui";
  width:15rem;
  border-radius: 1rem;
  box-shadow:0px 10px 8px #999;
  display:flex;
  flex-direction: column;
  margin: .5rem;
  background-color: ${({$background:e})=>e};
  height:fit-content;
  ${({$cardStyles:e})=>e&&g(e)};
`,S=t.h2`
  margin:.5rem 5%;
`,C=t.p`
  font-size:0.875rem;
  margin:.5rem 5%;
`,k=t.h3`
  margin:.5rem 5%;
`,V=t.img`
  width:100%;
  border-radius: 1rem 1rem 0 0;
`,q=t.button`
  text-align:center;
  width:90%;
  border-radius:5px;
  padding:.5rem 1rem;
  background-color:#6EE7B7;
  color:#000;
  font-weight:bold;
  margin:.5rem auto;
  cursor:pointer;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #007bff;
    opacity: 0.8;
  }
  ${({$actionStyles:e})=>e&&g(e)};
`;function a({background:e,title:o,subtitle:i,information:s,img:d,children:l,cardStyles:h,navActions:c,actionStyles:b}){return r.jsxs(x,{$background:e,$cardStyles:h,children:[d&&r.jsx(V,{src:d,alt:o}),r.jsx(S,{children:o}),i&&r.jsx(k,{children:i}),s&&r.jsx(C,{children:s}),l&&l,c&&c.map(({label:u,onClick:y})=>r.jsx(q,{$actionStyles:b,onClick:y,children:u},u))]})}try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{id:{defaultValue:null,description:"Id of the card",name:"id",required:!1,type:{name:"string | number"}},img:{defaultValue:null,description:"Url of the image",name:"img",required:!1,type:{name:"string"}},background:{defaultValue:null,description:"Background of the card",name:"background",required:!1,type:{name:"string"}},cardStyles:{defaultValue:null,description:"Styled of the card",name:"cardStyles",required:!1,type:{name:"CSSProperties"}},actionStyles:{defaultValue:null,description:"Styles actions",name:"actionStyles",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"Title of the card",name:"title",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Children of the card",name:"children",required:!1,type:{name:"Element"}},information:{defaultValue:null,description:"Description of the card",name:"information",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"Subtitle of the card",name:"subtitle",required:!1,type:{name:"string"}},navActions:{defaultValue:null,description:"Actions of the card",name:"navActions",required:!1,type:{name:"NavAction[]"}}}}}catch{}const v={title:"ui/Card",component:a,tags:["autodocs"]},n={args:{id:1,title:"Title",subtitle:"Subtitle",cardStyles:{backgroundColor:"#f3f300"},img:"https://picsum.photos/300/200",information:"Information",background:"#efefef",navActions:[{label:"show more",onClick:()=>{console.log("asda")}}]}};var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 1,
    title: 'Title',
    subtitle: 'Subtitle',
    cardStyles: {
      backgroundColor: '#f3f300'
    },
    img: 'https://picsum.photos/300/200',
    information: 'Information',
    background: '#efefef',
    navActions: [{
      label: 'show more',
      onClick: () => {
        console.log('asda');
      }
    }]
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const A=["DesktopView"];export{n as DesktopView,A as __namedExportsOrder,v as default};
//# sourceMappingURL=Card.stories-bd253704.js.map
