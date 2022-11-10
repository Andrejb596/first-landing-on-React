import { useState } from "react";
import { Button } from "../Button/Button";
import './form.scss'

export const Form = () => {
    const [isFocus, setIsFocus] = useState(false);

    const handleInputFocus = () => {
        setIsFocus(true);
    }
    const handleInputBlur = () => {
        setIsFocus(false);
    }
    return (
        <form className={`form ${isFocus ? 'formActive' : ''}`}>
            <label className='label'>
                <input onFocus={handleInputFocus} onBlur={handleInputBlur} type="text" className='input' placeholder='Your email address' />
                <Button className='button accentColor'>Subscribe</Button>
            </label>
        </form>
    )
}
