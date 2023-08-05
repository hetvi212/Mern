const express=require("express")
const Workout=require('../models/workoutModel')
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutControllers')

const router=express.Router()
// get all workout
router.get('/',getWorkouts)

// get one workout
router.get('/:id',getWorkout)

// post
router.post('/',createWorkout)

// delete
router.delete('/:id',deleteWorkout)

// update
router.patch('/:id',updateWorkout)


module.exports=router

