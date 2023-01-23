import logoAD from '../../assets/logoAD.png';
import styles from './Footer.module.scss';
import '../../scss/app.scss';
import classNames from 'classnames';
import Vk from '../../assets/Vk';
import Insta from '../../assets/Insta';
import Face from '../../assets/Face';
import Utub from '../../assets/Utub';
const Footer = () => {
  const footerInfoOne = [
    'Главная',
    'Каталог',
    'Услуги',
    'Расчет стоимости',
    'Консультация архитектора',
  ];
  const footerInfoTwo = [
    'Экскурсия на объект',
    '3D-макет дома',
    'О нас',
    'Блог',
    'Контакты',
  ];
  return (
    <div className={styles.wrapper}>
      <div className={classNames('container', styles.inner)}>
        <button className={styles.btn}>Заказать звонок</button>
        <div>
          {footerInfoOne.map((el, index) => (
            <div className={styles.item} key={index}>
              <a href="#">{el}</a>
            </div>
          ))}
        </div>

        <div>
          {footerInfoTwo.map((el, index) => (
            <div className={styles.item} key={index}>
              <a href="#">{el}</a>
            </div>
          ))}
        </div>

        <div className={styles.info}>
          <p className={styles.infoText}>
            Делимся крутыми проектами в соц.сетях. Подписывайтесь!
          </p>
          <div className={styles.social}>
            <a href="#">
              <Vk />
            </a>
            <a href="#">
              <Insta />
            </a>

            <a href="#">
              <Face />
            </a>
            <a href="#">
              <Utub />
            </a>
          </div>
          <p className={styles.socialText}>Разработка и продвижение сайта:</p>
          <img src={logoAD} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
