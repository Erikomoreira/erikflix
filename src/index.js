import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact /> {/* Exact quer dizer que só irá para home assim */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => (<div>Página 404</div>)} /> {/* Se não colocarmos o path, irá atender todos caminhos que não existe */}
    </Switch>
  </BrowserRouter>,  
  document.getElementById('root')
);