import type { FieldErrors, UseFormRegister } from "react-hook-form"

export type TForm = {
    name: string,
    age?: number,
    email: string,
    password: string,
    passwordConfirm: string,
    terms: boolean
}
export type TPropsInput = {
    register: UseFormRegister<TForm>,
    errors: FieldErrors<TForm>
}