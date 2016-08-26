const ipc = require('./ipc')

module.exports = (pluginContext) => {
  return (name, env = {}) => {
    const content = pluginContext.clipboard.readText()
    ipc.emit('newSnippet', name, content)
    return Promise.resolve()
  }
}

