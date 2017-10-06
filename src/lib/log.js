module.exports.log = function log (message) {
  const args = ['[GITPAIR] ' + message].concat(getTrailingArgs(arguments))
  console.log.apply(console, args)
}

module.exports.error = function error (message) {
  const args = ['[GITPAIR] ' + message].concat(getTrailingArgs(arguments))
  console.error.apply(console, args)
  throw new Error(args[0])
}

function getTrailingArgs (args) {
  return Array.prototype.slice(args, 1)
}
