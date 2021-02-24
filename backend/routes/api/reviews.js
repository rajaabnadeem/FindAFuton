const express = require('express')
const router = require('express').Router()
const { User, Spot, Review } = require('../../db/models')
const asyncHandler = require('express-async-handler');

router.post('/', asyncHandler(async function (req, res) {
    const {body, rating, authorId, spotId} = req.body
    const review = await Review.create({body, rating, authorId, spotId})
    return res.json({review})
}))

router.get('/:spotId', asyncHandler(async function (req, res) {
    const reviews = await Review.findAll({
        where: {
            spotId: req.params.spotId
        }
    })
    return res.json({reviews})
}))

module.exports = router
