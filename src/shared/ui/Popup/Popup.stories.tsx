import { StoryFn, Meta } from '@storybook/react';
import { IPopup, Popup } from './Popup';

export default {
    title: 'Popup',
    component: Popup,
} as Meta;

const Template: StoryFn<IPopup> = (args: IPopup) => <Popup {...args} />;

export const DefaultSizeS = Template.bind({});
DefaultSizeS.args = {
    title: 'Это заголовок попапа размера S',
    isOpen: true,
    buttonSubmitName: 'Отправить',
    buttonCancelName: 'Отменить',
    children: 'Я дите попапа',
    size: 's'
};

export const DefaultSizeM = Template.bind({});
DefaultSizeM.args = {
    title: 'Это заголовок попапа размера M',
    isOpen: true,
    buttonSubmitName: 'Отправить',
    buttonCancelName: 'Отменить',
    children: 'Я дите попапа',
    size: 'm'
};