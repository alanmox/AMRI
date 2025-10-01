const express = require('express')
const router = express.Router()
const datab = require('../db')


/*router.get('/message',async(req,res) =>{
    res.json({
        message:'allanmox is coding'
    })
})*/



//put user to the database
router.post('/todb', async(req,res) =>{
    const {first_name,second_name,age,phone_number} = req.body
    try{
        if(!first_name || first_name.trim()==="" ){
            res.status(400).json({
                message: 'firstname is empty'
            })   
        }
        else if(!second_name || second_name.trim()===""){
            res.status(400).json({
                message:'second name is empty'
            })
        }

        else if(!age || age.trim() ===""){
            res.status(400).json({
                message:'age is empty'
            })
        
        }

        else if(!phone_number || phone_number.trim() === ""){
            res.status(400).json({
                message:'phone number is empt'
            })
        }

        else{
            const [result] = await datab.execute('INSERT INTO users (first_name,second_name,age,phone_number) VALUES (?,?,?,?)',[first_name,second_name,age,phone_number])
            res.json({
                message:'success',
                data:'reuslt'
            })
        }
        
    }

    catch(error){
        res.json({
            message: 'internal sever error'
        })
    }
})

//get users
router.get('/user', async(req,res) =>{
    try{
        const users = await datab.execute('SELECT * FROM users')
        res.json(users)
    }

    catch(error){
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router   