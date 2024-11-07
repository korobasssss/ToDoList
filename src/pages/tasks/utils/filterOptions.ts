import { EOptionTask } from "@/shared/enums"
import { ISelectOptions } from "@/shared/interfaces"

export const filterOptions: ISelectOptions<EOptionTask, string>[] = [
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