import { ISelectOptions } from "@/shared/interfaces"
import { EOptionTask } from "../enum"

export const filterOptions: ISelectOptions<string, string>[] = [
    {
        value: EOptionTask.ALL,
        label: 'Все значения'
    },
    {
        value: EOptionTask.HAS_CATEGORY,
        label: 'Есть категория'
    },
    {
        value: EOptionTask.HAS_NO_CATEGORY,
        label: 'Нет категории'
    },
    {
        value: EOptionTask.HAS_DESCRIPTION,
        label: 'Есть описание'
    },
    {
        value: EOptionTask.HAS_NO_DESCRIPTION,
        label: 'Нет описания'
    },
]