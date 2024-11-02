import { FC, SetStateAction } from "react"
import styles from './styles.module.scss'
import { Input } from "@/shared/ui/Input"
import { Textarea } from "@/shared/ui/Textarea"
import { checkValidation } from "@/shared/utils"
import { ErrorText } from "@/shared/ui/ErrorText"

interface ICategoryPopupComponent {
    inputName?: string
    inputDescription?: string
    errorName: string
    errorCommon: string

    handleSetInputName: React.Dispatch<SetStateAction<string>>
    handleSetInputDescription: React.Dispatch<SetStateAction<string>>
    handleSetErrorName: React.Dispatch<SetStateAction<string>>
}

export const CategoryPopupComponent: FC<ICategoryPopupComponent> = (
    {
        inputName = '',
        inputDescription = '',
        errorName,
        errorCommon,
        handleSetInputName,
        handleSetInputDescription,
        handleSetErrorName
    }
) => {

    return (
        <div className={styles.SCreatePopup}>
            <Input
                value={inputName}
                onChange={(event) => checkValidation(event.target.value, handleSetInputName, 255, handleSetErrorName)}
                placeholder="Введите имя категории"
                label="Имя"
                isRequired
                error={errorName}
            />
            <Textarea
                value={inputDescription}
                onChange={(event) => checkValidation(event.target.value, handleSetInputDescription, 512, handleSetErrorName)}
                placeholder="Введите описание категории"
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