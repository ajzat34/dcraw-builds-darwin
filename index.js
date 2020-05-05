const { spawn } = require('child_process')

module.exports = function(source) {
  return new Promise(function(resolve, reject){
    try {
      const sh = spawn('./dcraw', ['-T','-6','-c',source])
      let chunks = []
      sh.on('data', chunk => chunks.push(chunk))
      sh.on('close', () => resolve(Buffer.concat(chunks)))
    } catch(err){
      reject(err)
    }
  })
}
