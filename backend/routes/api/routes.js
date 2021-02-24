const express = require ('express')
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const spotsRouter = require('./spots.js')
const reviewsRouter = require('./reviews.js')
const router = express.Router()

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/spots', spotsRouter)
router.use('/reviews', reviewsRouter);

module.exports = router;
