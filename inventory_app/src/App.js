import React from 'react'
import { Header } from './components/header'
import { Login } from './components/login'
import { Footer } from './components/footer'
import { ProductsList } from './containers/productsList'
import { GlobalStyles } from './styles/GlobalStyles'

import useToken from './hooks/useToken'

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return (
        <div>
          <GlobalStyles />
          <Header token={token} />
          <Login setToken={setToken} />
          <Footer />
        </div>    
      )
  }
  return (
    <div>
      <GlobalStyles />
      <Header token={token} setToken={setToken}/>
      <ProductsList />
      <Footer />
    </div>
  );
}

export default App;
