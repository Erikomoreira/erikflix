import React from 'react';

import './index.css'

import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

import dadosIniciais from './data/dados_iniciais.json'

function App() {

  const {categorias} = dadosIniciais

  return (
    <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalahando na área os termos HTML, CSSe JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      {
        categorias.map(categoria => (
          <Carousel 
          ignoreFirstVideo
          category={categoria}/>
          )
        )
      }
      
      <Footer />
    </div>
  );
}

export default App;