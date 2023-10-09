import { FooterOption } from "./types/FooterOption";
import pinIcon from '../../images/icons/location-pin.svg';
import emailIcon from '../../images/icons/email.svg';
import phoneIcon from '../../images/icons/phone-call.svg';

export const menuOptions: FooterOption[] = [
  {
    title: 'Departments',
    children: [
      {
        label: 'Medical',
        href: '/medical'
      },
      {
        label: 'Pharmaceuticals',
        href: '/pharmaceuticals'
      },
      {
        label: 'Medical Equipment',
        href: '/medical-equipment'
      }
    ]
  },
  {
    title: 'Quick Links',
    children: [
      {
        label: 'What do we do?',
        href: '/what-do-we-do'
      },
      {
        label: 'Our expertise',
        href: 'our-expertise'
      },
      {
        label: 'Book with a Specialist',
        href: 'book-with-a-specialist'
      }
    ]
  },
  {
    title: 'Head Office',
    children: [
      {
        icon: pinIcon,
        label: '4517 Washington Ave. Manchester, Kentucky 39495',
        href: 'https://www.google.com/maps/place/4517+Washington+Ave,+Manchester,+Kentucky+39495,+USA/@29.7703163,-95.4092298,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c0b2dbc150fb:0x8d7660bc65ed9511!8m2!3d29.7703117!4d-95.4066549!16s%2Fg%2F11jzmjrxnt?entry=ttu'
      },
      {
        icon: emailIcon,
        label: 'darrell@mail.com',
        href: 'mailto:darrell@mail.com'
      },
      {
        icon: phoneIcon,
        label: '(671) 555-0110',
        href: 'tel:(671) 555-0110'
      }
    ]
  },
]