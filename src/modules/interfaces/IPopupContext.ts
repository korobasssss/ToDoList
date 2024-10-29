export interface IPopupContext {
    input_name: string
    input_description: string
    errorName: string

    handleSetInputName: (input_name: string) => void
    handleSetInputDescription: (input_description: string) => void
    handleSetErrorName: (errorName: string) => void
}