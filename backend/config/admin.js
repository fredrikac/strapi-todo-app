module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '399feec122e1fcfbcb3715941ab881d4'),
  },
});
