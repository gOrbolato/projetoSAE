import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style-cadastroGeral.css';

const CadastrarMateria = () => {
  // Dados mockados para os cursos
  const cursosMock = [
    { pk_curso: 1, nome: "Engenharia de Software" },
    { pk_curso: 2, nome: "Medicina" },
    { pk_curso: 3, nome: "Direito" },
    { pk_curso: 4, nome: "Administração" },
    { pk_curso: 5, nome: "Arquitetura e Urbanismo" }
  ];

  // Estados do formulário
  const [periodo, setPeriodo] = useState('');
  const [nomeMateria, setNomeMateria] = useState('');
  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulação de cadastro - apenas exibe os dados no console
    console.log({
      periodo,
      nomeMateria,
      cursoId: cursoSelecionado
    });

    // Mostra mensagem de sucesso
    setMensagem(`Matéria "${nomeMateria}" cadastrada com sucesso para o curso ${cursosMock.find(c => c.pk_curso == cursoSelecionado)?.nome || ''}!`);
    
    // Limpa o formulário
    setPeriodo('');
    setNomeMateria('');
    setCursoSelecionado('');
  };

  return (
    <div className="cadastro-page">
      <header className="head">
        <h1>Sistema de Avaliação Educacional</h1>
        <section className="menu-right">
          <section className="dropdown">
            <p><a href="#">Aluno</a></p>
            <section className="dropdown-content">
              <Link to="/perfil">Perfil</Link>
              <Link to="/configuracoes">Configurações</Link>
              <Link to="/login">Sair</Link>
            </section>
          </section>
        </section>
      </header>
      
      <nav className="menu">
        <ul>
          <li><Link to="/userHome">Home</Link></li>
          <li>
            <a href="#Cadastro">Cadastrar</a>
            <ul className="cadastro">
              <li><Link to="/cadastro-instituicao">Cadastrar Instituição</Link></li>
              <li><Link to="/cadastro-curso">Cadastrar Curso</Link></li>
              <li><Link to="/cadastro-materia">Cadastrar Matéria</Link></li>
            </ul>
          </li>
          <li><Link to="/visualizacao-dados">Visualização</Link></li>
          <li><Link to="/avaliacao">Avaliações</Link></li>
          <li><Link to="/reavaliacao">Reavaliações</Link></li>
        </ul>
      </nav>

      <main className="home-container">
        <h2>Painel do Usuário</h2>
        <h3>Cadastro de Matéria</h3>
        
        {mensagem && (
          <div className="mensagem-sucesso">
            {mensagem}
          </div>
        )}
        
        <section className="cadastro-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite o período"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              required
            />
            
            <input
              type="text"
              placeholder="Digite o nome da matéria"
              value={nomeMateria}
              onChange={(e) => setNomeMateria(e.target.value)}
              required
            />
            
            <label htmlFor="cursos">Selecione o Curso</label>
            <select
              id="cursos"
              value={cursoSelecionado}
              onChange={(e) => setCursoSelecionado(e.target.value)}
              required
            >
              <option value="">Escolha um Curso</option>
              {cursosMock.map((curso) => (
                <option key={curso.pk_curso} value={curso.pk_curso}>
                  {curso.nome}
                </option>
              ))}
            </select>

            <button type="submit">Cadastrar Matéria</button>
          </form>
        </section>
      </main>

      <footer className="foot">
        <p>&copy; Direitos Acadêmicos reservados</p>
      </footer>
    </div>
  );
};

export default CadastrarMateria;