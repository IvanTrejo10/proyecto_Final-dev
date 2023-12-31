// Importando el DotEnv
import dotenv from 'dotenv';

// Invocacion ala funcion config de
// la instancia dotenv
dotenv.config();

console.log(process.env.PORT);

// Creando objetos de configuracion
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  IP: process.env.IP || '0.0.0.0',
  APP_URL: process.env.APP_URL,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
};

const devConfig = {
  MONGO_URL: process.env.DEV_DATABASE_URL,
};

const testConfig = {
  TEST_VALUE: 200,
};

const prodConfig = {
  MONGO_URL: process.env.PROD_DATABASE_URL,
};

// Creando una funcion selectora
function getenvConfig(env) {
  switch (env) {
    case 'production':
      return prodConfig;

    case 'development':
      return devConfig;

    case 'test':
      return testConfig;

    default:
      return devConfig;
  }
}
// Exportando el objeto de configuracion
export default {
  ...defaultConfig,
  ...getenvConfig(process.env.NODE_ENV),
};
