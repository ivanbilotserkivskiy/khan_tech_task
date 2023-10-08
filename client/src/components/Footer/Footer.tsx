import { FooterMenu } from './components/FooterMenu';
import { menuOptions } from './mockData';
import FooterStyles from './Footer.module.css'
import { FooterLogo } from './components/FooterLogo';

export const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footer_container}>
        <div className={FooterStyles.content}>
      {menuOptions.map(option => (
        <article key={option.title} className={FooterStyles.menu}>
          <h3 className={FooterStyles.title}>{option.title}</h3>
          <FooterMenu options={option.children} />
        </article>
      ))}
      <FooterLogo />
      </div>
        <p className={FooterStyles.rights}>©2021 All Rights Reserved</p>
      </div>
    </footer>
  )
}