async function start() {
    return await Promise.resolve('async is working')
}

const unused = 42

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log(Util.id)
console.log(unused)

import('lodash').then( _ =>{
    console.log('Lodash', _.random(0, 42, true))
})