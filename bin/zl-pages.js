#!/usr/bin/env node

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..')) //会找package.json中的main字段
// console.log(process.argv)
require('gulp/bin/gulp')