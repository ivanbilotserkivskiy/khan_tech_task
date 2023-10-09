import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import AppStyle from './styles/App.module.css';

function App() {
  return (
    <div className={AppStyle.content}>
      <Header />
        <div className={AppStyle.container}>
          <Outlet />
        </div>
      <Footer />
    </div>
  );
}

export default App;
