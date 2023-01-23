import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import Card from '../Card';

const MultipleItems: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};

export default MultipleItems;
