import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './Categories.module.scss';
const Categories = () => {
  const categories = [
    { name: 'Каталог домов', icon: <IoMdArrowDropdown /> },
    { name: 'Услуги', icon: <IoMdArrowDropdown /> },
    { name: 'О нас', icon: <IoMdArrowDropdown /> },
    { name: 'Контакты' },
    { name: 'Блог', icon: <IoMdArrowDropdown /> },
  ];

  return (
    <div className={styles.categories}>
      {categories.map((value, index) => (
        <div className={styles.inner} key={index}>
          <div className={styles.item}>{value.name}</div>
          <div>{value.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
