import { request } from '../../utils/request'

export function sendEmail (data) {
  return request({
    method: 'post',
    url: 'https://formspree.io/xxxxxxxxxxxxxxxxx', // 此处替换成自己的form's endpoint
    data: data
  })
}
