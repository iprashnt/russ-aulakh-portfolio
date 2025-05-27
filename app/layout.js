import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Russ',
  description: 'Hello! I\'m Russ, a software engineer and co-founder of Flymile.pro, a platform that rapidly attracted over 5,000 users. I spearheaded the development of Concordia.courses, revolutionizing educational resources by integrating comprehensive data analytics. I love to solve real problems for real People.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {}
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
};
