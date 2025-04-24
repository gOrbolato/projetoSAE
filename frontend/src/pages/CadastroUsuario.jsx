import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/cadastroUsuario.css';
import api from '../services/api';

const CadastroUsuario = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
    ra: '',
    instituicao: '',
    cidade: '',
    estado: '',
    curso: '',
    periodo: '',
    password: '',
    passwordConfirm: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validação básica
    if (formData.password !== formData.passwordConfirm) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const response = await api.post('/usuarios/cadastro', {
        nome: formData.name,
        id: formData.id,
        email: formData.email,
        ra: formData.ra,
        instituicao: formData.instituicao,
        cidade: formData.cidade,
        estado: formData.estado,
        curso: formData.curso,
        periodo: formData.periodo,
        senha: formData.password
      });

      if (response.data.success) {
        navigate('/login', { state: { registrationSuccess: true } });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="cadastro-page">
      <header className="head">
        <h1>Sistema de Avaliação Educacional</h1>
        <p><Link to="/">Home</Link></p>
      </header>

      <div className="cadastro-container">
        <h2>Cadastro de Usuário</h2>
        
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Digite seu iD"
            value={formData.id}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            id="ra"
            name="ra"
            placeholder="Digite seu RA"
            value={formData.ra}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            id="instituicao"
            name="instituicao"
            placeholder="Digite o nome da instituição"
            value={formData.instituicao}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Digite a cidade"
            value={formData.cidade}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            id="estado"
            name="estado"
            placeholder="Digite o seu estado"
            value={formData.estado}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            id="curso"
            name="curso"
            placeholder="Digite seu curso"
            value={formData.curso}
            onChange={handleChange}
            required
          />
          
          {/* Seleção de período */}
          <label htmlFor="periodo">Selecione o período:</label>
          <div className="periodo-container">
            <label className="periodo-option">
              <input
                type="radio"
                name="periodo"
                value="diurno"
                checked={formData.periodo === 'diurno'}
                onChange={handleChange}
                required
              />
              <span className="periodo-dot"></span> Diurno
            </label>
            <label className="periodo-option">
              <input
                type="radio"
                name="periodo"
                value="integral"
                checked={formData.periodo === 'integral'}
                onChange={handleChange}
                required
              />
              <span className="periodo-dot"></span> Integral
            </label>
            <label className="periodo-option">
              <input
                type="radio"
                name="periodo"
                value="noturno"
                checked={formData.periodo === 'noturno'}
                onChange={handleChange}
                required
              />
              <span className="periodo-dot"></span> Noturno
            </label>
          </div>
          
          {/* Senha e confirmação de senha */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Confirme a sua senha"
            value={formData.passwordConfirm}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Cadastrar</button>
        </form>
        
        <p className="login-link">Já possui uma conta? <Link to="/login">Faça login</Link></p>
      </div>
      
      <footer className="foot">
        <p>&copy; Direitos Acadêmicos reservados</p>
      </footer>
    </div>
  );
};

export default CadastroUsuario;