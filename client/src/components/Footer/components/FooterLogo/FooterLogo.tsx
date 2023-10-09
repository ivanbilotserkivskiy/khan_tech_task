import footerLogo from '../../../../images/icons/footer_logo.svg';
import FooterLogoStyles from './FooterLogo.module.css';

export const FooterLogo = () => {
  return (
    <div className={FooterLogoStyles.container}>
      <img
        className={FooterLogoStyles.logo} 
        src={footerLogo} 
        alt="Khan-tech logo"
      />
      <p className={FooterLogoStyles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit tincidunt ut sed. Velit euismod integer convallis ornare eu.</p>
    </div>
  )
}