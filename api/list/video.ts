import { Request, Response } from 'express'

/**
 * https://qiita.com/R-STYLE/items/6afd4aab417f973de961
 * https://blog.sarabande.jp/post/52050002245
 */

const express = require('express')
var router = express.Router();

router.post('/video', async (req: Request, res: Response) => {
    console.log(res)
    await res.send(req.body.test)
});

router.get('/video', (req: Request, res: Response) => {
    res.send('hello world')
});

module.exports = router;