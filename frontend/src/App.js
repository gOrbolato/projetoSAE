import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import CadastroUsuario from './components/CadastroUsuario';
import RecuperacaoSenha from './components/RecuperacaoSenha';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/recuperacaoSenha" element={<RecuperacaoSenha />} />
    </Routes>
  );
}

export default App;