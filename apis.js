let sayo = process.cwd()

const { download_Url } = require("./database/function");
const axios = require("axios");
const cheerio = require("cheerio");
var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
const hx = require('hxz-api')
var thiccysapi = require('textmaker-thiccy')
var fs = require('fs')
const path = require('path');
const {
PlayLinkMP3,
PlayLinkMP4,
PlayAudio,
PlayVideo,
ytSearch
} = require("./database/youtube");

const criador = ["Jerfinho"];
// Nome Do Criador

const key = "jg"
//apikey Das Api's

resposta = { //MSG DE ERRO NO SERVIDOR
    semkey: {
        status: false,
        criador: `${criador}`,
        código: 404,
        mensagem: 
        'Apikey Inesistente teste outra ou compra uma com o meu dono! wa.me/558594034292'
    },
    cdtxt: {
        status: false,
        criador: `${criador}`,
        código: 404,
        mensagem: 
        'ei 🤨 nao achei nenhum texto na url'
    },
    cdimg: {
        status: false,
        criador: `${criador}`,
        código: 404,
        mensagem: 
        'ei 🤨 Nao Achei Nenhum Link De Imagem Na Url'
    },
    error: {
       status: false,
        criador: `${criador}`,
        mensagem: 
        'ops :/ ocorreu um erro no servidor, tente novamente mais tarde'
    }
}

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

///////////
//////////////[ API'S DE DOWNLOADS ]///
///////////

router.all('/download/tiktok', async(req, res, next) => {
cdapikey = req.query.apikey
linkk = req.query.link
if (!linkk) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um link Valido"})
if(!cdapikey) return res.json(resposta.semkey)
if(cdapikey !== key) return res.sendFile(keyinvalida)
let tiktok_link = (`http://lzmods-api.tk/api/medias-sociais/tiktok_v2?link=${linkk}&apikey=lz`)
let buffer = await getBuffer(tiktok_link)
res.type('mp4')
res.send(buffer)
})

/////////
//////////////[ API'S DE CANVAS ]/////
/////////

router.get('/canvas/welcome', async(req, res, next) => {
cdapikey = req.query.apikey
ti = req.query.titulo
no = req.query.nome
pe = req.query.perfil
fu = req.query.fundo
gr = req.query.grupo
if (!ti) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um titulo Valido"})
if (!no) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um nome Valido"})
if (!pe) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um perfil Valido"})
if (!fu) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um fundo Valido"})
if (!gr) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um grupo Valido"})
if(!cdapikey) return res.json(resposta.semkey)
if(cdapikey !== key) return res.sendFile(keyinvalida)
let welcomee = (`https://isyubii.herokuapp.com/welcome?titulo=${ti}&nome=${no}&perfil=${pe}&fundo=${fu}&grupo=${gr}`)
let buffer = await getBuffer(welcomee)
res.type('png')
res.send(buffer)
})

/////////
//////////////[ API'S DE TEXT-PRO ]//////
/////////

router.get('/textpro/marvel', async(req, res, next) => {
apikey = req.query.apikey;
texto1 = req.query.texto1
texto2 = req.query.texto2
if(apikey !== key) return res.json(resposta.semkey)
if (!texto1) return res.json({ status : false, criador : `criador`, mensagem : "Texto 1 Invalido"})
if (!texto1) return res.json({ status : false, criador : `criador`, mensagem : "Texto 2 Invalido"})
thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [texto1, texto2]
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/halloween', async(req, res, next) => {
apikey = req.query.apikey;
texto = req.query.texto
if(apikey !== key) return res.json(resposta.semkey)
if (!texto) return res.json({ status : false, criador : `criador`, mensagem : "Texto 1 Invalido"})
thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html", texto
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

/////////
//////////////[ OUTRAS API'S ]////////////
/////////

router.get('/others/ttp', async(req, res, next) => {
cdapikey = req.query.apikey
txt = req.query.texto
if (!txt) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um texto Valido"})
if(!cdapikey) return res.json(resposta.semkey)
if(cdapikey !== key) return res.sendFile(keyinvalida)
let attp = (`https://isyubii.herokuapp.com/api/ttp?texto=${txt}&apikey=key-free`)
let buffer = await getBuffer(attp)
res.type('webp')
res.send(buffer)
})

router.get('/others/attp', async(req, res, next) => {
cdapikey = req.query.apikey
txt = req.query.texto
if (!txt) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um texto Valido"})
if(!cdapikey) return res.json(resposta.semkey)
if(cdapikey !== key) return res.sendFile(keyinvalida)
let attp = (`https://api.xteam.xyz/attp?file&text=${txt}`)
let buffer = await getBuffer(attp)
res.type('webp')
res.send(buffer)
})

router.all('/others/fazernick', async (req, res) => {
txt = req.query.texto;
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
if (!txt) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto"})
getNicks = await Kibar(`https://isyubii.herokuapp.com/api/fazernick?nome=${txt}&apikey=key-free`)
res.json({
`${getNicks[0]}`,
`${getNicks[1]}`,
`${getNicks[2]}`,
`${getNicks[3]}`,
`${getNicks[4]}`,
`${getNicks[5]}`,
`${getNicks[6]}`,
`${getNicks[7]}`,
`${getNicks[8]}`,
`${getNicks[9]}`,
`${getNicks[10]}`,
`${getNicks[11]}`,
`${getNicks[12]}`,
`${getNicks[13]}`,
`${getNicks[14]}`,
`${getNicks[15]}`,
`${getNicks[16]}`,
`${getNicks[18]}`,
`${getNicks[19]}`,
`${getNicks[20]}`,
`${getNicks[21]}`,
`${getNicks[22]}`,
`${getNicks[23]}`,
`${getNicks[24]}`,
`${getNicks[25]}`,
`${getNicks[26]}`,
`${getNicks[27]}`,
`${getNicks[28]}`,
`${getNicks[29]}`,
`${getNicks[30]}`,
`${getNicks[31]}`,
`${getNicks[32]}`,
`${getNicks[33]}`,
`${getNicks[34]}`
})
})

router.all('/cekapikey', async(req, res, next) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
res.json({
      status: 'ativo',
      creator: `${criador}`,
      apikey: `${apikey}`,
      message: 'APIKEY ATIVA'
})
})

router.all('/loli', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.post('/post/body', async (req, res) => {
res.send(req.body)
})

router.all('*', async (req, res) => {
res.status(404).json({
status:404,
error: 'página não encontrada Ou e Inexiste',
endpoint: req.path
})
})

module.exports = router