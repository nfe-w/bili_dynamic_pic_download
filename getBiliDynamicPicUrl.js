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
    console.log(error.message)
    throw new Error('解析全url错误')
  }
}

async function getPicUrl(dynamic_id) {
  const url = `https://api.bilibili.com/x/polymer/web-dynamic/v1/detail?id=${dynamic_id}`
  const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Host': 'api.bilibili.com',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'Sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'Referer': 'https://www.bilibili.com/',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  }
  console.log(`url->${url}`)
  const response = await axios.get(url, { headers })
  const responseData = response.data
  const responseDateJson = JSON.stringify(responseData)
  console.log(`response->${responseDateJson}`)
  if (responseData.code !== 0) {
    throw new Error(`b站接口返回异常->${responseDateJson}`)
  }
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
