const router = require("koa-router")()

const fs = require("fs")
const path = require("path")
var mongoose = require("mongoose")

router.get("/", async (ctx, next) => {
  // var db = mongoose.connect("mongodb://localhost/mongodb")
  // db.connection.on("error", function(error) {
  //   console.log("数据库连接失败：" + error)
  // })

  // db.connection.on("open", function() {
  //   console.log("数据库连接成功")
  // })

  // db.connection.on("disconnected", function() {
  //   console.log("数据库连接断开")
  // })

  await ctx.render("index", {
    title: "Hello Koa 2!"
  })
})

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string"
})

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  }
})

router.get("/login", async ctx => {
  ctx.body = `
  <form method="POST" action="/login">
      <label>UserName</label>
      <input name="usr" /><br/>
      <button type="submit">submit</button>
    </form>
  `
})

router.post("/login", async ctx => {
  let usr = ctx.request.body.usr
  ctx.body = `<p>Welocome,${usr}!</p>`
})

module.exports = router
