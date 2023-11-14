import * as Yup from 'yup';
import { Form } from './components';
const meta = {
    title: 'ui/Form',
    component: Form,
};
const handleSubmit = async (values) => {
    try {
        console.log({ values });
        // eslint-disable-next-line
    }
    catch (error) {
        console.log({ code: error.code });
    }
};
export const DesktopView = {
    args: {
        onSubmit: handleSubmit,
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required"),
            password: Yup.string()
                .min(6, "Password must contain at least 6 characters")
                .required("Required"),
        }),
        fields: [
            {
                label: 'Email',
                name: 'email',
                placeholder: 'Email',
                autoComplete: 'off',
                type: 'email',
                id: 'email',
            },
            {
                label: 'Password',
                name: 'password',
                placeholder: 'Password',
                autoComplete: 'off',
                type: 'password',
                id: 'password',
            }
        ]
    },
};
export default meta;
