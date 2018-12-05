const fs = require('fs')

module.exports = {
  read_file: (path) => {
    const contents = fs.readFileSync(path, 'utf8')
    return contents.split('\n')
  }
}