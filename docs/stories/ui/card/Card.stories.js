import Card from './components/Card';
const meta = {
    title: 'ui/Card',
    component: Card,
};
export const DesktopView = {
    args: {
        id: 1,
        title: 'Title',
        subtitle: 'Subtitle',
        cardStyles: { backgroundColor: '#f3f300' },
        img: 'https://picsum.photos/300/200',
        information: 'Information',
        background: '#efefef',
        navActions: [{ label: 'show more', onClick: () => { console.log('asda'); } }]
    },
};
export default meta;
