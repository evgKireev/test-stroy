import Button from '../Button';
import styles from './Card.module.scss';
import product from '../../assets/product.png';

const Card: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div>
          <img src={product} alt="" />
        </div>
        <div>
          <div className={styles.title}>Топас-С 4</div>
          <div className={styles.subTitle}>До 4 человек</div>
          <div className={styles.oldPrice}>86 700 ₽</div>
          <div className={styles.newPrice}>78 030 ₽</div>
          <div className={styles.desc}>
            Очистка: <span>0,8 м3/сут</span>
          </div>
          <div className={styles.desc}>
            Залповый сброс: <span>175 л</span>
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <button className={styles.btnMore}>Подробнее</button>
        <Button
          className={styles.button}
          title={'Заказать'}
          disabled={false}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Card;
