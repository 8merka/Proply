import React from 'react';
import { Input } from '../Input/Input';
import './Form.scss';

// export function Form({ inputs, formClass = "form", onChange }) {
    export function Form({ inputs, formClass = "form"}) {
    return (
        <form className={formClass}>
            {inputs.map((inputProps, index) => (
                // <Input key={index} {...inputProps} onChange={onChange} />
                <Input key={index} {...inputProps} />
            ))}
        </form>
    );
}
