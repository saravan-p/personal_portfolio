import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-6xl leading-[30px]"
        >
        Hello there! I’m <strong>Pathapati Venkata Sai Saravan</strong>, currently completing my Master of Science in Computer Science at the University of Maryland Baltimore County, set to graduate in May 2024. My academic journey began at the Vellore Institute of Technology where I earned my Bachelor of Technology in Computer Science.

        I am deeply passionate about <strong>Machine Learning, Artificial Intelligence, Game Programming</strong>, and <strong>Web Development</strong>. Living in Baltimore, MD, my portfolio reflects my dedication to immersing myself in technical innovation and applying advanced concepts in ways that make a real impact.

        In my projects, you’ll see a blend of technical skill and a proactive approach to solving modern challenges. I pride myself not only on keeping up with the rapid pace of technology but also on leading the charge into new realms of possibility. My journey is enriched with strong leadership roles, public speaking, and event management skills. I have also contributed to research and community service and have presented at notable conferences like the <strong>ICT4SD 2022 International Conference</strong>.

        Explore my portfolio to see how I apply cutting-edge technology to real-world problems, leading the way in tech innovation!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
