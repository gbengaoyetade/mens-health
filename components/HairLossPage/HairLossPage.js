import { useState } from 'react';
import styles from './hairlosspage.module.css';
import Image from 'next/image';
import Quiz from '../Quiz';

const HairLossPage = ({ questions }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleTakeQuiz = () => {
    setShowQuiz(true);
  };

  if (showQuiz) {
    return (
      <Quiz
        showQuiz={showQuiz}
        setShowQuiz={setShowQuiz}
        questions={questions}
      />
    );
  }

  return (
    <div className={styles.main}>
      <main>
        <section className={styles['hero-section']}>
          <div>
            <Image
              alt='app logo'
              src='/images/symbol.svg'
              width='40px'
              height='38px'
            />
          </div>

          <div className={styles['head-text']}>
            <h1>Be good to yourself</h1>
            <p className={styles['hero-paragraph']}>
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
            <button onClick={handleTakeQuiz} className={styles.btn}>
              TAKE THE QUIZ
            </button>
          </div>
        </section>

        <section className={styles['help-section']}>
          <h2>What can we help with?</h2>

          <div className={styles['help-item']}>
            <div className={styles['help-item-image']}>
              <Image
                alt='person with hair loss'
                src='/images/person1.png'
                width='370px'
                height='445px'
              />
            </div>
            <div className={styles['help-item-text']}>
              <p className={styles['help-item-title']}>Hair loss</p>
              <h3>Hair loss needn’t be irreversible. We can help! </h3>
              <p className={styles['help-item-desc']}>
                We’re working around the clock to bring you a holistic approach
                to your wellness. From top to bottom, inside and out.
              </p>
              <p className={styles['bg-text']}>01</p>
            </div>
          </div>

          <div className={`${styles['help-item']} ${styles['row-reverse']}`}>
            <div
              className={`${styles['help-item-image']} ${styles['image-reverse']}`}
            >
              <Image
                alt='an image showing a person'
                src='/images/person2.png'
                width='370px'
                height='445px'
              />
            </div>
            <div className={styles['help-item-text']}>
              <p className={styles['help-item-title']}>Erecetile dysfunction</p>
              <h3>
                Erections can be a tricky thing. But no need to feel down!
              </h3>
              <p className={styles['help-item-desc']}>
                We’re working around the clock to bring you a holistic approach
                to your wellness. From top to bottom, inside and out.
              </p>
              <p
                className={`${styles['bg-text']} ${styles['bg-text-reverse']}`}
              >
                02
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HairLossPage;
