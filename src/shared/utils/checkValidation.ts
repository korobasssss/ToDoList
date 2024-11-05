import { TCheckValidation } from "../types"

export const checkValidation = (data: string, validLimit: number) : TCheckValidation => {
    if (data.length <= validLimit) {
        return {type: 'ok' , value: data}
    }
    return {type: 'error' , value: 'Превышен лимит символов'}
}