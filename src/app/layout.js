import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import StickyContact from '@/components/StickyContact';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weights: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
});

export const metadata = {
  title: 'e-INFRA | Remarkable Spaces, Guided by Lifestyle',
  description: 'We work at the intersection of architectural design, construction science, and ecological research.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
         {/* Sticky Contact Us — visible on ALL pages/sections */}
        <StickyContact />
        {children}
      </body>
    </html>
  );
}