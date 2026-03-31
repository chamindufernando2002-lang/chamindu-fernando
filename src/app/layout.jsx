import '../index.css';

import Navigation from '../components/Navigation/Navigation';
import Background from '../components/UI/Background';
import NetworkStatus from '../components/UI/NetworkStatus';
import ScrollProgress from '../components/UI/ScrollProgress';
import SmoothScrollProvider from '../components/Providers/SmoothScrollProvider';

import ScrollToTop from '../components/UI/ScrollToTop';

export const metadata = {
  title: 'Chamindu Fernando - Problem Solver & Research-Driven Designer',
  description: 'Problem Solver & Research-Driven Designer.',
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
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
