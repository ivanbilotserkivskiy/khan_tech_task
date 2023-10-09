import logo from '../../images/icons/Logo.svg';
import HeaderStyles from './Header.module.css';
import { Navigation } from './components/Navigation';

export const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.content}>
        <div className={HeaderStyles.left}>
          <a href={'/'} className={HeaderStyles.logo_link}>
            <img className={HeaderStyles.logo} src={logo} alt="Khan-tech logo" />
          </a>
            <a className={HeaderStyles.call} href="tel:+(514) 543-9936">
              <span className={HeaderStyles.call_title}>Need Help?</span>
              <span className={HeaderStyles.call_number}>(514) 543-9936</span>
            </a>
        </div>

        <div className={HeaderStyles.right}>
          <Navigation />
        </div>
      </div>
    </header>
  )
}