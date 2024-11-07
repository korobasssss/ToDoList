import { StoryFn, Meta } from '@storybook/react';
import '@/index.css'
import { ITextarea, Textarea } from './Textarea';

export default {
    title: 'Textarea',
    component: Textarea,
} as Meta;

const Template: StoryFn<ITextarea> = (args: ITextarea) => <Textarea {...args}/>

export const Default = Template.bind({});
Default.args = {
    label: 'Описание',
    placeholder: 'Плейсхолдер'
};

export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
    label: 'Описание',
    placeholder: 'Плейсхолдер',
    isRequired: true
};

export const DefaultRequiredError = Template.bind({});
DefaultRequiredError.args = {
    label: 'Описание',
    placeholder: 'Плейсхолдер',
    error: 'Сообщение об ошибке',
    isRequired: true
};