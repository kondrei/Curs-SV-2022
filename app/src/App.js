import Elements from './components/elements';
import Loader from './components/loader';
import Name from './components/name';
import Product from './components/products';

function App() {
  return (
    <div className="app">
      <h1>Tema 3</h1>
      <h2>Exercitiu 1</h2>
      <div className="products">
        <Product denumire="Paine" pret={6} color="#bfff00" categorie="Alimente" />
        <Product denumire="Bere" categorie="Bauturi" color="#ffbf00" />
        <Product pret={82} categorie="Fructe" />
      </div>
      <h2>Exercitiu 2</h2>
      <Name />

      <h2>Exercitiu 3</h2>
      <Elements />

      <h2>Exercitiu 4 </h2>
      <Loader />
    </div>
  );
}

export default App;
