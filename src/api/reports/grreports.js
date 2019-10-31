import request from '@/utils/request'

export function fetchGRReports(params) {
  return request({
    url: '/grreports',
    method: 'get',
    params
  })
}

export function fetchOneGRReport(params) {
  return request({
    url: '/grreports',
    method: 'get',
    params
  })
}
