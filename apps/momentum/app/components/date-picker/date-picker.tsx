'use client';
import { forwardRef, InputHTMLAttributes } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { useTheme } from '../../theme';
import { date, DateType } from '../../days.utils';

import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.override.css';
import { cx } from 'utils';

interface DatePicker extends Omit<ReactDatePickerProps, 'value' | 'onChange'> {
  value: DateType;
  onChange: (date: DateType) => void;
}

const DatePickerInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ value, onClick, onChange }, ref) => {
  const inputStyles = cx(
    `max-w-[8rem] min-w-min flex items-center h-10 rounded-lg px-3`,
    'text-light-muted bg-light-checkbox dark:text-dark-muted dark:bg-dark-checkbox'
  );
  return (
    <div className={inputStyles}>
      <i className="fa-solid fa-calendar-days fa-md"></i>
      <input
        className="relative w-full h-full border-none bg-transparent ml-2 font-medium text-xs"
        ref={ref}
        value={value}
        onClick={onClick}
        onChange={onChange}
      />
    </div>
  );
});
DatePickerInput.displayName = 'DatePickerInput';

const DatePicker = ({
  className,
  customInput,
  onChange,
  value,
  ...props
}: DatePicker) => {
  const { mode } = useTheme();
  const onChangeHandler = (selectedDate: Date | null) => {
    onChange(date(selectedDate));
  };

  const dateValue = value.isSame(date(), 'day')
    ? 'Today'
    : value.format('MM/DD/YYYY');

  return (
    <ReactDatePicker
      calendarClassName={`custom-container--${mode} shadow-md`}
      value={dateValue}
      customInput={<DatePickerInput />}
      onChange={onChangeHandler}
      {...props}
    />
  );
};

export { DatePicker };
