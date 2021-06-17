import { Header } from './components/header'
import { Login } from './components/login'
import { Footer } from './components/footer'
import { ProductsList } from './containers/productsList'
import { GlobalStyles } from './styles/GlobalStyles'


function App() {
  return (
    <div>
      < GlobalStyles />
      <Header></Header>
      {/* <Login></Login> */}
      <ProductsList />
      <Footer></Footer>
    </div>
  );
}

export default App;
