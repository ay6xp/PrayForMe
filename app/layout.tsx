import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { RelayProvider } from './relay/RelayProvider';

export const metadata: Metadata = {
  title: 'Prayer Times App',
  description: 'An app to fetch Islamic prayer times based on location.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RelayProvider>{children}</RelayProvider>
      </body>
    </html>
  );
}
