import { FC } from "react"
import { UlItem } from "./UlItem"

interface IUlSection {
    handleEdit: () => void
    handleDelete: () => void
}

export const UlSection: FC<IUlSection> = (
    {
        handleEdit,
        handleDelete
    }
) => {
    return (
        <ul>
            <UlItem
                title="Задача 1"
                categoryTitle="Категория 1"
                description="Описание задачи, может быть длинным"
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            <UlItem
                title="Задача 1"
                description="Описание задачи, может быть длинным"
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </ul>
    )
}