import axios from 'axios';

// 1. Criar instância do Axios com configuração base
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
  }
});

// 2. Interceptor para adicionar token às requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Interceptor para tratar erros globais
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Tratamento de erros comuns
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Token expirado ou inválido - redirecionar para login
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          // Acesso negado
          console.error('Acesso negado: ', error.response.data.message);
          break;
        case 404:
          // Recurso não encontrado
          console.error('Endpoint não encontrado: ', error.config.url);
          break;
        case 500:
          // Erro interno do servidor
          console.error('Erro no servidor: ', error.response.data.message);
          break;
        default:
          console.error('Erro desconhecido: ', error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;