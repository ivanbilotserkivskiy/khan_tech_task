import { NavigationOption } from '../type/NavigationOptions';
import { NavigationItem } from './components/NavigationItem';
import { navigationOptions } from './mockData';
import NavigationStyles from './Navigation.module.css';
export const Navigation = () => {
  return (
    <nav className={NavigationStyles.nav}>
          <ul className={NavigationStyles.list}>
            {navigationOptions.map((option: NavigationOption, index) => (
              <NavigationItem key={index} option={option}/>
            ))}
            {/* <li className={NavigationStyles.item}>
              <a href='#home' className={NavigationStyles.nav_link}>Home</a>
            </li>
            <li className={NavigationStyles.item}>
              <a href='#service' className={NavigationStyles.nav_link}>Services</a>
            </li>
            <li className={NavigationStyles.item}>
              <a href='#about' className={NavigationStyles.nav_link}>About</a>
            </li>
            <NavigationItem />
            <li className={NavigationStyles.item}>
              <a href='#book_now' className={NavigationStyles.nav_link}>Book now</a>
            </li>
            <li className={NavigationStyles.item}>
              <a href='#shop' className={NavigationStyles.nav_link}>Shop</a>
            </li>
            <li className={NavigationStyles.item}>
              <a href='#blog' className={`${NavigationStyles.nav_link} ${NavigationStyles.active}`}>Blog</a>
            </li>
            <li className={NavigationStyles.item}>
              <a href='#contact' className={NavigationStyles.nav_link}>Contact</a>
            </li> */}
          </ul>
        </nav>
  )
}