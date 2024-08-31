/* eslint-disable prettier/prettier */

import { Transform } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator";

/* decorador que valida si es string, quita especios en blanco y analiza si no hay nada en realidad */

export const TrimAndValidate = () => {
    return (target: any, key: string) => {
        IsString()
            (target, key)
        Transform(({ value }) => value?.trim())
            (target, key)
        IsNotEmpty({ message: 'No se permiten elementos vacíos' })
            (target, key)
    }
}




