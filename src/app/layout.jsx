import '../index.css';

import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Background from '../components/UI/Background';
import NetworkStatus from '../components/UI/NetworkStatus';
import ScrollProgress from '../components/UI/ScrollProgress';
import SmoothScrollProvider from '../components/Providers/SmoothScrollProvider';

export const metadata = {
  title: 'Chamindu Fernando - Visual Storyteller',
  description: 'Your friendly neighbourhood designer.',
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
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
