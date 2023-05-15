module.exports = {
  name: 'antmjs.ui',
  build: {
    srcDir: './src',
    namedExport: true,
    skipInstall: ['lazyload'],
    packageManager: 'yarn',
    ignore: [/types.d.ts/, /index.d.ts/],
  },
}
