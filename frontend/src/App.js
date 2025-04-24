import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import RecuperacaoSenha from './pages/RecuperacaoSenha';

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