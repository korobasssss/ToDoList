import { ChangeEvent, FC, useCallback, useContext } from "react"
import styles from './styles/styles.module.scss'
import { Input, Textarea } from "../../../base/components"
import { CategoryPopupContext } from "../../contexts"
import { IsValidTo } from "../../utils"

export const CategoryPopupComponent: FC = () => {
    const context = useContext(CategoryPopupContext)

    if (!context) {
        return null;
    }

    const {
        input_name = '',
        input_description = '',
        errorName,
        handleSetInputName,
        handleSetInputDescription,
        handleSetErrorName
    } = context
    
    const handleChangeInputName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (IsValidTo(event.target.value, 255)) {
            handleSetInputName(event.target.value)
        } else {
            handleSetErrorName('Превышен лимит символов')
        }
    }, [])

    const handleChangeTextareaDescription = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        if (IsValidTo(event.target.value, 512)) {
            handleSetInputDescription(event.target.value)
        } else {
            handleSetErrorName('Превышен лимит символов')
        }
    }, [])

    return (
        <div className={styles.SCreatePopup}>
            <Input
                value={input_name}
                onChange={handleChangeInputName}
                placeholder="Введите имя категории"
                label="Имя"
                isRequired
                error={errorName}
            />
            <Textarea
                value={input_description}
                onChange={handleChangeTextareaDescription}
                placeholder="Введите описание категории"
                label="Описание"
            />
        </div>
    )
}