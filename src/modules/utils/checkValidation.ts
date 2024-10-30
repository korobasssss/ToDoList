import { IsValidTo } from "./isValidTo"

export const checkValidation = (data: string, handleSetTo: (data: string) => void, validLimit: number, 
                                handleSetErrorName: (error: string) => void) => {
    if (IsValidTo(data, validLimit)) {
        handleSetTo(data)
    } else {
        handleSetErrorName('Превышен лимит символов')
    }
}