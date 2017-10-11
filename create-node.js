'use strict'

// const IPFS = require('../../src/core')
const IPFS = require('ipfs')
// In your project, replace by the following line and install IPFS as a dep
// const IPFS = require('ipfs')
// var ipfsAPI = require('ipfs-api')

function createNode (options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  // options.path = options.path || '/tmp/ipfs' + Math.random()
  options.path = options.path || '/tmp/ipfs777'
  // options.path = options.path || '/Users/topher/.ipfs'

  const node = new IPFS({
    repo: options.path
  })
  // var node = new ipfsAPI()


  node.on('start', () => callback(null, node))
  // callback(null, node)
}

module.exports = createNode
