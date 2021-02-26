const express = require('express')
const router = require('express').Router()
const { User, Spot } = require('../../db/models')
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async function(req, res) {
    const spots = await Spot.findAll()
    console.log(spots)
    return res.json(spots)
}))

router.post('/', asyncHandler(async function (req, res) {
    const {firstName, lastName , title, body, address, state, zipCode, photo1, photo2, photo3, photo4} = req.body
    console.log('AAAAAAAAAAAAAAAAAAAA:', firstName)
    const spot = await Spot.create({firstName, lastName , title, body, address, state, zipCode, photo1, photo2, photo3, photo4})
    return res.json({spot})
}))

router.get('/:spotId', asyncHandler(async function (req, res) {
    const spot = await Spot.findByPk(req.params.spotId)
    return res.json({spot})
}))

module.exports = router
