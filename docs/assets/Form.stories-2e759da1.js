import{F as l,c as m,a}from"./index.esm-7d31455f.js";import"./styled-components.browser.esm-719bfb77.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const w={title:"ui/Form",component:l,tags:["autodocs"]},d=async i=>{try{console.log({values:i})}catch(t){console.log({code:t.code})}},e={args:{onSubmit:d,initialValues:{email:"",password:""},validationSchema:m({email:a().email("Invalid email format").required("Required"),password:a().min(6,"Password must contain at least 6 characters").required("Required")}),fields:[{label:"Email",name:"email",placeholder:"Email",autoComplete:"off",type:"email",id:"email"},{label:"Password",name:"password",placeholder:"Password",autoComplete:"off",type:"password",id:"password"}]}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    onSubmit: handleSubmit,
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const f=["DesktopView"];export{e as DesktopView,f as __namedExportsOrder,w as default};
//# sourceMappingURL=Form.stories-2e759da1.js.map
