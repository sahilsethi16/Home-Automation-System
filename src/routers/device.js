const express= require('express');
const router= new express.Router()
const Device= require('../models/device')

router.post('/devices/addDevice', async (req, res) => {
    try{
        const device= new Device(req.body);
        await device.save()

        res.send(device);
    }catch(e){
        res.status(400).send();
    }
})

router.get('/devices', async (req, res) =>{
    try{
        const devices= await Device.find({});
        res.send(devices);
    }catch(e){
        res.status(400).send();
    }
})

router.patch('/devices/:id',async (req, res) =>{
    const _id= req.params.id;
    const allowedUpdates= ['name','status'];
    const updates= Object.keys(req.body);
    const validOperation= updates.every((update) =>{
        return allowedUpdates.includes(update);
    })

    if(!validOperation){
        return res.status(400).send("Error: Invalid Updates")
    }

    try{
        const device= await Device.findOne({_id})
        if(!device){
            res.status(404).send()
        }
        console.log(device);

        updates.forEach((update) =>{
            device[update]= req.body[update];
        })
        await device.save();

        res.send(device)
    }catch(e){
        res.status(404).send(e);
    }
})

router.delete('/devices/:id', async(req, res) =>{
    try{
        const device= await Device.findOneAndDelete(req.params.id);

        if(!device){
            return res.status(404).send();
        }
        res.send(device);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports= router;
