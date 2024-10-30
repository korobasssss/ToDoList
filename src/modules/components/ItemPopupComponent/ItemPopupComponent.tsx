import { ChangeEvent, FC, useCallback } from "react"
import styles from './styles/styles.module.scss'
import { ISelectOptions } from "../../../base/interfaces"
import { MySelect, Textarea, Input } from "../../../base/components"
import { IsValidTo } from "../../utils"

interface ICreateEditItemPopup {
    input_name?: string
    input_description?: string
    errorName: string

    input_category: ISelectOptions | null
    options: ISelectOptions[]
    handleSetInputCategory: (input_category: ISelectOptions) => void

    handleSetInputName: (input_name: string) => void
    handleSetInputDescription: (input_description: string) => void
    handleSetErrorName: (errorName: string) => void
}

export const ItemPopupComponent: FC<ICreateEditItemPopup> = (
    {
        input_name = '',
        input_category = null,
        input_description = '',
        errorName,
        options,
        handleSetInputName,
        handleSetInputCategory,
        handleSetInputDescription,
        handleSetErrorName,
    }
) => {
    
    const handleChangeInputName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (IsValidTo(event.target.value, 255)) {
            handleSetInputName(event.target.value)
        } else {
            handleSetErrorName('Превышен лимит символов')
        }
    }, [])

    const handleChangeTextareaDescription = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        if (IsValidTo(event.target.value, 1536)) {
            handleSetInputDescription(event.target.value)
        } else {
            handleSetErrorName('Превышен лимит символов')
        }
    }, [])

    const handleChangeInputCategory = useCallback((newValue: ISelectOptions) => {
        handleSetInputCategory(newValue)
    }, [])

    return (
        <div className={styles.SCreatePopup}>
            <div className={styles.SCreateSection}>
                <Input
                    value={input_name}
                    onChange={handleChangeInputName}
                    placeholder="Введите имя задачи"
                    label="Имя"
                    isRequired
                    error={errorName}
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