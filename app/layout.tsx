import Providers from './providers';

export const metadata = {
  title: 'Pokemon App',
  description: 'tRPC + Prisma + SQL + React Query + MUI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
