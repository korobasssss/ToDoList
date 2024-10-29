import { FC, TextareaHTMLAttributes } from "react"
import cx from 'classnames'
import { IClassName } from "../../interfaces"
import styles from './styles/styles.module.scss'
import { ScrollWrapper } from "../ScrollWrapper"

interface ITextarea
extends TextareaHTMLAttributes<HTMLTextAreaElement>, IClassName {
    label?: string
    error?: string
    isRequired?: boolean
}

export const Textarea: FC<ITextarea> = ({
    placeholder,
    value,
    label,
    error,
    onChange,
    isRequired,
    ...restProps
}) => {
    return (
        <div>
            <div
                className={cx(
                    styles.STextareaWrapper,
                    {
                        [styles['STextareaWrapper_error']] : error
                    }
                )}
            >
                {label && (
                    <span 
                        className={styles.STextareaLabelWrapper}
                    >
                        <label
                            className={cx(
                                styles.STextareaLabel
                            )}
                        >
                            {label}
                        </label>
                        {isRequired && (
                            <span
                                className={styles.STextareaRequired}
                            >
                                *
                            </span>
                        )}
                    </span>
                )}
                <ScrollWrapper>
                <textarea
                    value={value}
                    className={styles.STextarea}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
                </ScrollWrapper>
                
            </div>
            {error && (
                <p
                    className={styles.STextareaError}
                >
                    {error}
                </p>
            )}
        </div>
    )
}