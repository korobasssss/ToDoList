import { IsValidTo } from "./isValidTo"

export const checkValidation = (data: string, handleSetTo: (data: string) => void, validLimit: number, 
                                handleSetErrorName: (error: string) => void) => {
    IsValidTo(data, validLimit) ? handleSetTo(data) : handleSetErrorName('Превышен лимит символов')
}