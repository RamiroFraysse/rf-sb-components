import { Meta, StoryObj } from '@storybook/react';
import { Form } from './components';
declare const meta: Meta<typeof Form>;
type Story = StoryObj<typeof Form>;
export interface IUserForm {
    email: string;
    password: string;
}
export declare const DesktopView: Story;
export default meta;
