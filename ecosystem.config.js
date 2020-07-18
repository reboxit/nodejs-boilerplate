module.exports = {
  apps: [
    {
      name: 'app',
      script: './build/app.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
