import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    errorExchangeRates, fetchExchangeRates, getExchangeRates, loadingExchangeRates,
} from '@/features/fetchExchangeRates';
import { ExchangeRate } from '@/entities/ExchangeRates';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Select } from '@/shared/ui/Select/Select';
import { Input } from '@/shared/ui/Input/Input';
import { ErrorComponent } from '@/shared/ui/ErrorComponent/ErrorComponent';
import { convertExchangeRatesToOptions } from '../../model/functions/convertRatesToOptions';
import { calculateRate } from '../../model/functions/calculateRate';
import cls from './CurrencyConverter.module.scss';

export const CurrencyConverter = memo(() => {

    // Получение данных
    const dispatch = useAppDispatch();
    const error = useSelector(errorExchangeRates);
    const isLoading = useSelector(loadingExchangeRates);
    const exchangeRates = useSelector(getExchangeRates);

    useEffect(() => {
        dispatch(fetchExchangeRates());
    }, [dispatch])

    //Логика работы ковертера
    const selectOptions = convertExchangeRatesToOptions(exchangeRates as ExchangeRate[]);
    const [inputValue, setInputValue] = useState('');
    const [selectValue1, setSelectValue1] = useState('USD');
    const [selectValue2, setSelectValue2] = useState('USD');
    const [calcExchangeRate, setCalcExchangeRate] = useState(1);
    const [result, setResult] = useState(1);

    const calculateResult = useCallback(() => {
        if (exchangeRates) {
            const convertedAmount = calculateRate('result', exchangeRates, selectValue1, selectValue2, inputValue);
            setResult(convertedAmount); 
        }
    }, [exchangeRates, inputValue, selectValue1, selectValue2]);

    useEffect(() => {
        if (exchangeRates) {
            const exchangeRate = calculateRate('rate', exchangeRates, selectValue1, selectValue2);
            setCalcExchangeRate(exchangeRate); 
        }
        if (inputValue) {
            calculateResult();
        }
    }, [calculateResult, exchangeRates, inputValue, selectValue1, selectValue2]);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (error) {
        return (
            <ErrorComponent />
        );
    }

    return (
        <div className={cls.CurrencyConverter}>
                <Input 
                    placeholder='Ввеедите сумму'
                    value={inputValue}
                    onChange={setInputValue}
                    type='number'
                    className={cls.input}
                />
                <div className={cls.selectsBlock}>
                    <Select
                        options={selectOptions}
                        value={selectValue1}
                        onChange={setSelectValue1}
                        label='Из'
                        className={cls.select}
                    />
                    <Select
                        options={selectOptions}
                        value={selectValue2}
                        onChange={setSelectValue2}
                        label='В'
                        className={cls.select}
                    />
                </div>
                <div className={cls.block}>
                    <p className={cls.text}>Обменный курс: </p>
                    <p className={cls.value}>{calcExchangeRate}</p>
                </div>
                <div className={cls.block}>
                    <p className={cls.text}>Результат: </p>
                    <p className={cls.value}>{result}</p>
                </div>
        </div>
    );
});
