import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../lib/AuthContext';

export const metadata = {
  title: 'CRM System',
  description: 'Customer Relationship Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-900 text-white min-h-screen">
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid #334155' },
              success: { iconTheme: { primary: '#22c55e', secondary: '#1e293b' } },
              error: { iconTheme: { primary: '#ef4444', secondary: '#1e293b' } },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
