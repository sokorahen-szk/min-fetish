/**
 * 参考
 * https://gurutaka-log.com/nuxt-servermiddleware-api-server
 */

const express = require('express')
const app = express()

const listVideo = require('./list/video')

// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

/**
 * ビデオ
 * GET /api/list/video ビデオ一覧取得
 */
app.use('/api/list', listVideo);

export default app