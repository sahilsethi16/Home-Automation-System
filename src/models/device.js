const mongoose= require('mongoose');

const deviceSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    deviceId:{
        type: String,
        unique: true,
        maxlength: 9,
        required: true,
        trim: true
    },
    status:{
        type: String,
        default: "OFF"
    }
})

const device= mongoose.model('Devices', deviceSchema);

module.exports= device;