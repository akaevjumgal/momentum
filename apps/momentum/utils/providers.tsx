import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>{children}</Hydrate>
    </QueryClientProvider>
  );
}
