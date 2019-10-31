import request from '@/utils/request'

export function fetchBTReports(params) {
  return request({
    url: '/btreports',
    method: 'get',
    params
  })
}

export function fetchOneBTReport(params) {
  return request({
    url: '/btreports',
    method: 'get',
    params
  })
}
