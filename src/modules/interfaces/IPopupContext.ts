export interface IPopupContext {
    input_name: string | undefined
    input_description: string | undefined

    handleSetInputName: (input_name: string) => void
    handleSetInputDescription: (input_description: string) => void
    handleSubmitForm: () => void

    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean

    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
}