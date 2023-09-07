import { ChangeEvent, HTMLAttributes, PropsWithChildren } from 'react';

type FormProps = HTMLAttributes<HTMLFormElement>;

export const Form = ({
  children,
  onSubmit,
  ...props
}: PropsWithChildren<FormProps>) => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };
  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};
