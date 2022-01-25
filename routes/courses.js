const ex = require("express");

const router = ex.Router()

//import schema
const Course = require('../models/course')

// creating the route

//get all data
router.get('/', async (req, res) =>  {
    try {
        const courses = await Course.find()
        res.json(courses)
    } catch (error) {
        res.json(error);
    }
})


//get single course
router.get('/:courseId', async (req, res) =>  {
    const courseId = req.params.courseId;
    try {
        const courses = await Course.findById(courseId)
        res.json(courses)
    } catch (error) {
        res.json(error);
    }
})

//create course
router.post('/', async (req, res) => {
    try {
        const course = await Course.create(req.body)
        res.json(course)
    } catch (error) {
        res.json(error)
    }
    
})

//delete course
router.delete('/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await Course.findByIdAndDelete(courseId);
        res.json(course)
    } catch (error) {
        res.json(error)
    }
    
})

//update course
router.put('/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await Course.updateOne(
            {
                "_id" : courseId
            },
            req.body
        );
        res.json(course)
    } catch (error) {
        res.json(error)
    }
    
})

module.exports = router;