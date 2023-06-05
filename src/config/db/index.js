const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev',{
            useNewUrlParser:true,
            useUnifiedTopoLogy: true,
        });
        console.log('Connect successfully!!!!!!!')
    }catch(ex){
        console.log('Connection failed')
    }

}

module.exports = {connect}