const axios = require('axios')

module.exports = async function (params, context) {
  const shareUrl = params['shareUrl']
  if (!shareUrl) {
    return {
      error: '缺少shareUrl参数',
    }
  }

  console.log(`shareUrl->${shareUrl}`)
  const fullUrl = await getFullURL(shareUrl)
  console.log(`fullUrl->${fullUrl}`)
  const dynamicId = fullUrl.split('?')[0].split('/').pop()
  console.log(`dynamicId->${dynamicId}`)

  const picUrlArray = await getPicUrl(dynamicId)
  return {
    picUrlArray,
  }
}

async function getFullURL(shortURL) {
  try {
    const response = await axios.head(shortURL)
    return response.request.res.responseUrl
  } catch (error) {
    throw new Error('解析全url错误')
  }
}

async function getPicUrl(dynamic_id) {
  const url = `https://api.bilibili.com/x/polymer/web-dynamic/v1/detail?id=${dynamic_id}`
  const headers = {
    accept: 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    cookie: 'l=v;',
    origin: 'https://space.bilibili.com',
    pragma: 'no-cache',
    referer: `https://space.bilibili.com/${dynamic_id}/dynamic`,
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
  }
  const response = await axios.get(url, { headers })
  const responseData = response.data
  let picInfoArray = []
  try {
    picInfoArray = responseData.data.item.modules.module_dynamic.major.draw.items
  } catch (error) {
    throw new Error('动态不包含图片')
  }
  let picUrlArray = []
  if (picInfoArray && picInfoArray.length > 0) {
    picInfoArray.forEach((item) => picUrlArray.push(item.src))
  }
  return picUrlArray
}
