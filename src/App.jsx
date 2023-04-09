import React from 'react';
import {
  Billing,
  Business,
  CardDeal,
  Client,
  CTA,
  Footer,
  Hero,
  Navbar,
  Status,
  Testimonial,
} from './components';
import styles from './style';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Status />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
