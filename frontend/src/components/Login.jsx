import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/styles/login.css';
import api from '../services/api';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/auth/login', {
        email,
        password
      });

      // Salva o token e redireciona
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <div className="login-page">
      <header className="head">
        <h1>Sistema de Avaliação Educacional</h1>
        <p><Link to="/">Home</Link></p>
      </header>

      <section className="login-container">
        <h2>Login</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Campo de email */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Campo de senha */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        <p className="signup">
          <Link to="/recuperacaoSenha">Esqueceu sua senha?</Link>
        </p>
      </section>

      <footer className="foot">
        <p>&copy; Direitos Acadêmicos reservados</p>
      </footer>
    </div>
  );
};

export default Login;