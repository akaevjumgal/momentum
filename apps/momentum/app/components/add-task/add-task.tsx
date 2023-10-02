import { useState } from 'react';
import { DatePicker } from '../date-picker/date-picker';
import { date } from '@/utils/days.utils';

import { IconButton, Input } from '@material-tailwind/react';

const AddTask = () => {
  const [day, setDay] = useState(date());

  return (
    <div className="p-4">
      <Input
        placeholder="Write your task"
        variant="standard"
        className="dark:!text-white"
        autoFocus
      />
      <div className="flex items-center justify-between mt-5">
        <DatePicker
          value={day}
          onChange={(selectedDate) => setDay(selectedDate)}
          selected={day.toDate()}
          minDate={new Date()}
          showPopperArrow={false}
        />
        <div>
          <IconButton size="lg" className="bg-primary rounded-xl rotate-90">
            <i className="fa-solid fa-arrow-up fa-xl dark:text-white"></i>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
