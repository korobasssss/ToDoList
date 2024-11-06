import { ISelectOptions } from "@/shared/interfaces"
import { EOptionCategory } from "../enums"

export const filterOptions: ISelectOptions<string, string>[] = [
    {
        value: EOptionCategory.ALL,
        label: 'Все значения'
    },
    {
        value: EOptionCategory.HAS_DESCRIPTION,
        label: 'Есть описание'
    },
    {
        value: EOptionCategory.HAS_NO_DESCRIPTION,
        label: 'Нет описания'
    },
]