import localFont from 'next/font/local';
import './globals.css';
import QueryContext from './contexts/QueryContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'English Word Recall',
  description: 'English Word Recall',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleOAuthProvider clientId="348301153253-lq1n07v0ocs7oba7rbnmkse21qmuav4p.apps.googleusercontent.com">
          <QueryContext>{children}</QueryContext>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
