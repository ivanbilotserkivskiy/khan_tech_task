import ReactDOM from 'react-dom/client';
import './styles/utils/variables.css'
import './index.css';
import { Root } from './Root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Root />
);

