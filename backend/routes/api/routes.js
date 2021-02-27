const express = require ('express')
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const spotRouter = require('./spots.js')
const reviewRouter = require('./reviews.js')
const router = express.Router()

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/spots', spotRouter)
router.use('/reviews', reviewRouter);

module.exports = router;
