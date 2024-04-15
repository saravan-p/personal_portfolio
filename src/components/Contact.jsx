import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div className="contact-container -mt-[8rem] xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="contact-card flex-[0.75] bg-jet p-8 rounded-2xl flex flex-col justify-center items-start">
        <div className="contact-header mb-6">
          <p className={`${styles.sectionSubText} mb-1`}>Get in touch</p>
          <h3 className={styles.sectionHeadTextLight}>Contact Me.</h3>
        </div>
        <div className="contact-details">
          <p className="text-taupe"><strong>Name:</strong> Pathapati Venkata Sai Saravan</p>
          <p className="text-taupe mt-2"><strong>Email:</strong> <a href="mailto:saravan.pathapati@gmail.com" className="text-taupe hover:underline">saravan.pathapati@gmail.com</a></p>
          <p className="text-taupe mt-2"><strong>Phone Number:</strong> +1 410-869-5848</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
