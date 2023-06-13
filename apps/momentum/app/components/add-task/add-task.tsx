import { useState } from 'react';
import { useTheme } from '../../theme';
import { DatePicker } from '../date-picker/date-picker';
import { IconButton } from '../icon-button/icon-button';
import { Input } from '../input/input';
import { date } from '../../days.utils';

import styles from './add-task.module.css';

export const AddTask = () => {
  const { mode } = useTheme();
  const [day, setDay] = useState(date());

  return (
    <div>
      <Input
        style={{ display: 'block', marginBottom: '1.25rem' }}
        placeholder="Write your task"
        autoFocus
      />
      <div className={styles.__actions}>
        <DatePicker
          value={day}
          onChange={(selectedDate) => setDay(selectedDate)}
        />
        <div>
          <IconButton
            iconUrl={`/assets/send-${mode}.svg`}
            iconSize={20}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};
