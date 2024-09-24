import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from '@/Store/Store';
import Layout from './layout';
import '../App.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;