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
          </ul>
        </nav>
  )
}