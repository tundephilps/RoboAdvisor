import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
    datas : Object,
});
    
const Schema= mongoose.model('alldatas', newSchema);
     
export default Schema;