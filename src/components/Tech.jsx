import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      {/* Adjusted flex container for responsiveness */}
      <div className="flex flex-wrap justify-center gap-5 sm:gap-10 mt-8 sm:mt-14">
        {technologies.map((technology) => (
          // Adjusted width and height for better mobile view
          <div className="w-20 h-20 sm:w-28 sm:h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} width="20" height="20" />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
