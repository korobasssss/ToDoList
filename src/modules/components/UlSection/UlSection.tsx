import { useCallback } from "react"
import { UlItem } from "./UlItem"

export const UlSection = () => {
    const handlerEdit = useCallback(() => {

    }, [])

    const handlerDelete = useCallback(() => {

    }, [])

    return (
        <ul>
            <UlItem
                title="Задача 1"
                categoryTitle="Категория 1"
                description="Описание задачи, может быть длинным"
                handlerEdit={handlerEdit}
                handlerDelete={handlerDelete}
            />
            <UlItem
                title="Задача 1"
                description="Описание задачи, может быть длинным"
                handlerEdit={handlerEdit}
                handlerDelete={handlerDelete}
            />
        </ul>
    )
}