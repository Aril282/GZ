cmd.on('ghstalk',['githubstalk'],['stalk'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg.from,`Isi Query!\nContoh : .githubstalk Azyansah`,msg)
res = await functions.axios.get(`https://exneph-api.herokuapp.com/api/github/stalk?username=${query}&apikey=ZYY`)
anu = res.data.result
await client.reply(msg,'Tunggu sebentar ya..')
return client.sendText(msg.from, functions.parseResult(anu.user,'Github Stalk'),msg)
},{param:functions.needed('Query')});

cmd.on('igstalk',['igstalk'],['stalk'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg.from,`Isi Query!\nContoh : .igstalk creallizy.xd`,msg)
let res = await functions.axios.get('https://zenzapi.xyz/api/stalker/ig?username='+query+'&apikey=Zacros')
let data = res.data.result
let isi = ` *INSTAGRAM STALK*

• Fullname : ${data.fullname}
• Private : ${data.private}
• Verified : ${data.verified}
• Bio : ${data.bio}

• Follower : ${data.follower}
• Following : ${data.following}
• Video Timeline : ${data.videotimeline}
• Timeline : ${data.timeline}
• Saved Media : ${data.savedmedia}
• Collections : ${data.collections}`
return client.sendMessage(msg.from,(await client.getBuffer(data.profilehd)).buffer,'imageMessage',{ caption: isi, quoted:msg})
},{wait:true,param:functions.needed('Query')});


cmd.on('tiktokstalk',['tiktokstalk'],['stalk'],async(msg,{query,client})=> {
if (!query) return client.sendText(msg.from,`Isi Query!\nContoh : .igstalk creallizy.xd`,msg)
let res = await functions.axios.get('https://zenzapi.xyz/api/stalker/tiktok?username='+query+'&apikey=Zacros')
let data = res.data.result.user
let stats = res.data.result.stats
let isi = ` *TIKTOK STALK*

• Id : ${data.id}
• Unique Id : ${data.uniqueId}
• Nickname : ${data.nickname}
• Create Time : ${data.createTime}
• Verified : ${data.verified}
• Relation : ${data.relation}
• Open Fav : ${data.openFavorit}
• Private Account : ${data.privateAccount}
• Secret : ${data.secret}

*STATS*
• Follower : ${stats.followerCount}
• Following : ${stats.followingCount}
• Heart : ${stats.heart}
• Video : ${stats.videoCount}`
return client.sendMessage(msg.from,(await client.getBuffer(data.avatarLarger)).buffer,'imageMessage',{ caption: isi, quoted:msg})
},{wait:true,param:functions.needed('Query')});

