'use client';

import { ReactNode } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { environment } from './RelayEnvironment';

type Props = {
  children: ReactNode;
};

export function RelayProvider({ children }: Props) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
