import Button from '../Button';
import Input from '../Input';
import pred from '../../assets/pred.png';
import styles from './Question.module.scss';
import logo from '../../assets/header/logo.png';
import steam from '../../assets/steam.png';
import key from '../../assets/key.png';

const Question = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.images}>
          <img className={styles.steam} src={steam} alt="photo" />
          <div className={styles.img}>
            <img src={pred} alt="photo" />
          </div>
        </div>
        <img src={logo} alt="photo" />
      </div>
      <div className={styles.inner}>
        <h1 className={styles.title}>Не нашли то, что искали?</h1>
        <p className={styles.subTitle}>
          Заполните форму и мы перезвоним вам в течение 30 минут!
        </p>
        <div className={styles.innerForm}>
          <Input placeholder={'Ваше имя'} />
          <Input placeholder={'Номер телефона'} />
          <textarea
            className={styles.textarea}
            placeholder="Ваш вопрос  (необязательно)"
          ></textarea>
          <Button title={'Отправить'} disabled={false} onClick={() => {}} />
          <img className={styles.key} src={key} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Question;
