import Card from '../Card';
import MultipleItems from '../Slider';
import styles from './Products.module.scss';
const Products = () => {
  return (
    <>
      <h2 className={styles.title}>Вам также могут понравиться</h2>
      <div className={styles.inner}>
        <MultipleItems />
      </div>
    </>
  );
};

export default Products;
