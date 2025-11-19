import { useForm, type SubmitHandler, type UseFormWatch } from "react-hook-form"
import type { TForm } from "../../types/form.types"
import './form.css'
import { useEffect } from "react"

export default function Form(){
    const {register, handleSubmit, reset, setFocus, formState: {isSubmitting, errors}, getValues} = useForm<TForm>()
    const formSubmit: SubmitHandler<TForm> = (data) => {
        console.log(data)
    }
    useEffect(() => {
        setFocus('name')
    }, [])
    return(
        <form onSubmit={handleSubmit(formSubmit)} className="form">
            <h1 className="form__title">Создание аккаунта</h1>
            <div className="form__input-container">
                <label htmlFor="name" className="form__input-label form__label_name">Имя пользователя *</label>
                <input
                    className={`form__input form-input__name`}
                    {...register('name', {
                        required: 'Пропущено поле *',
                        minLength: {value: 5, message: 'Имя должно быть длиннее 4 символов'},
                        maxLength: {value: 19, message: 'Имя должно быть короче 20 символов'}
                    })}
                    type="text"
                    placeholder="Ваше имя"
                    id='name'
                />
                <p>{errors?.name?.message}</p>
            </div>
            <div className="form__input-container">
                <label htmlFor="age" className="form__input-label form__label_age">Возраст</label>
                <input
                    className={`form__input form-input__age`}
                    {...register('age', {
                        validate: (value) => {
                            if (!value) return true
                            return (Number(value) <= 65 && Number(value) >= 14) ? true : 'Недопустимое значение возраста'
                        },
                        valueAsNumber: true
                    })}
                    type="number"
                    placeholder="От 14 до 65"
                    id='age'
                />
                <p>{errors?.age?.message}</p>
            </div>
            <div className="form__input-container">
                <label htmlFor="email" className="form__input-label form__label_email">Адрес электронной почты *</label>
                <input
                    className={`form__input form-input__email`}
                    {...register('email', {
                        required: 'Пропущено поле *'
                    })}
                    type="email"
                    placeholder="Ваш email"
                    id='email'
                />
                <p>{errors?.email?.message}</p>
            </div>
            <div className="form__input-container">
                <label htmlFor="password" className="form__input-label form__label_password">Пароль *</label>
                <input
                    className={`form__input form-input__password`}
                    {...register('password', {
                        required: 'Пропущено поле *',
                        minLength: {value: 10, message: 'Пароль должен содержать больше 10 символов *'},
                    })}
                    type="password"
                    placeholder="Ваш пароль"
                    id='password'
                />
                <p>{errors?.password?.message}</p>
            </div>
            <div className="form__input-container">
                <label htmlFor="passwordConfirm" className="form__input-label form__label_passwordConfirm">Подтверждение пароля *</label>
                <input
                    className={`form__input form-input__passwordConfirm`}
                    {...register('passwordConfirm', {
                        required: 'Пропущено поле *',
                        validate: (value) => {
                            return getValues('password') == value || 'Пароли не совпадают'
                        }
                    })}
                    type="password"
                    placeholder="Ваш пароль"
                    id='passwordConfirm'
                />
                <p>{errors?.passwordConfirm?.message}</p>
            </div>
            <div className="form__input-container form__input-terms">
                <input 
                    type="checkbox" 
                    id="terms"
                    {...register('terms', {required: 'Вы должны  согласиться с условиями'})}
                />
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