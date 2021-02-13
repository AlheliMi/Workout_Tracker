const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res)=>{
    db.Workout.find({}).then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err =>{
        res.status(400).json(err);
    })
});

router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.get("/api/workouts/:id", (req, res)=> {
    db.Workout.findByIdAndUpdate(req.params.id,
        { $push:{ allExercises: req.body}},
        {new: true}).then(dbWorkout => {
            console.log("aquí está la db", dbWorkout);
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);  
        })
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
})

router.put("/api/workouts/:id", ({body, params},res)=>{
    const id = params.id;
    let savedExercises = [];

    db.Workout.find({_id = id}).then(dbWorkout => {
        savedExercises = dbWorkout[0].exercises;

        res.json(savedExercises);
        let allExercises = [...savedExercises, body];
        updateWorkout(allExercises);
    })
})


module.exports = router