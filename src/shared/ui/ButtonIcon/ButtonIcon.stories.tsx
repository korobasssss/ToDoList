import { StoryFn, Meta } from '@storybook/react';
import { ButtonIcon, IButtonIcon } from './ButtonIcon';

import { SearchIcon } from '@/shared/assets';

export default {
    title: 'ButtonIcon',
    component: ButtonIcon,
} as Meta;

const Template: StoryFn<IButtonIcon> = (args: IButtonIcon) => <ButtonIcon {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    icon: SearchIcon,
    alt: 'поиск'
};