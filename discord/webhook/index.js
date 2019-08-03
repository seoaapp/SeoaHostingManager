const fs = require('fs')
const discord = require('discord.js')
const webhook = new discord.WebhookClient('607112305150525440', process.env.wh_token)

webhook.edit('Seoa Hosting', fs.readFileSync('./img/logo.png'))
     
if (!process.argv[2]) {
  throw Error('Arg Error: Process Not Exist')
}

switch (process.argv[2]) {
  case 'start':
    const startEmb = new discord.RichEmbed()
      .setColor(0xff7de8).setAuthor('Seoa Hosting', 'https://cdn.discordapp.com/attachments/605052179132186635/607113749534343188/profile.png')
      .setTitle('Seoa봇 서비스를 복구 했습니다!').setDescription('이제 Seoa의 기능들을 다시 사용하실 수 있습니다').setFooter('만약 버그를 발견했을경우 @staff에게 알려주세요')
      .setThumbnail('https://cdn.discordapp.com/attachments/605052179132186635/607115547519483904/1.png')
    
    webhook.send('@here', startEmb)
    break;

  case 'stop':
    const stopEmbed = new discord.RichEmbed()
      .setAuthor('Seoa Hosting', 'https://cdn.discordapp.com/attachments/605052179132186635/607113749534343188/profile.png')
      .setThumbnail('https://cdn.discordapp.com/attachments/605052179132186635/607115547519483904/1.png')
      .setFooter('만약 이 메세지가 잘못 보내진것 같다면 PMH Studio / PMH에게 알려주세요')
    
    if (!process.argv[3]) {
      throw Error('Arg Error: Process Not Exist')
    }

    if (process.argv[3] === '130' || process.argv[3] === '0') { // 컨트롤 C로 껐을때
      stopEmbed.setTitle('Seoa봇 서비스가 업데이트로 인해 잠시 중단되었습니다').setDescription('잠시동안 Seoa의 기능이 동작하지 않을 수 있습니다-<@527746745073926145>').setColor(0x00ff00)
    } else { // 에러로 껐을때
      stopEmbed.setTitle('Seoa봇 서비스가 오류로 인해 잠시 중단되었습니다').setDescription('에러코드: ' + process.argv[3] + ', 스텝분들 빠른 복구 부탁드립니다').setColor(0xff0000)
    }

    webhook.send('<@&605027221094137856>', stopEmbed)
    break;

  default:
    throw Error('Arg Error: Process Not Exist')
}

