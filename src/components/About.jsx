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
  Hello! I’m <strong>Pathapati Venkata Sai Saravan</strong>, an AI/ML Engineer with a Master of Science in Computer Science from UMBC (‘24) and a B.Tech in Computer Science from VIT (‘22).

  I specialize in building <strong>scalable, production‑grade ML pipelines</strong> and deploying deep‑learning models via Docker‑powered CI/CD on cloud platforms like <strong>GCP</strong> and <strong>AWS</strong>. My career highlights include architecting real‑time <strong>NLP</strong> services at OQP Solutions, developing IoT predictive‑maintenance workflows at Dazarus, and leading generative AI research at UNIIAN.

  My toolkit spans <strong>Python, PyTorch, TensorFlow, FastAPI, Kubernetes</strong>, and MLOps best practices—automated testing, GPU acceleration, and observability. I thrive on translating cutting‑edge research (GNNs, GANs, diffusion models) into low‑latency, reliable services that drive measurable impact.

  Beyond code, I lead technical workshops, mentor peers, and present at conferences like <strong>ICT4SD 2022</strong>. Explore my portfolio to see how I merge innovation with real‑world solutions—and let’s push the boundaries of AI together!
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
