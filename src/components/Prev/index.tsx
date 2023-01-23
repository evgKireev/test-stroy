import photo1 from '../../assets/header/slider/1.png';
import photo2 from '../../assets/header/slider/2.png';
import photo3 from '../../assets/header/slider/3.png';
import photo4 from '../../assets/header/slider/4.png';
import Icon1 from '../../assets/header/svg/Icon1';
import Icon2 from '../../assets/header/svg/Icon2';
import Icon3 from '../../assets/header/svg/Icon3';
import Icon4 from '../../assets/header/svg/Icon4';
import desing1 from '../../assets/desing/1.png';
import desing2 from '../../assets/desing/2.png';
import Button from '../Button';
import Input from '../Input';
import styles from './Prev.module.scss';
import { useEffect, useState } from 'react';
const Prev = () => {
  const imagesSlider = [photo1, photo2, photo3, photo4, photo1, photo1];
  const [valueSlider, setValueSlider] = useState('');
  useEffect(() => {}, [valueSlider]);

  return (
    <>
      <h2 className={styles.title}>Топас-С 4</h2>
      <div className={styles.inner}>
        <div>
          <div className={styles.innerPhoto}>
            <div className={styles.smollImg}>
              {imagesSlider.map((value, index) => (
                <img
                  onClick={() => setValueSlider(value)}
                  key={index}
                  src={value}
                ></img>
              ))}
            </div>
            <div className={styles.bigImg}>
              <img src={valueSlider ? valueSlider : photo1} alt="photo" />
            </div>
          </div>
          <div className={styles.formInner}>
            <h4 className={styles.sTitle}>Обсудим детали?</h4>
            <Input placeholder={'Ваше имя'} />
            <Input placeholder={'Номер телефона'} />
            <Button
              title={'Хочу обсудить детали'}
              disabled={false}
              onClick={() => {}}
            />
          </div>
        </div>
        <div>
          <div className={styles.descInner}>
            <ul>
              <li>Количество пользователей:</li>
              <li>Производительность:</li>
              <li>Объем залпового сброса:</li>
              <li> Глубина подводящей трубы:</li>
              <li> Потребляемая электроэнергия:</li>
            </ul>
            <ul>
              <li>4 человека</li>
              <li>0.8 м3/сут</li>
              <li>175 л.</li>
              <li>40-80 см</li>
              <li>1500 Вт/сут.</li>
            </ul>
          </div>
          <div className={styles.price}>
            Цена: <span>78 030 ₽</span>
          </div>
          <div className={styles.descripsh}>
            <h4 className={styles.sTitle}>Обсудим детали?</h4>
            <p>
              Индивидуальная система биологической очистки Топас-С 4, как и
              другие УОСВ из данного модельного ряда, очищают стоки до 98% без
              вреда для экологии. Все модификации септика ТОПАС-С 4 очищают до
              0.8 м3 сточных вод в сутки и имеют максимальный залповый сброс в
              районе 175 литров. Уже отработанную воду можно накапливать в
              отдельном резервуаре и в дальнейшем использовать для хозяйственных
              нужд или производить сброс очищенной воды в ливневую канаву (для
              моделей Пр со встороенным насосом).
            </p>
          </div>
        </div>
        <div className={styles.barIcon}>
          <div className={styles.itemBar}>
            <Icon1 />
          </div>
          <div className={styles.itemBar}>
            <Icon2 />
          </div>
          <div className={styles.itemBar}>
            <Icon3 />
          </div>
          <div className={styles.itemBar}>
            <Icon4 />
          </div>
        </div>
        <img className={styles.desing1} src={desing1} alt="" />
        <img className={styles.desing2} src={desing2} alt="" />
      </div>
    </>
  );
};

export default Prev;
