import Head from 'next/head';
import HairLossPage from '../components/HairLossPage';

const HairLoss = () => {
  return (
    <>
      <Head>
        <title>Hair loss</title>
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <HairLossPage />
    </>
  );
};

export default HairLoss;
