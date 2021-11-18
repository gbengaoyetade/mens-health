import Image from 'next/image';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style['space-between']}>
        <div>
          <Image src='/images/symbol.svg' width='50px' height='50px' />
        </div>

        <nav className={`${style.nav} ${style['space-between']}`}>
          <div className={style['nav-section']}>
            <p className={style.title}>PRODUCT</p>
            <a href='#'>Popular</a>
            <a href='#'>Trending</a>
            <a href='#'>Guided</a>
            <a href='#'>Products</a>
          </div>
          <div className={style['nav-section']}>
            <p className={style.title}>COMPANY</p>
            <a href='#'>Press</a>
            <a href='#'>Mission</a>
            <a href='#'>Strategy</a>
            <a href='#'>About</a>
          </div>
          <div className={style['nav-section']}>
            <p className={style.title}>INFO</p>
            <a href='#'>Support</a>
            <a href='#'>Customer Service</a>
            <a href='#'>Get Started</a>
          </div>
          <div className={`${style['nav-section']} ${style.social}`}>
            <p className={style.title}>FOLLOW US</p>
            <div className={`${style['space-between']} `}>
              <a href='#'>
                <Image src='/images/facebook.svg' width='18px' height='18px' />
              </a>
              <a href='#'>
                <Image src='/images/google.svg' width='18px' height='18px' />
              </a>
              <a href='#'>
                <Image src='/images/twitter.svg' width='18px' height='18px' />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <p className={style.copy}>&copy; 2021 Manual. All rights reserverd</p>
    </footer>
  );
};

export default Footer;
