import request from '@/utils/request'

export function fetchTBReports(params) {
  return request({
    url: '/tbreports',
    method: 'get',
    params
  })
}

export function fetchOneTBReport(params) {
  return request({
    url: '/tbreports',
    method: 'get',
    params
  })
}
