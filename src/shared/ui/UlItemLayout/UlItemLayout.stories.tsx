import { StoryFn, Meta } from '@storybook/react';
import { IUlItemLayout, UlItemLayout } from './UlItemLayout';
import '@/index.css'

export default {
    title: 'UlItemLayout',
    component: UlItemLayout,
} as Meta;

const Template: StoryFn<IUlItemLayout> = (args: IUlItemLayout) => <UlItemLayout {...args}/>

export const Default = Template.bind({});
Default.args = {
    name: 'Имя'
};

export const DefaultWithCategory = Template.bind({});
DefaultWithCategory.args = {
    name: 'Имя',
    category: 'Категория'
};

export const DefaultWithDescription = Template.bind({});
DefaultWithDescription.args = {
    name: 'Имя',
    description: 'Описание'
};

export const DefaultWithCategoryAndDescription = Template.bind({});
DefaultWithCategoryAndDescription.args = {
    name: 'Имя',
    category: 'Категория',
    description: 'Описание'
};