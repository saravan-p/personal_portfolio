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
        className="mt-4 text-taupe text-[18px] max-w-6xl leading-[30px]">
        Welcome to the vibrant digital showcase of Pathapati Venkata Sai Saravan, 
        an enthusiastic and forward-thinking candidate eagerly completing his Master of Science in Computer Science at the University of Maryland Baltimore County, 
        with a graduation date set for May 2024. This follows his successful journey at the Vellore Institute of Technology, 
        where he earned his Bachelor of Technology in Computer Science. Saravan's passion for Machine Learning, Artificial Intelligence, 
        Game Programming, and Web Development is matched only by his unwavering curiosity for the latest emerging technologies. 
        Living in Baltimore, MD, his portfolio is a dynamic testament to his dedication to diving deep into the heart of technical innovation and applying advanced concepts in tangible, 
        impactful ways. Through ambitious projects, Saravan showcases not only his technical dexterity but also a proactive stance on tackling modern challenges with a keen eye. 
        His journey is also adorned with strong leadership, eloquent public speaking, and adept event management skills, further enriched by meaningful contributions to research, 
        community service, and scholarly publications, including notable presentations at the ICT4SD 2022 International Conference. 
        Step into this portfolio to discover a professional who not only keeps in step with the rapid pace of technological advancements but eagerly leads the charge into new realms of possibility.
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
