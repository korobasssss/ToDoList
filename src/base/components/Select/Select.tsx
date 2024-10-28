import Select, { SingleValue } from "react-select"
import { FC, useCallback, useState } from "react"
import { CustomIndicatorsContainer, customStyles } from './custom'
import { ISelectOptions } from "../../interfaces"
import styles from './styles/styles.module.scss'

interface IMySelect {
    label?: string
    value: ISelectOptions | null
    placeholder?: string
    options: ISelectOptions[],
    setSelected(newValue: ISelectOptions) : void
}

export const MySelect: FC<IMySelect> = (
    {
        label,
        value,
        placeholder,
        options,
        setSelected
    }
) => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleSetOnChange = useCallback((selectedOption: SingleValue<ISelectOptions>) => {
        if (selectedOption) {
            setSelected(selectedOption)
        }
    }, [])

    const handleInputChange = useCallback((input: string) => {
        setInputValue(input)
    }, [])

    return (
        <div
            className={styles.SSelectWrapper}
        >
            {label && (
                <span 
                    className={styles.IInputLabelWrapper}
                >
                    <label
                        className={styles.SInputLabel}
                    >
                        {label}
                    </label>
                </span>
            )}
            <Select
                value={value}
                noOptionsMessage={() => '-'}
                placeholder={placeholder}
                options={options}
                isMulti={false}
                onChange={handleSetOnChange}
                onInputChange={handleInputChange}
                inputValue={inputValue}
                styles={customStyles}
                components={{ IndicatorsContainer: CustomIndicatorsContainer }}
            />
        </div>
    )
}