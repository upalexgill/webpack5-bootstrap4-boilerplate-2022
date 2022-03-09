module.exports = {
  templates: [
    {
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main'],
    },
    {
      filename: 'style-guide.html',
      template: 'src/html/style-guide.html',
      chunks: ['main'],
    },
    {
      filename: 'icons.html',
      template: 'src/html/icons.html',
      chunks: ['main'],
    },
  ],
}
