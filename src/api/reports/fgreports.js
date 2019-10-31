import request from '@/utils/request'

export function fetchFGReports(params) {
  return request({
    url: '/fgreports',
    method: 'get',
    params
  })
}

export function fetchOneFGReport(params) {
  return request({
    url: '/fgreports',
    method: 'get',
    params
  })
}
