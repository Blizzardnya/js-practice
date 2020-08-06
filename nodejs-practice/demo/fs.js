const fs = require('fs')
const path = require('path')


// 1. Создание папки
// fs.mkdir(path.join(__dirname, 'test'), err => {
//     if (err){
//         throw err
//     }

//     console.log('Папка создана')
// })

// 2. Запись в файл
const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NodeJs!', err => {
//     if (err){
//         throw err
//     }

//     console.log('Файл создан')
// })

// 3. Чтение файла
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err){
        throw err
    }

    console.log(content);
})
