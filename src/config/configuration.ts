export default () => ({
  port: parseInt(process.env.PORT),
  secretKey: process.env.SECRET_KEY,
});
