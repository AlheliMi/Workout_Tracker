const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res)=>{
    db.Workout.find().then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err =>{
        res.status(400).json(err);
    })
});

router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
});

/* router.get("/api") */
module.exports = router