'use client';

import { Button } from '../components/button/button';
import { Card } from '../components/card/card';
import { Form } from '../components/form/form';
import { Input } from '../components/input/input';
import { useTheme } from '../theme';
import { cx } from '../utils';

import styles from './client.module.css';

export default function ClientLoginPage() {
  const { mode } = useTheme();
  const onSubmit = () => {
    console.log('submitted');
  };
  return (
    <div className={cx(`bg--${mode}`, styles.root)}>
      <Card className={styles.card__container}>
        <Form onSubmit={onSubmit} className={styles.form__container}>
          <Input
            label="Full name"
            required
            placeholder="John Doe"
            className={styles.my}
          />
          <Input
            label="Email"
            required
            type="email"
            placeholder="email@example.com"
            className={styles.my}
          />
          <Input
            label="Password"
            required
            type="password"
            placeholder="password"
            className={styles.my}
          />
          <Button className={styles.my} type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
