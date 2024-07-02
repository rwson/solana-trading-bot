module.exports = {
  apps: [
    {
      name: 'solana-bot',
      script: './node_modules/.bin/ts-node',
      args: 'index.ts',
    },
  ],
}
