import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/recuperacaoSenha.css';
import api from '../services/api';

const RecuperacaoSenha = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await api.post('/auth/recuperarSenha', { email });
      setMessage(response.data.message || 'Instruções de recuperação enviadas para seu e-mail');
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao solicitar recuperação de senha');
    }
  };

  return (
    <div className="recovery-page">
      <header className="head">
        <h1>Sistema de Avaliação Educacional</h1>
        <p><Link to="/">Home</Link></p>
      </header>

      <section className="recovery-container">
        <h2>Recuperação de Senha</h2>
        <p>Informe seu e-mail cadastrado para que possamos enviar as instruções de recuperação de senha.</p>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>

        <p className="back"><Link to="/login">Voltar para Login</Link></p>
      </section>

      <footer className="foot">
        <p>&copy; Direitos Acadêmicos reservados</p>
      </footer>
    </div>
  );
};

export default RecuperacaoSenha;