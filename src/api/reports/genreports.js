import request from '@/utils/request'

export function fetchGENReports(params) {
  return request({
    url: '/genreports',
    method: 'get',
    params
  })
}

export function fetchOneGENReport(params) {
  return request({
    url: '/genreports',
    method: 'get',
    params
  })
}
