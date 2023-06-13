'use client';
import { forwardRef, InputHTMLAttributes } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './date-picker.module.css';
import { cx } from '../../utils';
import { useTheme } from '../../theme';
import { date, DateType } from '../../days.utils';
import Image from 'next/image';

interface DatePicker extends Omit<ReactDatePickerProps, 'value' | 'onChange'> {
  value: DateType;
  onChange: (date: DateType) => void;
}

const DatePickerInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ value, onClick }, ref) => {
  const { mode } = useTheme();

  return (
    <div className={cx(styles.input__group, styles[`__input--${mode}`])}>
      <Image src={`/assets/date-${mode}.svg`} alt="" width={20} height={20} />
      <input
        className={cx(styles.input, styles[`__text--${mode}`])}
        ref={ref}
        value={value}
        onClick={onClick}
      />
    </div>
  );
});
DatePickerInput.displayName = 'DatePickerInput';

export const DatePicker = ({
  customInput,
  onChange,
  value,
  ...props
}: DatePicker) => {
  const onChangeHandler = (selectedDate: Date | null) => {
    onChange(date(selectedDate));
  };

  const dateValue = value.isSame(date(), 'day')
    ? 'Today'
    : value.format('MM/DD/YYYY');

  return (
    <ReactDatePicker
      value={dateValue}
      customInput={<DatePickerInput />}
      onChange={onChangeHandler}
      {...props}
    />
  );
};
