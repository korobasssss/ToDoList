import { Input, MySelect, Textarea } from "../../../../base/components"
import { ISelectOptions } from "../../../../base/interfaces"
import { ChangeEvent, FC, useCallback, useContext } from "react"
import styles from './styles/styles.module.scss'
import { ItemPopupContext } from "../../../contexts"

interface ICreateEditItemPopup {
    errorNameMessage: string
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

export const CreateEditItemPopupComponent: FC<ICreateEditItemPopup> = (
    {
        errorNameMessage,
    }
) => {
    const context = useContext(ItemPopupContext)

    if (!context) {
        return null;
    }

    const {
        input_name = '',
        input_category = null,
        input_description = '',
    
        handleSetInputName,
        handleSetInputCategory,
        handleSetInputDescription
    } = context
    

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
                    error={errorNameMessage}
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