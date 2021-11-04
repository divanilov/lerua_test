export default {
  global: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  development: {
    apiVersion: '1',
  },
  production: {
    apiVersion: '1',
  },
};
