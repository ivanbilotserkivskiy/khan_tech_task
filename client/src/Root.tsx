import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import App from './App';
import { Dashboard } from './components/Dashboard';
import { Main } from './components/Main';
import { LogIn } from './components/LogIn';
import { PrivateRoute } from './utils/PrivateRout';
import { NotFound } from './components/NotFound';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="blog" element={<Navigate to="/" replace />} />
        <Route index element={<Main />} />
        <Route path="dashboard" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="login" element={<LogIn />}>
          <Route index element={<LogIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);