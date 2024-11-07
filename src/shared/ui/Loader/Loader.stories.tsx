import { StoryFn, Meta } from '@storybook/react';
import { Loader } from './Loader';

export default {
    title: 'Loader',
    component: Loader,
} as Meta;

const Template: StoryFn = () => <Loader />;

export const Default = Template.bind({});
Default.args = {
};