import type { UseFormRegister } from "react-hook-form"

export type TForm = {
    name: string,
    age?: number,
    email: string,
    password: string,
    passwordConfirm: string
}
export type TFormProps = {
    type: string,
    field: 'age'|'name'|'email'|'password'|'passwordConfirm',
    title: string,
    placeholder?: string
    register: UseFormRegister<TForm>
    required: boolean
}