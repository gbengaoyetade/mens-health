import { useState } from 'react';
import style from './hairlosspage.module.css';
import Image from 'next/image';
import Footer from '../Footer';
import Quiz from '../Quiz';

const HairLossPage = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleTakeQuiz = () => {
    setShowQuiz(true);
  };

  if (showQuiz) {
    return <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} />;
  }

  return (
    <div className={style.main}>
      <main>
        <section className={style['hero-section']}>
          <div>
            <Image
              alt='app logo'
              src='/images/symbol.svg'
              width='40px'
              height='38px'
            />
          </div>

          <div className={style['head-text']}>
            <h1>Be good to yourself</h1>
            <p className={style['hero-paragraph']}>
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
            <button onClick={handleTakeQuiz} className={style.btn}>
              TAKE THE QUIZ
            </button>
          </div>
        </section>

        <section className={style['help-section']}>
          <h2>What can we help with?</h2>

          <div className={style['help-item']}>
            <div className={style['help-item-image']}>
              <Image
                alt='person with hair loss'
                src='/images/person1.png'
                width='370px'
                height='445px'
              />
            </div>
            <div className={style['help-item-text']}>
              <p className={style['help-item-title']}>Hair loss</p>
              <h3>Hair loss needn’t be irreversible. We can help! </h3>
              <p className={style['help-item-desc']}>
                We’re working around the clock to bring you a holistic approach
                to your wellness. From top to bottom, inside and out.
              </p>
              <p className={style['bg-text']}>01</p>
            </div>
          </div>

          <div className={`${style['help-item']} ${style['row-reverse']}`}>
            <div
              className={`${style['help-item-image']} ${style['image-reverse']}`}
            >
              <Image
                alt='an image showing a person'
                src='/images/person2.png'
                width='370px'
                height='445px'
              />
            </div>
            <div className={style['help-item-text']}>
              <p className={style['help-item-title']}>Erecetile dysfunction</p>
              <h3>
                Erections can be a tricky thing. But no need to feel down!
              </h3>
              <p className={style['help-item-desc']}>
                We’re working around the clock to bring you a holistic approach
                to your wellness. From top to bottom, inside and out.
              </p>
              <p className={`${style['bg-text']} ${style['bg-text-reverse']}`}>
                02
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HairLossPage;
