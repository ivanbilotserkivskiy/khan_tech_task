import { useState } from 'react'
import NavigationItemStyles from './NavigationItem.module.css';
import cn from 'classnames';
import { NavigationOption } from '../../../type/NavigationOptions';

type Props = {
  option: NavigationOption
}

export const NavigationItem:React.FC<Props> = ({ option }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (option.type === 'dropdown') {
    return (
      <li className={cn({
        [NavigationItemStyles.item]: option.priority === 'main',
        [NavigationItemStyles.dropdown_item]: option.priority !== 'main',
  })}>
        <div className={cn({
          [NavigationItemStyles.dropdown_nest_top]: option.priority !== 'main',
          [NavigationItemStyles.dropdown_start]: option.priority === 'main',
        })}>
          <span className={NavigationItemStyles.nav_link}>
            {option.title}
          </span>
            <button 
              className={cn(`${NavigationItemStyles.dropdown_button} ${NavigationItemStyles.dropdown_icon}`, {
                [NavigationItemStyles.dropdown_up]: option.priority === 'main' && isOpen,
                [NavigationItemStyles.dropdown_down]: option.priority === 'main' && !isOpen,
                [NavigationItemStyles.dropdown_left]: option.priority !== 'main' && isOpen,
                [NavigationItemStyles.dropdown_right]: option.priority !== 'main' && !isOpen,
              })}
              onClick={() => setIsOpen(prevState => !prevState)}
              > 
            </button>
        {isOpen ? (<div className={cn({
          [NavigationItemStyles.dropdown_nest_right]: option.priority !== 'main',
          [NavigationItemStyles.dropdown]: option.priority === 'main',
        })}>
            <ul className={NavigationItemStyles.dropdown_list}>
              {option.children && option.children.map((op: NavigationOption) => (
              <NavigationItem key={op.title} option={op}/>
              ))}
            </ul>
          </div>)
          : null  
        }
        </div>
      </li>
    )
  }


    return (
      <li className={cn({
        [NavigationItemStyles.item]: option.priority === 'main',
        [NavigationItemStyles.dropdown_item]: option.priority !== 'main',
      })}>
        <a href={option.href} className={cn({
          [NavigationItemStyles.nav_link]: option.priority === 'main',
          [NavigationItemStyles.dropdown_link]: option.priority !== 'main',
        })}>{option.title}</a>
      </li>
    )
}
