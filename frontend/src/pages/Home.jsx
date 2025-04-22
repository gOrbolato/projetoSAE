import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';
import universityImg from '../components/assets/university.jpg';
import alunoImg from '../components/assets/aluno.jpg';
const Home = () => {
  return (
    <div className="home-container">
      <header className="head">
        <h1>Sistema de Avaliação Educacional</h1>
        <div className="auth-links">
          <p className="login"><Link to="/login">Login</Link></p>
          <p className="cadastro"><Link to="/cadastro">Cadastre-se</Link></p>
        </div>
      </header>
      
      <section className="body-section">
        <section className="content">
          <h1 className="titulo">Como funciona nosso sistema web de avaliação?</h1>
          <p className="texto">
            Nosso sistema web permite que <span>estudantes do ensino superior</span> compartilhem 
            suas experiências e avaliações sobre<span> cursos, matérias e Instituições de Ensino</span>. Dessa forma, 
            <span>futuros ingressantes</span> têm acesso a <span>informações detalhadas e imparciais</span>, 
            ajudando-os a tomar decisões mais bem fundamentadas sobre onde e o que estudar.
          </p>
          <p className="texto">
            Por trás desse sistema, há uma estrutura que conecta os estudantes 
            a um <span>banco de dados seguro e organizado</span>. Quando um usuário acessa o 
            site, ele interage com uma <span>interface intuitiva e amigável</span>, projetada 
            para facilitar a navegação e a criação de avaliações. Cada avaliação 
            é armazenada em nossa base de dados, onde é vinculada aos respectivos cursos, 
            professores ou instituições. Assim, quando um futuro aluno realiza uma busca, 
            ele pode visualizar uma média das avaliações e detalhes específicos 
            com base no que outros estudantes avaliaram.
          </p>
        </section>
        <img src={universityImg} alt="Universidade" className="content-image" />
      </section>
      
      <section className="body-section">
        <img src={alunoImg} alt="Grupo de alunos" className="content-image" />
        <section className="content">
          <h1 className="titulo">Para você aluno</h1>
          <h3 className="texto">O que você pode avaliar?</h3>
          <p className="texto">
              <span>Instituições:</span> Faça uma análise completa da sua universidade ou faculdade.
              Descreva como é o ambiente, os métodos de ensino e avalie desde a direção até os funcionários,
              destacando os pontos fortes e as áreas que precisam de melhoria.
          </p>

          <p className="texto">
              <span>Cursos:</span> Avalie o curso que você está cursando! Fale sobre a coordenação, a
              estrutura curricular e a interação entre os alunos. Esta é a sua chance de compartilhar se o
              curso atende às suas expectativas e como ele poderia evoluir.
          </p>

          <p className="texto">
              <span>Matérias:</span> Se desejar, você também pode avaliar matérias específicas. Informe como é a
              didática do professor, a abordagem dos conteúdos e o impacto da disciplina no curso. Avaliar matérias
              individuais ajuda futuros alunos a entender a fundo o que esperar do currículo.
          </p>
        </section>
      </section>

      <footer className="foot">
        <p>&copy; Direitos Acadêmicos reservados</p>
      </footer>
    </div>
  );
};

export default Home;