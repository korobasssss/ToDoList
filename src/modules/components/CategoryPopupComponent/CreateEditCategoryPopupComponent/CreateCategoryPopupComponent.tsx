import { ChangeEvent, FC, useCallback } from "react"
import styles from './styles/styles.module.scss'
import { Input, Textarea } from "../../../../base/components"

interface ICreateEditCategoryPopup {
    input_name: string
    errorName: string
    input_description: string
    handleSetInputName: (input_name: string) => void
    handleSetInputDescription: (input_description: string) => void
}

export const CreateEditCategoryPopupComponent: FC<ICreateEditCategoryPopup> = (
    {
        input_name,
        errorName,
        input_description,
        handleSetInputName,
        handleSetInputDescription
    }
) => {

    const handleChangeInputName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        handleSetInputName(event.target.value)
    }, [])

    const handleChangeTextareaDescription = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        handleSetInputDescription(event.target.value)
    }, [])

    return (
        <div
            className={styles.SCreatePopup}
        >
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