import { FC } from "react"
import { IClassName } from "../../interfaces"

interface IICon
    extends IClassName {
    icon: string
    alt?: string
}

export const Icon: FC<IICon> = (
    {
        icon,
        alt = icon,
        classNames
    }
) => {
    return (
        <img
            className={classNames} 
            src={icon} 
            alt={alt}
        />
    )
}