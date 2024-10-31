export const checkValidation = (data: string, handleSetTo: (data: string) => void, validLimit: number, 
                                handleSetErrorName: (error: string) => void) => {
    data.length <= validLimit ? handleSetTo(data) : handleSetErrorName('Превышен лимит символов')
}