import Card from './components/Card';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Prev from './components/Prev';
import Products from './components/Products';
import Question from './components/Question';
import './scss/app.scss';

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Categories />
        <Prev />
        <Products />
        <Question />
      </div>
      <Footer />
    </>
  );
};

export default App;
