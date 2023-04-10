const express = require('express');
const router = express.Router();
const Learning = require('../learning');
const MONGODB_URI='mongodb+srv://jensjovellano:calmlyDemented@knowledgereview.frvnxmg.mongodb.net/?retryWrites=true&w=majority';
const { default: mongoose } = require('mongoose');


//Routes
router.get('/', (req, res) =>{
    Learning.find({})
        .then((data) => {
            console.log("Data:" + data);
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
});


router.post('/save', (req, res) => {
    const data = req.body;
    const newLearning = new Learning(data);
    async function insertToDB(){
        try{
        await mongoose.connect(MONGODB_URI);
        await Learning.create(data);
        console.log('Body: ',req.body);
        res.json({
            msg: 'Data received.'
        })
        }
        catch(error){
            console.log("Sorry there has been an error: ", error);
            return;
        }
    }
    insertToDB();  
});

router.get('/learnings', async (req, res) => {
    try{
        const learnings = await Learning.find({ });
        res.send(learnings);
        console.log(learnings);
    } catch (error){
        console.log(error);
    }
});

module.exports = router;