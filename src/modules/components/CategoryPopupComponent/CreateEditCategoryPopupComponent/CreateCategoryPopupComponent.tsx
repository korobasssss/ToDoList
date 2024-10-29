import { ChangeEvent, FC, useCallback, useContext } from "react"
import styles from './styles/styles.module.scss'
import { Input, Textarea } from "../../../../base/components"
import { CategoryPopupContext } from "../../../contexts"

interface ICreateEditCategoryPopup {
    errorName: string | undefined
}

export const CreateEditCategoryPopupComponent: FC<ICreateEditCategoryPopup> = (
    {
        errorName,
    }
) => {
    const context = useContext(CategoryPopupContext)

    if (!context) {
        return null;
    }

    const {
        input_name = '',
        input_description = '',
        handleSetInputName,
        handleSetInputDescription
    } = context
    
    const handleChangeInputName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        handleSetInputName(event.target.value)
    }, [])

    const handleChangeTextareaDescription = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        handleSetInputDescription(event.target.value)
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