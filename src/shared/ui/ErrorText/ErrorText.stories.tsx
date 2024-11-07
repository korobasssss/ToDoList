import { StoryFn, Meta } from '@storybook/react';
import { ErrorText, IErrorText } from './ErrorText';

export default {
    title: 'ErrorText',
    component: ErrorText,
} as Meta;

const Template: StoryFn<IErrorText> = (args: IErrorText) => <ErrorText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    message: 'Это сообщение об ошибке бегите исправлять'
};