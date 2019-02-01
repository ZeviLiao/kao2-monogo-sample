const router = require("koa-router")()
const mongoose = require("mongoose")

router.prefix("/api")

// router.get('/test', function (ctx, next) {
//   ctx.body = 'test!'
// })

const db = mongoose.connect("mongodb://localhost/testDB")

// 账户的数据库模型
var UserSchema = new mongoose.Schema({
	a: {
		type: 'String'
	},
	b: {
		type: 'Number'
	},
	c: {
		type: 'Boolean'
	},
	d: {
		type: 'Number'
	}
});
var User = mongoose.model('User',UserSchema);

// 新增数据
var user = [{
    "a": "2",
    "b": 2,
    "c": true,
    "d": 3.4
  },
  {
    "a": "3",
    "b": 2,
    "c": true,
    "d": 3.4
  },
  {
    "a": "4",
    "b": 2,
    "c": true,
    "d": 3.4
  },
  {
    "a": "5",
    "b": 2,
    "c": true,
    "d": 3.4
  },
]
// var newUser = new User(user);
// newUser.save();
User.create(user, function (err, jellybean, snickers) {
  if (err) {
      console.log(err)
  }
  else{
      console.log('done')
  }
});

router.get('/test', async (ctx, next) => {
	let val = null
    // const data = await User.remove({})
    const data = {}
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
