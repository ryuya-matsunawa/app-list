const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment

const pug = require('./loaders/pug')
environment.loaders.prepend('pug', pug)

const eslint =  require('./loaders/eslint')
environment.loaders.append('eslint', eslint)
