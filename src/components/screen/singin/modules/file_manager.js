
const fs = require('fs')

const defaultPath = './data/content.txt'
function load(path) {
    if (path) {
        return fs.readFileSync(path, { encoding: 'utf-8' })
    }

    const fileBuffer = fs.readFileSync(defaultPath, { encoding: 'utf-8' })
    return fileBuffer
}

function save(path, content) {
    if (path) {
        const cara = load(path)

        content = cara.concat('-\n', content)

        return fs.writeFileSync(path, content, { encoding: 'utf-8' })
    }

    const cara = load(path)

    content = cara.concat('\n', content)

    return fs.writeFileSync(defaultPath, content, { encoding: 'utf-8' })
}

module.exports = {
    save,
    load
}
