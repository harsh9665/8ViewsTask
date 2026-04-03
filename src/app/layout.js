import {
  Inter,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from 'next/font/google';
import './globals.css';
import StickyContact from '@/components/StickyContact';
import { OverlayProvider } from '@/context/OverlayContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'e-INFRA | Remarkable Spaces, Guided by Lifestyle',
  description:
    'We work at the intersection of architectural design, construction science, and ecological research.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <OverlayProvider>
          <StickyContact />
          {children}
        </OverlayProvider>
      </body>
    </html>
  );
}
