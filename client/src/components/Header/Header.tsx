import logo from '../../images/icons/Logo.svg';
import HeaderStyles from './Header.module.css';
import { NavigationItem } from './components/NavigationItem'

export const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.left}>
        <a href={logo} className={HeaderStyles.logo_link}>
          <img className={HeaderStyles.logo} src={logo} alt="Khan-tech logo" />
        </a>
          <a className={HeaderStyles.call} href="tel:+(514) 543-9936">
            <span className={HeaderStyles.call_title}>Need Help?</span>
            <span className={HeaderStyles.call_number}>(514) 543-9936</span>
          </a>
      </div>

      <div className={HeaderStyles.right}>
        <nav className={HeaderStyles.nav}>
          <ul className={HeaderStyles.list}>
            <li className={HeaderStyles.item}>
              <a href='#home' className={HeaderStyles.nav_link}>Home</a>
            </li>
            <li className={HeaderStyles.item}>
              <a href='#service' className={HeaderStyles.nav_link}>Services</a>
              <div>
                <ul>

                </ul>
              </div>
            </li>
            {/* <li className={HeaderStyles.item}>
              <a href='#about' className={HeaderStyles.nav_link}>About</a>
            </li> */}
            <NavigationItem />
            <li className={HeaderStyles.item}>
              <a href='#book_now' className={HeaderStyles.nav_link}>Book now</a>
            </li>
            <li className={HeaderStyles.item}>
              <a href='#shop' className={HeaderStyles.nav_link}>Shop</a>
            </li>
            <li className={HeaderStyles.item}>
              <a href='#blog' className={`${HeaderStyles.nav_link} ${HeaderStyles.active}`}>Blog</a>
            </li>
            <li className={HeaderStyles.item}>
              <a href='#contact' className={HeaderStyles.nav_link}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}