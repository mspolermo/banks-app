import React, {
    InputHTMLAttributes, memo,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps{
    className? : string;
    value?: string | number;
    onChange?: (value: string) => void;
    type: 'number' | 'text';
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type,
        ...otherProps
    } = props;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (type) {
            case 'text':
                onChange?.(e.target.value);
                break;
            case 'number': 
                if (/^\d*$/.test(e.target.value)) {
                    onChange?.(e.target.value); 
                }
                break;
            default:
                return null;
        }
        
    };

    return (
        <input className={classNames(cls.Input, {}, [className])}
            value={value}
            placeholder={placeholder}
            onChange={onInputChange}
            type={type}
            {...otherProps}
        />
    );
});
