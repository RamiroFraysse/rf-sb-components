import { Meta, StoryObj } from '@storybook/react';
import Label from "../../components/labels/Label";

const meta: Meta<typeof Label> = {
  title: 'ui/Label',
  component: Label,
  parameters:{
    layout:'centered'
  }
}

type Story = StoryObj<typeof Label>

export const Basic:Story = {
  args:{
    size: "normal",
    allCaps: false, //true: capitalizar toda la palabra
    label:'my label'
  }
}

export default meta;

