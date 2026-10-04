const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { args: ['--no-sandbox'] }
});

client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('البوت اشتغل يا سيد ✅');
});

client.on('message', msg => {
  if(msg.body == 'سلام') {
    msg.reply('وعليكم السلام انا بوت سيد 😎');
  }
});

client.initialize();
