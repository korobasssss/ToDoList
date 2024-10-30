import { FC } from "react"
import styles from './styles/styles.module.scss'
import { ISelectOptions } from "../../../base/interfaces"
import { MySelect, Textarea, Input } from "../../../base/components"
import { checkValidation } from "../../utils"

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

    const handleChangeInputCategory = (newValue: ISelectOptions) => {
        handleSetInputCategory(newValue)
    }

    return (
        <div className={styles.SCreatePopup}>
            <div className={styles.SCreateSection}>
                <Input
                    value={input_name}
                    onChange={(event) => checkValidation(event.target.value, handleSetInputName, 255, handleSetErrorName)}
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
                onChange={(event) => checkValidation(event.target.value, handleSetInputDescription, 1536, handleSetErrorName)}
                placeholder="Введите описание задачи"
                label="Описание"
            />
        </div>
    )
}