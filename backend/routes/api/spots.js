const express = require('express')
const router = require('express').Router()
const { User, Spot } = require('../../db/models')
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async function(req, res) {
    const spots = await Spot.findAll()
    return res.json(spots)
}))

router.post('/', asyncHandler(async function (req, res) {
    const {hostId, title, body} = req.body
    const spot = await Spot.create({hostId, title, body})
    return res.json({spot})
}))

router.get('/:spotId', asyncHandler(async function (req, res) {
    const spot = await Spot.findByPk(req.params.spotId)
    return res.json({spot})
}))

module.exports = router
