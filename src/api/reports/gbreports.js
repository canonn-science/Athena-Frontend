import request from '@/utils/request'

export function fetchGBReports(params) {
  return request({
    url: '/gbreports',
    method: 'get',
    params
  })
}

export function fetchOneGBReport(params) {
  return request({
    url: '/gbreports',
    method: 'get',
    params
  })
}
