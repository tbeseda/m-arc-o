const compiler = require('marko/compiler')

exports.handler = async function () {
  const bundle = await compiler.compileFileForBrowser('./node_modules/@architect/views/hello.marko')
  return {bundle}
}
