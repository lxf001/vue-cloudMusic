import axios from 'axios'

let baseURL = 'https://xxmusic.applinzi.com/'
let instance = axios.create({
  baseURL
})

const fetch1 = async function (url, data = {}, method = 'get') {
  let config = {
    method,
    url,
    params: method === 'get' ? data : {}
  }
  if (method === 'post') {
    config.data = data
  }
  let res = await instance(config)
  console.log(url, res)
  return res.data
}

const fetch2 = async function (type, id) {
  let res = await axios({
    url: 'https://api.imjad.cn/cloudmusic/',
    params: {
      type,
      id
    }
  })
  console.log(type, res)
  return res.data
}

export const
  getMusic = (url) => fetch1(url),
  getBanner = () => fetch1('banner'),
  getPrivateContent = () => fetch1('personalized/privatecontent'),//独家放送

  getRecommendation = () => fetch1('personalized'),//推荐歌单
  getPlaylist = (limit=6,order='hot')=> fetch1('/top/playlist',{limit,order}),//网友精选歌单,order为new/hot,代表最新/最热
  getHighQuality = (limit = 6, cat = '') => fetch1('top/playlist/highquality', { limit, cat }),//精品歌单，cat值为'华语','欧美','流行','古风'等

  getPlaylistDetail = (id) => fetch1('/playlist/detail', { id }),//歌单详情
  // getPlaylistDetail = (id) => fetch2('playlist',id),

  getMusicUrl = (id) => {//获取url,id为[]
    if(Object.prototype.toString.call(id)==="[object Array]"){
      return fetch1('/music/url', { id: id.join(',') });
    }else{
      return fetch1('/music/url', { id });
    }

  },

  getLyric = (id) => fetch1('lyric', { id }),//获取歌词
  // getLyric = (id) => fetch2('lyric', id),

  getSong = (id) => fetch1('song/detail',{ids:id}),//获取歌曲详情，不包括url

  getRank = (id=1) => fetch1('/top/list',{idx:id}),//获取排行榜

  getSearch = (keywords,type=1,limit=20,offset=0) => fetch1('/search',{keywords,type,limit,offset})
