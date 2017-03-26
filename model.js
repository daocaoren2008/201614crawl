let mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201614crawl');
//定义模型骨架
var MoviesSchema= new mongoose.Schema({
    name:String,
    url:String
});
//定义模型，并导出
module.exports=mongoose.model('Moive',MoviesSchema);