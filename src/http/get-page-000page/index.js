require('@marko/compiler/register');
const arc = require('@architect/functions')

async function handler(request) {
  const { page } = request.params
  const view = require(`@architect/views/${page}`).default
  const html = (await view.render({ name: 'Mr. Polo' })).getOutput()

  return { html }
}

exports.handler = arc.http.async(handler)
