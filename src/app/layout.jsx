import '../index.css';

import Navigation from '../components/Navigation/Navigation';
import Background from '../components/UI/Background';
import NetworkStatus from '../components/UI/NetworkStatus';
import ScrollProgress from '../components/UI/ScrollProgress';
import SmoothScrollProvider from '../components/Providers/SmoothScrollProvider';

import ScrollToTop from '../components/UI/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Chamindu Fernando | Problem Solver & Graphic Designer',
  description: 'Portfolio of Chamindu Fernando, a problem solver and graphic designer specializing in creative digital experiences, strategy, and UX/UI design.',
  keywords: ['Chamindu Fernando', 'Chamindu', 'Fernando', 'Portfolio', 'UX Designer', 'UI Designer', 'Product Designer', 'Graphic Designer', 'Problem Solver', 'Designer in Sri Lanka'],
  authors: [{ name: 'Chamindu Fernando' }],
  creator: 'Chamindu Fernando',
  openGraph: {
    title: 'Chamindu Fernando | Portfolio',
    description: 'Portfolio of Chamindu Fernando, a graphic designer and problem solver.',
    siteName: 'Chamindu Fernando Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          <ScrollProgress />
          <Background />
          <NetworkStatus />
          <Navigation />
          <ScrollToTop />
          {children}
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
