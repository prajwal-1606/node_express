const { log } = require('console')
const {readFileSync, writeFileSync} = require('fs')

log('start')
const first = readFileSync('./content/1.txt','utf8')
const second = readFileSync('./content/2.txt','utf8')

console.log(first,second)

writeFileSync('./content/3.txt'," Hello 3",{flag : 'a'})

log('done')
log('start again')
