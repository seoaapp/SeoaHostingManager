const discord = require('discord.js')
const express = require('express')
const cors = require('cors')

const bot = new discord.Client()
const app = express()
const PORT = 4321

bot.login(process.env.seoaToken)
app.use(cors())

app.get('/infos', (req, res) => {
  console.log('Request: /infos by ' + req.ip)
  res.send({
    username: bot.user.username,
    ping: bot.ping,
    users: bot.users.size,
    servers: bot.guilds.size,
    channels: bot.channels.size
  })
})

app.get('/', (req, res) => {
  res.send('<div style="text-align: center"><h1>404 Not Found</h1><hr />nginx/6.6.6</div>')
})

bot.on('ready', () => {
  app.listen(PORT, () => {
    console.log('Server Ready')
  })
})
