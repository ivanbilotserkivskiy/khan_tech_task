import { OptionPriority } from "./priority"
import { OptionType } from "./type"


export type NavigationOption = {
  title: string,
  href: string,
  type: OptionType,
  priority: OptionPriority,
  children?: NavigationOption[],
  active?: boolean
}