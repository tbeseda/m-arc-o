require('@marko/compiler/register');
const arc = require('@architect/functions')
const hello = require('@architect/views/hello').default

async function handler () {
  const html = (await hello.render({name: 'Mr. Polo'})).getOutput()
  return { html }
}

exports.handler = arc.http.async(handler)
