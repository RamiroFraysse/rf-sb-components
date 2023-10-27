import { Meta, StoryObj } from '@storybook/react';
import Login from './components/Login';
import * as Yup from 'yup';

const meta: Meta<typeof Login> = {
  title: 'ui/Login',
  component: Login,
}

type Story = StoryObj<typeof Login>

export const DesktopView:Story = {
  args:{
    formTitle:'Exploring Clean Architecture Principles and Best Practices',
    onSubmit:(values)=>{console.log(values)},
    initialValues:{email:'',password:''},
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Required"),
      password: Yup.string()
        .min(6, "Password must contain at least 6 characters")
        .required("Required"),
    }),
    fields:[
      {
        label:'Email',
        name:'email',
        placeholder:'Email',
        autoComplete:'off',
        type:'email',
        id:'email',
      },
      {
        label:'Password',
        name:'password',
        placeholder:'Password',
        autoComplete:'off',
        type:'password',
        id:'password',
      }
    ]
  },
}


export default meta;