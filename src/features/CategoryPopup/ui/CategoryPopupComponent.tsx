import { FC, useState } from "react"
import styles from './styles.module.scss'
import { Input, Textarea, ErrorText, Button } from 'ui-kit-todo-list/main'
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik"
import { validationCategory } from "../utils/validation"
import { ErrorMessages } from "@/shared/constants"
import * as Yup from 'yup'
import { IFormValue } from "@/shared/interfaces"

interface ICategoryPopupComponent {
    handleSubmitForm: (name: string, description: string | null) => Promise<boolean>
    handleCancel: () => void
    initialValues: IFormValue
    buttonSubmitTitle? : string
    buttonCancelTitle? : string
}

export const CategoryPopupComponent: FC<ICategoryPopupComponent> = (
    {
        initialValues,
        handleSubmitForm,
        handleCancel,
        buttonSubmitTitle,
        buttonCancelTitle
    }
) => {
    const [errorCommon, setErrorCommon] = useState('')

    const handleSubmit = async (values: IFormValue, { resetForm, setErrors }: FormikHelpers<IFormValue>) => {
        try {
            await validationCategory.validate(values);
            if (await handleSubmitForm(values.name, values.description )) {
                setErrorCommon('')
                setErrors({})
                resetForm()
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
            validationSchema={validationCategory}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize
        >
            {({ isValid, dirty, resetForm }) => (
                <Form>
                    <div className={styles.SCreatePopup}>
                        <Field
                            name='name'
                        >
                            {({ field, form }: FieldProps) => {
                                const error = form.errors[field.name] ? form.errors[field.name]?.toString() : '';

                                return (
                                    <Input
                                        {...field}
                                        placeholder="Введите имя категории"
                                        label="Имя"
                                        isRequired
                                        error={error}
                                    />
                                );
                            }}
                        </Field>
                        <Field 
                            name="description"
                        >
                            {({ field, form }: FieldProps) => {
                                const error = form.errors[field.name] ? form.errors[field.name]?.toString() : '';

                                return (
                                    <Textarea
                                        {...field}
                                        error={error}
                                        placeholder="Введите описание категории"
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
                                        handleCancel()
                                    }}
                                >
                                    {buttonCancelTitle}
                                </Button>
                            )}
                        </footer>
                    </div>
                </Form>
            )}
        </Formik>
    )
}