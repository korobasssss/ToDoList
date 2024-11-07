import { StoryFn, Meta } from '@storybook/react';
import { ILink, Link } from './Link';

export default {
    title: 'Link',
    component: Link,
} as Meta;

const Template: StoryFn<ILink> = (args: ILink) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
    isSelected: false,
    children: 'Я ссылка'
};

export const DefaultSelected = Template.bind({});
DefaultSelected.args = {
    isSelected: true,
    children: 'Я ссылка'
};