import { useState } from "react";
import { Button } from "../Button/Button";
import './form.scss'

export const Form = () => {
    const [isFocus, setIsFocus] = useState(false);

    const hendleInputFocus = () => {
        setIsFocus(true);
    }
    const hendleInputBlur = () => {
        setIsFocus(false);
    }
    return (
        <form className={`form ${isFocus === true ? 'fornActive' : ''}`}>
            <label className='label'>
                <input onFocus={hendleInputFocus} onBlur={hendleInputBlur} type="text" className='input' placeholder='Your email address' />
                <Button className='button one' title='Subscribe' />
            </label>
        </form>
    )
}
