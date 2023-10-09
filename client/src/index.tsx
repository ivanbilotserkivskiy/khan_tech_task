import ReactDOM from 'react-dom/client';
import './styles/utils/variables.css'
import './index.css';
import { Root } from './Root';
import { SharedStateProvider } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SharedStateProvider >
    <Root />
  </SharedStateProvider>
);

