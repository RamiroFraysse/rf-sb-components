import { Meta, StoryObj } from '@storybook/react';
import Card from './components/Card';

const meta: Meta<typeof Card> = {
  title: 'ui/Card',
  component: Card,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Card>



export const DesktopView:Story = {
  args:{
    id:1,
    title: 'Title',
    subtitle:'Subtitle',
    cardStyles:{backgroundColor:'#f3f300'},
    img:'https://picsum.photos/300/200',
    information:'Information',
    background:'#efefef',
    navActions:[{label:'show more', onClick:()=>{console.log('asda')}}]
  },
}

export default meta;