import { FC, ReactNode } from "react"
import { createPortal } from "react-dom"

interface IPortal {
    children: ReactNode
}

export const Portal: FC<IPortal> = (
    {
        children
    }
) => {
    return createPortal(children, document.body)
}