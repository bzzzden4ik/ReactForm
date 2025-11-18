import { useForm, type SubmitHandler } from "react-hook-form"
import InputField from "./InputFields/InputField"
import type { TForm } from "../../types/form.types"
import './form.css'
import { useEffect } from "react"

export default function Form(){
    const {register, handleSubmit, reset, setFocus, formState: {isSubmitting}} = useForm<TForm>()
    const formSubmit: SubmitHandler<TForm> = (data) => {
        console.log(data)
    }
    useEffect(() => {
        setFocus('name')
    }, [])
    return(
        <form onSubmit={handleSubmit(formSubmit)} className="form">
            <h1 className="form__title">Создание аккаунта</h1>
            <InputField
                type='text'
                field='name' 
                title='Имя пользователя *' 
                placeholder="Ваше имя"
                register={register}
                required={true}
            />
            <InputField 
                type='number' 
                field='age'
                title='Возраст' 
                placeholder="От 14 до 65 лет"
                register={register}
                required={false}
            />
            <InputField 
                type='email' 
                field='email' 
                title='Адрес электронной почты *' 
                placeholder="name@mail.com"
                register={register}
                required={true}
            />
            <InputField 
                type='password' 
                field='password' 
                title='Пароль' 
                placeholder="Не менее 8 символов"
                register={register}
                required={true}
            />
            <InputField 
                type='password' 
                field='passwordConfirm' 
                title='Подтверждение пароля *' 
                placeholder="Не менее 8 символов"
                register={register}
                required={true}
            />
            <div className="form__input-container form__input-terms">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                    Я принимаю 
                    <a className="" href="#">Условия пользования</a>
                </label>
            </div>
            <div className="form__buttons">
                <button disabled={isSubmitting} className="form__button" type="submit">Создать аккаунт</button>
                <button disabled={isSubmitting} className="form__button" type="button" onClick={() => reset()}>Очистить поля</button>
            </div>
        </form>
    )
}