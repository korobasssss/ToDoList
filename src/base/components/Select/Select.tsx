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
    error?: string
    isRequired?: boolean
}

export const MySelect: FC<IMySelect> = (
    {
        label,
        value,
        placeholder,
        options,
        setSelected,
        error,
        isRequired
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
        <>
            <div
                className={styles.SSelectWrapper}
            >
                {label && (
                    <span 
                        className={styles.SSelectLabelWrapper}
                    >
                        <label
                            className={styles.SSelectLabel}
                        >
                            {label}
                        </label>
                        {isRequired && (
                            <span
                                className={styles.SInputRequired}
                            >
                                *
                            </span>
                        )}
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
            {error && (
                <p
                    className={styles.SInputError}
                >
                    {error}
                </p>
            )}
        </>
        
    )
}