const router = require('koa-router')()
const mongoose = require("mongoose")

router.prefix('/api')

// router.get('/test', function (ctx, next) {
//   ctx.body = 'test!'
// })

const db = mongoose.connect("mongodb://localhost/testDB")

// 账户的数据库模型
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
var User = mongoose.model('User',UserSchema);

// 新增数据
var user = {
  username: 'ydj',
  password: '123123',
  email: ''
}
var newUser = new User(user);
newUser.save();

router.get('/test', async (ctx, next) => {
	let val = null
	const data = await User.findOne({username: 'ydj'})
	console.log('data', data)
	const result = {
		code:200,
		response: data,
		ts: 12345
	}
	ctx.response.body = result
	return result
})

module.exports = router
