import { Button, IButton } from "./Button";
import { StoryFn, Meta } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
} as Meta;

const Template: StoryFn<IButton> = (args: IButton) => <Button {...args} />;


export const Primary   = Template.bind({});
Primary.args = {
    children: 'Я кнопка',
    theme: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Я кнопка',
    theme: 'secondary'
};

export const None = Template.bind({});
None.args = {
    children: 'Я кнопка',
    theme: 'none'
};