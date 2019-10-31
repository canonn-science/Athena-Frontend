import request from '@/utils/request'

export function fetchGYReports(params) {
  return request({
    url: '/gyreports',
    method: 'get',
    params
  })
}

export function fetchOneGYReport(params) {
  return request({
    url: '/gyreports',
    method: 'get',
    params
  })
}
