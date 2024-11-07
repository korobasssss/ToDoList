import { useEffect, useState } from "react"
import styles from './styles.module.scss'
import { IFormValue, ISelectOptions } from "@/shared/interfaces"
import { Textarea } from "@/shared/ui/Textarea"
import { Input } from "@/shared/ui/Input"
import { Select } from "@/shared/ui/Select"
import { ErrorText } from "@/shared/ui/ErrorText"
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik"
import { validationItem } from "../utils"
import { Button } from "@/shared/ui/Button"
import * as Yup from 'yup';
import { ErrorMessages } from "@/shared/constants"

interface ICreateEditItemPopup<V extends string | number, K extends string> {
    initialValues: IFormValue
    options: ISelectOptions<V, K>[]
    category: ISelectOptions<V, K> | null
    handleSubmitForm: (name: string, category: ISelectOptions<V, K> | null, description: string | null) => Promise<boolean>
    handleCancel: () => void
    buttonSubmitTitle? : string
    buttonCancelTitle? : string
}

export const TaskPopupComponent = <V extends string | number, K extends string> (
    {
        initialValues,
        options,
        handleSubmitForm,
        handleCancel,
        category,
        buttonSubmitTitle,
        buttonCancelTitle

    } : ICreateEditItemPopup<V, K>
): JSX.Element => {
    const [inputCategory, setInputCategory] = useState<ISelectOptions<V, K> | null>(null)
    const [errorCommon, setErrorCommon] = useState('')

    useEffect(() => {
        setInputCategory(category)
    }, [category])

    const handleSubmit = async (value: IFormValue, { resetForm }: FormikHelpers<IFormValue>) => {
        try {
            await validationItem.validate(value);
            if (await handleSubmitForm(value.name, inputCategory, value.description)) {
                setErrorCommon('')
                resetForm()
                setInputCategory(null)
                handleCancel()
            } else {
                setErrorCommon(ErrorMessages.POST_ERROR)
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                setErrorCommon(ErrorMessages.VALIDATION)
            }
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationItem}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ isValid, dirty, resetForm }) => (
                <Form
                    className={styles.SForm}
                >
                    <div className={styles.SCreateSection}>
                        <Field
                            name='name'
                        >
                            {({ field, form }: FieldProps) => {
                                const error = form.errors[field.name] ? form.errors[field.name]?.toString() : '';

                                return (
                                    <Input
                                        {...field}
                                        placeholder="Введите имя задачи"
                                        label="Имя"
                                        isRequired
                                        error={error}
                                    />
                                );
                            }}
                        </Field>
                        <Select
                            options={options}
                            label="Категория"
                            setSelected={(newValue) => setInputCategory(newValue)}
                            placeholder="Введите категорию"
                            value={inputCategory}
                        />
                    </div>
                    <Field 
                            name="description"
                    >
                        {({ field, form }: FieldProps) => {
                            const error = form.errors[field.name] ? form.errors[field.name]?.toString() : '';

                            return (
                                <Textarea
                                    {...field}
                                    error={error}
                                    placeholder="Введите описание задачи"
                                    label="Описание"
                                />
                            );
                        }}
                    </Field>
                    {errorCommon && (
                        <ErrorText
                            message={errorCommon}
                        />
                    )}
                    <footer className={styles.SPFooter}>
                        {buttonSubmitTitle && (
                            <Button
                                theme='primary'
                                type='submit'
                                disabled={!isValid || !dirty}
                            >
                                {buttonSubmitTitle}
                            </Button>
                        )}
                        {buttonCancelTitle && (
                            <Button
                                type="button"
                                theme='secondary'
                                onClick={() => {
                                    resetForm()
                                    setInputCategory(null)
                                    handleCancel()
                                }}
                            >
                                {buttonCancelTitle}
                            </Button>
                        )}
                    </footer>
                </Form>
            )}
        </Formik>
    )
}