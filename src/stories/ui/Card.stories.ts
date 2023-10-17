import { Meta, StoryObj } from '@storybook/react';
import Card from '../../components/card/Card';


const meta: Meta<typeof Card> = {
  title: 'ui/Card',
  component: Card,
  parameters:{
    layout:'centered'
  }
}

type Story = StoryObj<typeof Card>

export const Primary:Story = {

}

export default meta;