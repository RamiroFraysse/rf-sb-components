import{s as t,j as a}from"./styled-components.browser.esm-719bfb77.js";import{T as x,F as y,c as w,a as o}from"./index.esm-7d31455f.js";import{M as v}from"./chunk-BLYPNILM-f5bdd1a0.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const P=t.div`
  position: relative;
  min-width:min-content;
  padding:1rem;
  background-color:#1d4e89; 
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 640px) {
    border-radius: 1.5rem; 
  }
  @media (min-width: 640px) {
    padding: 5rem; 
  }
`,q=t.div`
  font-family: "system-ui";
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 640px) {
    padding-top: 3rem; 
    padding-bottom: 3rem;
  }
`,V=t.div`
  position: relative;
  padding-top: 0.75rem; 

  @media (min-width: 640px) {
    max-width: 36rem; 
    margin-left: auto;
    margin-right: auto;
  }
`,E=t.div`
  position: absolute;
  inset:0;
  background: linear-gradient(to right, #6EE7B7, #1d4e89);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (min-width: 640px) {
    transform: rotate(-6deg);
    border-radius: 1.5rem; 
  }
`;function l({onSubmit:e,initialValues:s,validationSchema:h,fields:b,formTitle:n}){return a.jsx(q,{children:a.jsxs(V,{children:[a.jsx(E,{}),a.jsxs(P,{children:[n&&a.jsx(x,{children:n}),a.jsx(y,{onSubmit:e,initialValues:s,validationSchema:h,fields:b})]})]})})}try{l.displayName="AccessForm",l.__docgenInfo={description:"",displayName:"AccessForm",props:{onSubmit:{defaultValue:null,description:"callback submit form",name:"onSubmit",required:!0,type:{name:"<T>(values: T) => void"}},initialValues:{defaultValue:null,description:"initial values of form",name:"initialValues",required:!0,type:{name:"{ [key: string]: TypeValues; }"}},validationSchema:{defaultValue:null,description:"yup validation schema",name:"validationSchema",required:!0,type:{name:'ObjectSchema<any, AnyObject, any, "">'}},fields:{defaultValue:null,description:"fields of form",name:"fields",required:!0,type:{name:"Field[]"}},formTitle:{defaultValue:null,description:"Title of access form",name:"formTitle",required:!1,type:{name:"string"}}}}}catch{}const F={title:"ui/AccessForm",component:l,tags:["autodocs"]},g=async e=>{try{console.log({email:e.email,password:e.password})}catch(s){console.log({code:s.code})}},i={args:{formTitle:"Exploring Clean Architecture Principles and Best Practices",onSubmit:e=>{console.log(e),g(e)},initialValues:{email:"",password:""},validationSchema:w({email:o().email("Invalid email format").required("Required"),password:o().min(6,"Password must contain at least 6 characters").required("Required")}),fields:[{label:"Email",name:"email",placeholder:"Email",autoComplete:"off",type:"email",id:"email"},{label:"Password",name:"password",placeholder:"Password",autoComplete:"off",type:"password",id:"password"}]}},r={args:{formTitle:"Exploring Clean Architecture Principles and Best Practices",onSubmit:e=>{console.log(e),g(e)},initialValues:{email:"",password:""},validationSchema:w({email:o().email("Invalid email format").required("Required"),password:o().min(6,"Password must contain at least 6 characters").required("Required")}),fields:[{label:"Email",name:"email",placeholder:"Email",autoComplete:"off",type:"email",id:"email"},{label:"Password",name:"password",placeholder:"Password",autoComplete:"off",type:"password",id:"password"}]},parameters:{viewport:{viewports:v,defaultViewport:"mobile2"}}};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    formTitle: 'Exploring Clean Architecture Principles and Best Practices',
    onSubmit: <IUserForm,>(values: IUserForm) => {
      console.log(values);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      login(values);
    },
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().min(6, "Password must contain at least 6 characters").required("Required")
    }),
    fields: [{
      label: 'Email',
      name: 'email',
      placeholder: 'Email',
      autoComplete: 'off',
      type: 'email',
      id: 'email'
    }, {
      label: 'Password',
      name: 'password',
      placeholder: 'Password',
      autoComplete: 'off',
      type: 'password',
      id: 'password'
    }]
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    formTitle: 'Exploring Clean Architecture Principles and Best Practices',
    onSubmit: <IUserForm,>(values: IUserForm) => {
      console.log(values);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      login(values);
    },
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().min(6, "Password must contain at least 6 characters").required("Required")
    }),
    fields: [{
      label: 'Email',
      name: 'email',
      placeholder: 'Email',
      autoComplete: 'off',
      type: 'email',
      id: 'email'
    }, {
      label: 'Password',
      name: 'password',
      placeholder: 'Password',
      autoComplete: 'off',
      type: 'password',
      id: 'password'
    }]
  },
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "mobile2"
    }
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const _=["DesktopView","MobileView"];export{i as DesktopView,r as MobileView,_ as __namedExportsOrder,F as default};
//# sourceMappingURL=AccessForm.stories-1721dfa9.js.map
