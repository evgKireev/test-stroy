import styles from './Header.module.scss';
import classNames from 'classnames';
import Button from '../Button';
import logo from '../../assets/header/logo.png';
import bye from '../../assets/header/bye.png';
import tell from '../../assets/header/tell.png';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiViber } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src={logo} alt="logo" />
      <div className={styles.time}>
        <div>Пн-Сб: c 10:00 до 20:00</div>
        <div>Выходной: воскресенье</div>
      </div>
      <div>
        <div className={styles.bye}>
          <img src={bye} alt="bye" />
          <a href="#">
            <div className={styles.byeText}>Заказать 3D-макет дома</div>
          </a>
        </div>
      </div>
      <div>
        <div className={styles.tell}>
          <div className={styles.icon}>
            <img src={tell} alt="tell" />
            <div className={styles.eleps}></div>
            <div className={styles.eleps2}></div>
          </div>
          <div className={styles.tellInner}>
            <div className={styles.number}>+7 (915) 168-55-50</div>
            <div className={styles.svg}>
              <BsWhatsapp />
              <FaTelegramPlane />
              <SiViber />
            </div>
          </div>
        </div>
      </div>
      <Button title={'Заказать звонок'} disabled={false} onClick={() => {}} />
    </header>
  );
};

export default Header;
