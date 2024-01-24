import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import fetch from 'node-fetch'; // Certifique-se de ter o 'node-fetch' instalado
import { config } from 'dotenv';
config(); // Isso substitui require('dotenv').config();

console.log('ESSE É O PROCESS.ENV.ID:',process.env.CLIENT_ID);
console.log('ESSE É O PRE LOGIN URL:',process.env.PRELOGIN_URL);

passport.use(new LinkedInStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: ['openid', 'profile', 'email'],
    state: true
  },
  async function(accessToken, refreshToken, profile, done) {
    // Aqui você pode fazer uma chamada adicional para o endpoint 'userinfo'
    console.log('profile', profile);
    console.log('accessToken', accessToken);

    try {
      const response = await fetch('https://api.linkedin.com/v2/userinfo', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch user profile: ${response.statusText}`);
      }

      const userProfile = await response.json();

      // Aqui você pode decidir o que deseja fazer com as informações do usuário.
      // Por exemplo, armazenar o nome em uma lista ou em um banco de dados.
      // Se você precisar do email, faça outra chamada para o endpoint 'emailAddress'.

      return done(null, userProfile);
    } catch (error) {
      console.log('there is an error', error)
      done(error);
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

export default passport;
