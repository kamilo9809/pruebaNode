import { sequelize } from '../config/sequalizeConfig.js'


(async () =>{
    try {
        await sequelize.sync({alter: true});
        console.log('bd sincronized sucessfully')
    } catch (error) {
        console.log(error);
        
    }
})()