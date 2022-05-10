import config from './config';
import app from './app';

const { APP_PORT } = config;
app.listen(APP_PORT, () => {
  console.log(`Server listening on port ${APP_PORT}`);
});
