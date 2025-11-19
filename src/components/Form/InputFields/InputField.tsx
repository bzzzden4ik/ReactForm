import type { TFormProps } from "../../../types/form.types";

export default function InputField({type, field, title, placeholder, register}: TFormProps){
    return(
        <div className={`form__input-container form__${field}`}>
            <label htmlFor={field} className={`form__input-label form-label__${field}`}>{title}</label>
            <input
                type={type}
                className={`form__input form-input__${field}`}
                    id={field}
                placeholder={placeholder}
                {...register(field)}
            />
        </div>
    )
}