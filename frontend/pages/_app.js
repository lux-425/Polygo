import '../styles/global.css';
import '../styles/layout.css';

import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
