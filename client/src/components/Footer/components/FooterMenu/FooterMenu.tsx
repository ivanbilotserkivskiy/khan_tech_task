import { OptionChildren } from "../../types/OptionChildren";
import { MenuOption } from "./components/MenuOption";
import FooterMenuStyles from './FooterMenu.module.css'

type Props = {
  options: OptionChildren[];
}

export const FooterMenu:React.FC<Props> = ({ options }) => {
  return (
      <ul className={FooterMenuStyles.list}>
        {options.map(option => (
          <MenuOption key={option.label} option={option} />
        ))}         
      </ul>
  )
}