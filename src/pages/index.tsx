import store from '@/stores';
import { Provider } from 'react-redux';
import App from '@/components/App';

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
