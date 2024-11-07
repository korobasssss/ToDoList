import { StoryFn, Meta } from '@storybook/react';
import { Icon, IICon } from './Icon';
import { FilterIcon } from '@/shared/assets';

export default {
    title: 'Icon',
    component: Icon,
} as Meta;

const Template: StoryFn<IICon> = (args: IICon) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    icon: FilterIcon,
    alt: 'это иконка'
};