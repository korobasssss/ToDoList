import { StoryFn, Meta } from '@storybook/react';
import { OverlayLoader } from './OverlayLoader';

export default {
    title: 'OverlayLoader',
    component: OverlayLoader,
} as Meta;

const Template: StoryFn = () => <OverlayLoader />;

export const Default = Template.bind({});
Default.args = {
};