import { FC, TextareaHTMLAttributes } from "react"
import cx from 'classnames'
import { IClassName } from "../../interfaces"
import styles from './styles/styles.module.scss'
import { ScrollWrapper } from "../ScrollWrapper"
import { LabelWrapper } from "../LabelWrapper"

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
        <LabelWrapper
            label={label}
            error={error}
            isRequired={isRequired}
            classNames={styles.SLabel}
        >
            <ScrollWrapper>
                <textarea
                    value={value}
                    className={cx(
                        styles.STextarea,
                        {
                            [styles['STextarea_error']]: error
                        }
                    )}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
                </ScrollWrapper>
        </LabelWrapper>
    )
}