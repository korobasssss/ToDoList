import { StoryFn, Meta } from '@storybook/react';
import { INoData, NoData } from './NoData';

export default {
    title: 'NoData',
    component: NoData,
} as Meta;

const Template: StoryFn<INoData> = (args: INoData) => <NoData {...args} />;

export const Default = Template.bind({});
Default.args = {
    message: 'Сообщение что данных нет'
};