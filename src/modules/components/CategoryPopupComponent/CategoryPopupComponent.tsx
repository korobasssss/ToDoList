import { FC } from "react"
import styles from './styles/styles.module.scss'
import { Input, Textarea } from "../../../base/components"
import { checkValidation } from "../../utils"

interface ICategoryPopupComponent {
    input_name?: string
    input_description?: string
    errorName: string

    handleSetInputName: (input_name: string) => void
    handleSetInputDescription: (input_description: string) => void
    handleSetErrorName: (errorName: string) => void
}

export const CategoryPopupComponent: FC<ICategoryPopupComponent> = (
    {
        input_name = '',
        input_description = '',
        errorName,
        handleSetInputName,
        handleSetInputDescription,
        handleSetErrorName
    }
) => {

    return (
        <div className={styles.SCreatePopup}>
            <Input
                value={input_name}
                onChange={(event) => checkValidation(event.target.value, handleSetInputName, 255, handleSetErrorName)}
                placeholder="Введите имя категории"
                label="Имя"
                isRequired
                error={errorName}
            />
            <Textarea
                value={input_description}
                onChange={(event) => checkValidation(event.target.value, handleSetInputDescription, 512, handleSetErrorName)}
                placeholder="Введите описание категории"
                label="Описание"
            />
        </div>
    )
}