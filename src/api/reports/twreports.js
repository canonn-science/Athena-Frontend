import request from '@/utils/request'

export function fetchTWReports(params) {
  return request({
    url: '/twreports',
    method: 'get',
    params
  })
}

export function fetchOneTWReport(params) {
  return request({
    url: '/twreports',
    method: 'get',
    params
  })
}
