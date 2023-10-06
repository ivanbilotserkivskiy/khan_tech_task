import NavigationItemStyles from './NavigationItem.module.css'

export const NavigationItem = () => {
  return (
    <li className={NavigationItemStyles.item}>
      <a href='#asd' className={NavigationItemStyles.nav_link}>linka</a>
      <div className={NavigationItemStyles.dropdown}>
        <ul className={NavigationItemStyles.dropdown_list}>
          <li className={NavigationItemStyles.dropdown_item}>
          <a href="#item" className={NavigationItemStyles.dropdown_link}>item-1</a>
          </li>
          <li className={NavigationItemStyles.dropdown_item}>
            <a href="#item" className={NavigationItemStyles.dropdown_link}>item-2</a>
          </li>
          <li className={NavigationItemStyles.dropdown_item}>
          <a href="#item" className={NavigationItemStyles.dropdown_link}>item-3</a>
          </li>
        </ul>
      </div>
    </li>
  )
}
