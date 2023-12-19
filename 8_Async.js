const { log } = require('console')
const {readFile, writeFile} = require('fs')

log('start')
readFile('./content/1.txt','utf8',(err,result)=>{
    if(err){
        log(err)
        return; 
    }
    const first = result;
    readFile('./content/2.txt','utf8',(err,result)=>{
        if(err){
            log(err)
            return; 
        }
        const second = result;
        writeFile('./content/3.txt',`${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done')
        })
    })

})
log('again')