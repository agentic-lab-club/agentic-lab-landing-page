import { useEffect } from 'react';
import styles from './SnowAnimation.module.css';

export default function SnowAnimation() {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add(styles.snowflake);
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
      snowflake.style.opacity = Math.random() * 0.6 + 0.2;
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      
      const container = document.getElementById('snow-container');
      if (container) {
        container.appendChild(snowflake);
        
        setTimeout(() => {
          snowflake.remove();
        }, 8000);
      }
    };

    const interval = setInterval(createSnowflake, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div id="snow-container" className={styles.snowContainer}></div>;
}
