import { FC, SetStateAction } from "react"
import styles from './styles.module.scss'
import { ISelectOptions } from "#shared/interfaces"
import { Textarea } from "#shared/ui/Textarea"
import { Input } from "#shared/ui/Input"
import { Select } from "#shared/ui/Select"
import { checkValidation } from "#shared/utils"
import { ErrorText } from "#shared/ui/ErrorText/ErrorText.tsx"

interface ICreateEditItemPopup {
    inputName?: string
    inputDescription?: string
    errorName: string
    errorCommon: string

    inputCategory: ISelectOptions | null
    options: ISelectOptions[]
    handleSetInputCategory: React.Dispatch<SetStateAction<ISelectOptions | null>>

    handleSetInputName: React.Dispatch<SetStateAction<string>>
    handleSetInputDescription: React.Dispatch<SetStateAction<string>>
    handleSetErrorName: React.Dispatch<SetStateAction<string>>
}

export const TaskPopupComponent: FC<ICreateEditItemPopup> = (
    {
        inputName = '',
        inputCategory = null,
        inputDescription = '',
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
                    value={inputName}
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
                    value={inputCategory}
                />
            </div>
            <Textarea
                value={inputDescription}
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