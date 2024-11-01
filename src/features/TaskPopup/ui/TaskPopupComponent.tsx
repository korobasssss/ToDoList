import { FC } from "react"
import styles from './styles.module.scss'
import { ISelectOptions } from "#shared/interfaces"
import { Textarea } from "#shared/ui/Textarea"
import { Input } from "#shared/ui/Input"
import { Select } from "#shared/ui/Select"
import { checkValidation } from "#shared/utils"
import { ErrorText } from "#shared/ui/ErrorText/ErrorText.tsx"

interface ICreateEditItemPopup {
    input_name?: string
    input_description?: string
    errorName: string
    errorCommon: string

    input_category: ISelectOptions | null
    options: ISelectOptions[]
    handleSetInputCategory: (input_category: ISelectOptions | null) => void

    handleSetInputName: (input_name: string) => void
    handleSetInputDescription: (input_description: string) => void
    handleSetErrorName: (errorName: string) => void
}

export const TaskPopupComponent: FC<ICreateEditItemPopup> = (
    {
        input_name = '',
        input_category = null,
        input_description = '',
        errorName,
        errorCommon,
        options,
        handleSetInputName,
        handleSetInputCategory,
        handleSetInputDescription,
        handleSetErrorName,
    }
) => {
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
                <Select
                    options={options}
                    label="Категория"
                    setSelected={(newValue) => handleSetInputCategory(newValue)}
                    placeholder="Введите категорию"
                    value={input_category}
                />
            </div>
            <Textarea
                value={input_description}
                onChange={(event) => checkValidation(event.target.value, handleSetInputDescription, 1536, handleSetErrorName)}
                placeholder="Введите описание задачи"
                label="Описание"
            />
            {errorCommon && (
                <ErrorText
                    message={errorCommon}
                />
            )}
        </div>
    )
}