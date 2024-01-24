// app.js na raiz do projeto



import { config } from 'dotenv';
config(); // Isso substitui require('dotenv').config();

import express from 'express';
import passport from 'passport';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import './config/passport-setup.js'; // Este arquivo também precisa usar a sintaxe de importação ES6.


const app = express();
app.use(cors()); // Garantir que isto esteja antes das rotas
app.use(express.json());


app.listen(3001, function() {
  console.log('Server is running on port 3001');
});


app.use(session({
  secret: 'a1b2c3d4e5f67890123456789a1b2c3d4e5f67890123456789a1b2c3d4e5f67890',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Defina o middleware para servir os arquivos estáticos do React (se necessário)
app.use(express.static('public'));

// Aqui você pode adicionar outras rotas do servidor e middleware
app.use('/auth', authRoutes);

// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
