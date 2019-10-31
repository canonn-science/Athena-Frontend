import request from '@/utils/request'

export function fetchGVReports(params) {
  return request({
    url: '/gvreports',
    method: 'get',
    params
  })
}

export function fetchOneGVReport(params) {
  return request({
    url: '/gvreports',
    method: 'get',
    params
  })
}
