'use strict'

const uuidv1 = require('uuid/v1');
const createNode = require('./create-node.js')

createNode((err, ipfs) => {
  if (err) {
    throw err
  }

  console.log('\nStart of the example:')

  const job = {
    id: uuidv1(),
    operation: "https://raw.githubusercontent.com/computes/operations/master/nextprime/index.js",
    tags: ["javascript", "prime"]
  }

  ipfs.dag.put(job, { format: 'dag-cbor', hashAlg: 'sha2-256' }, (err, cid) => {
    if (err) {
      throw err
    }

    // console.log(cid);
    ipfs.dag.get(cid, 'id', (err, result) => {
      if (err) {
        throw err
      }

      console.log(result.value)
    })

    ipfs.dag.get(cid, 'operation', (err, result) => {
      if (err) {
        throw err
      }

      console.log(result.value)
    })

    const cidStr = cid.toBaseEncodedString()
    ipfs.dag.get(cidStr + '/tags/0', (err, result) => {
      if (err) {
        throw err
      }

      console.log(result.value)
    })

  })
})
