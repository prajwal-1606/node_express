const { log } = require('console')
const path = require('path')

log(path.sep)

const filePath = path.join('./content','subfolder','test.txt')

log(filePath)

const base = path.basename(filePath)
log(base)

const res = path.resolve(__dirname,'content','subfolder','test.txt')
log(res)