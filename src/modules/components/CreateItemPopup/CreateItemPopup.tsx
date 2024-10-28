import { Input, MySelect, Textarea } from "../../../base/components"
import { ISelectOptions } from "../../../base/interfaces"
import { ChangeEvent, FC, useCallback } from "react"
import styles from './styles/styles.module.scss'

interface ICreateItemPopup {
    input_name: string
    input_category: ISelectOptions | null
    input_description: string
    handleSetInputName: (input_name: string) => void
    handleSetInputCategory: (input_category: ISelectOptions) => void
    handleSetInputDescription: (input_description: string) => void
}

const options: ISelectOptions[] = [
    {
        label: 'Категория 1',
        value: 'cat1'
    },
    {
        label: 'Категория 2',
        value: 'cat2'
    },
    {
        label: 'Категория 3',
        value: 'cat3'
    }
]

export const CreateItemPopup: FC<ICreateItemPopup> = (
    {
        input_name,
        input_category,
        input_description,
        handleSetInputName,
        handleSetInputCategory,
        handleSetInputDescription
    }
) => {

    const handleChangeInputName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        handleSetInputName(event.target.value)
    }, [])

    const handleChangeInputCategory = useCallback((newValue: ISelectOptions) => {
        handleSetInputCategory(newValue)
    }, [])

    const handleChangeTextareaDescription = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        handleSetInputDescription(event.target.value)
    }, [])

    return (
        <div
            className={styles.SCreatePopup}
        >
            <div
                className={styles.SCreateSection}
            >
                <Input
                    value={input_name}
                    onChange={handleChangeInputName}
                    placeholder="Введите имя задачи"
                    label="Имя"
                    isRequired
                />
                <MySelect
                    value={input_category}
                    options={options}
                    setSelected={handleChangeInputCategory}
                    placeholder="Введите категорию"
                    label="Категория"
                />
            </div>
            <Textarea
                value={input_description}
                onChange={handleChangeTextareaDescription}
                placeholder="Введите описание задачи"
                label="Описание"
            />
        </div>
    )
}