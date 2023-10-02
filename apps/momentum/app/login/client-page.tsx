'use client';

import { Button, Input, Spinner, Typography } from '@material-tailwind/react';
import { Form } from '../components/form/form';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cx } from '@/utils/utils';
import { useTheme } from '@/utils/theme';
import { useMutation } from '@tanstack/react-query';
import { http } from '@/utils/http';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useClientSession } from '@/lib/client-hooks';

type LoginInput = {
  username: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
};

const loginSchema = object({
  username: string().required(),
  password: string().min(6, 'Use at least 6 characters').required(),
});

const authenticate = (payload: LoginInput) =>
  http.post<LoginInput, AxiosResponse<LoginResponse>>('/auth/login', payload);

export default function ClientLoginPage() {
  const { mode } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: yupResolver(loginSchema) });
  const router = useRouter();
  const { setToken } = useClientSession();

  const { mutate, isLoading } = useMutation(authenticate, {
    onSuccess: ({ data }) => {
      setToken(data.accessToken);
      router.push('/web');
    },
  });

  const login: SubmitHandler<LoginInput> = (fields) => {
    mutate(fields);
  };

  return (
    <div className="bg-transparent dark:bg-dark-border flex h-screen justify-center items-center">
      <div className="py-8 w-full md:w-96 md:h-auto px-8">
        <Typography
          variant="h3"
          className="text-center text-black mb-4 dark:text-white"
        >
          Sign In
        </Typography>
        <Form
          onSubmit={handleSubmit(login)}
          className="w-full flex flex-col gap-4"
        >
          <Input
            label="Username"
            size="lg"
            labelProps={{
              className: 'text-black dark:!text-white',
            }}
            data-mode={mode}
            className="dark:!text-white"
            {...register('username', { required: true })}
            error={!!errors.username}
          />
          {errors.username && (
            <Typography
              variant="small"
              color="gray"
              className="flex items-center gap-1 font-normal"
            >
              {errors.username.message}
            </Typography>
          )}
          <Input
            label="Password"
            size="lg"
            labelProps={{ className: 'dark:!text-white' }}
            data-mode={mode}
            className="dark:!text-white"
            {...register('password', { required: true })}
            error={!!errors.password}
          />
          {errors.password && (
            <Typography
              variant="small"
              color="gray"
              className="flex items-center gap-1 font-normal"
            >
              {errors.password.message}
            </Typography>
          )}
          <Button fullWidth type="submit" disabled={isLoading}>
            Sign In
            <Spinner
              height={20}
              className={cx('hidden absolute ml-1 -mt-0.5', {
                inline: isLoading,
              })}
            />
          </Button>
        </Form>
        <div className="mt-6 flex items-center justify-center">
          <Typography variant="small" className="dark:text-light-muted">
            Don&apos;t have an account?
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold dark:text-white hover:underline"
          >
            <Link href="/sign-up">Sign up</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
