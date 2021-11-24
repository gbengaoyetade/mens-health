import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles['space-between']} ${styles['items-wrapper']} `}>
        <div className={styles['symbol-wrapper']}>
          <Image
            alt='app logo'
            src='/images/symbol.svg'
            width='50px'
            height='50px'
          />
        </div>

        <nav className={`${styles['space-between']} ${styles.nav} `}>
          <div className={styles['nav-section']}>
            <p className={styles.title}>PRODUCT</p>
            <a href='#'>Popular</a>
            <a href='#'>Trending</a>
            <a href='#'>Guided</a>
            <a href='#'>Products</a>
          </div>
          <div className={styles['nav-section']}>
            <p className={styles.title}>COMPANY</p>
            <a href='#'>Press</a>
            <a href='#'>Mission</a>
            <a href='#'>Strategy</a>
            <a href='#'>About</a>
          </div>
          <div className={styles['nav-section']}>
            <p className={styles.title}>INFO</p>
            <a href='#'>Support</a>
            <a href='#'>Customer Service</a>
            <a href='#'>Get Started</a>
          </div>
          <div className={`${styles['nav-section']} ${styles.social}`}>
            <p className={styles.title}>FOLLOW US</p>
            <div className={`${styles['space-between']}`}>
              <a href='#'>
                <Image
                  alt='facebook logo'
                  src='/images/facebook.svg'
                  width='18px'
                  height='18px'
                />
              </a>
              <a href='#'>
                <Image
                  alt='google logo'
                  src='/images/google.svg'
                  width='18px'
                  height='18px'
                />
              </a>
              <a href='#'>
                <Image
                  alt='twitter logo'
                  src='/images/twitter.svg'
                  width='18px'
                  height='18px'
                />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <p className={styles.copy}>&copy; 2021 Manual. All rights reserverd</p>
    </footer>
  );
};

export default Footer;
