import { Meta, StoryObj } from '@storybook/react';
import AccessForm from './components/AccessForm';
import * as Yup from 'yup';

const meta: Meta<typeof AccessForm> = {
  title: 'ui/Login',
  component: AccessForm,
}

type Story = StoryObj<typeof AccessForm>

type IUserForm = {
  email:string;
  password:string;
}

// const loginUser = (email:string,password:string)=>{
//   const URL_RICK_AND_MORTHY = 'https://rickandmortyapi.com/api/character/1';
//   return fetch(URL_RICK_AND_MORTHY).then(res => res.json());
// }

const login = async (values: IUserForm) => {
  try {
    console.log({email:values.email,password:values.password});
    // eslint-disable-next-line
  } catch (error: any) {
    console.log({ code: error.code });
  }
};

export const DesktopView:Story = {
  args:{
    formTitle:'Exploring Clean Architecture Principles and Best Practices',
    onSubmit:<IUserForm>(values:IUserForm)=>{
      console.log(values);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      login(values);
    },
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