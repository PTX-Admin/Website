import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Button, Image } from '@chakra-ui/react';
import styles from './HomeHeader.module.css';
import { Engine } from 'tsparticles-engine/types/engine';
import { Container } from 'tsparticles-engine';
import { useRouter } from 'next/router';
import shield from '../../Assets/home/header/shield.png';
import icon from '../../Assets/home/header/icon.png';
import circle from '../../Assets/home/header/circle.png';

function Hero() {
  const router = useRouter();

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <div className="cont">
      <div className={styles.heroParticles}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 30,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.8,
                },
              },
            },
            particles: {
              color: {
                value: '#c00000',
              },
              links: {
                color: '#c00000',
                distance: 150,
                enable: true,
                opacity: 0.7,
                width: 1.2,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.9,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className={styles.hero}>
        <div data-aos="fade-right" data-aos-delay={200} className={styles.leftHero}>
          <h1>
            THE FUTURE OF <br /> DECENTRALIZED <br /> FINANCE
          </h1>
          <p>
            ProtocolX is here to change the game by implementing an ever-developing, expanding, and
            growing ecosystem that all feeds into each other.
          </p>
          <Button
            onClick={() => router.push('/', undefined, { shallow: true })}
            className={styles.ctaBtn}
          >
            Buy $PTX
          </Button>
        </div>
        <div className={styles.rightHero}>
          <Image
            fallbackSrc={shield.blurDataURL}
            src={shield.src}
            className={styles.sheild}
            alt=""
          />
          <Image fallbackSrc={circle.blurDataURL} src={icon.src} className={styles.icon} alt="" />
        </div>
        <Image fallbackSrc={circle.blurDataURL} src={circle.src} className={styles.circle} alt="" />
      </div>
    </div>
  );
}

export default Hero;
