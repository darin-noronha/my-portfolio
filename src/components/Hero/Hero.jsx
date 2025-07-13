import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);
  const fullText = personalInfo.title;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className={styles.hero} id="home">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: "'Fira Mono', monospace" }}
        >
          {personalInfo.name.toLowerCase()} x react
        </motion.h1>
        <div className={styles.titleContainer}>
          <span className={styles.title} style={{ fontFamily: "'Fira Mono', monospace" }}>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontFamily: "'Fira Mono', monospace" }}
        >
          {personalInfo.subtitle}
        </motion.p>
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <AnimatePresence>
            {!showPlayer && (
              <motion.button
                className={styles.secondaryBtn}
                initial={{ borderRadius: '16px', width: 180, height: 60 }}
                animate={{ borderRadius: '16px', width: 180, height: 60 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setShowPlayer(true)}
              >
                music i like
              </motion.button>
            )}
            {showPlayer && (
              <motion.div
                className={styles.musicPlayer}
                initial={{ borderRadius: '16px', width: 180, height: 60, opacity: 1 }}
                animate={{ borderRadius: '12px', width: 400, height: 352, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  overflow: 'hidden',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <button
                  className={styles.closeBtn}
                  onClick={() => setShowPlayer(false)}
                  aria-label="Close player"
                >
                  ×
                </button>
                <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/playlist/12b6uOyoaApLxkcfQWDjhw?utm_source=generator"
                  width="400"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Player"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button className={styles.primaryBtn}>
            writing
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
