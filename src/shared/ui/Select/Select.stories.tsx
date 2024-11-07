import { StoryFn, Meta } from '@storybook/react';
import { ISelect, Select } from './Select';
import { useState } from 'react';
import { ISelectOptions } from '@/shared/interfaces';
import '@/index.css'

export default {
    title: 'Select',
    component: Select,
} as Meta;

const Template: StoryFn<ISelect<number, string>> = (args: ISelect<number, string>) => {
    const [selected, setSelected] = useState<ISelectOptions<number, string> | null>({value: 1, label: 'это 1'});
    return (
        <Select 
            {...args} 
            value={selected} 
            setSelected={setSelected} 
            options={
                [
                    {value: 1, label: 'это 1'}, 
                    {value: 2, label: 'это 2'}, 
                    {value: 3, label: 'это 3'},
                    {value: 4, label: 'это 4'},
                ]
            } 
        />
    )
};



export const Default = Template.bind({});
Default.args = {
    label: 'описание',
    placeholder: 'Это плейсхолдер',
};

export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
    label: 'описание',
    placeholder: 'Это плейсхолдер',
    isRequired: true
};
export const DefaultRequiredError = Template.bind({});
DefaultRequiredError.args = {
    label: 'описание',
    placeholder: 'Это плейсхолдер',
    error: 'Это сообщение ошибки',
    isRequired: true
};