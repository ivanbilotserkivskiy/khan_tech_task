import cn from "classnames";
import { OptionChildren } from "../../../../types/OptionChildren"
import MenuOptionStyle from './MenuOption.module.css';

type Props = {
  option: OptionChildren;
}

export const MenuOption:React.FC<Props> = ({ option }) => {
  return (
    <li className={cn(MenuOptionStyle.item, {
      [MenuOptionStyle.address]: option.icon,
    })}>
      {
        option.icon
          ? (
            <img
              className={MenuOptionStyle.icon}
              src={option.icon}
              alt={option.label}
            />
          )
          : null 
      }
      <a 
        href={option.href}
        className={MenuOptionStyle.link}
      >
        {option.label}
      </a>
    </li>
  )
}