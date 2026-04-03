import {
  Inter,
  Karla,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from 'next/font/google';
import './globals.css';
import StickyContact from '@/components/StickyContact';
import { connectDB } from '@/lib/mongodb';
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

const karla = Karla({ subsets: ['latin'], weight: ['800'] });

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'e-INFRA | Remarkable Spaces, Guided by Lifestyle',
  description: 'We work at the intersection of architectural design, construction science, and ecological research.',
};

// Connect to DB on server startup — logs success/failure immediately
connectDB()
  .then(() => {
    console.log('🚀 App started — MongoDB is ready!');
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB on startup:', err.message);
  });

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <StickyContact />
        {children}
      </body>
    </html>
  );
}
