import request from '@/utils/request'

export function fetchFMReports(params) {
  return request({
    url: '/fmreports',
    method: 'get',
    params
  })
}

export function fetchOneFMReport(params) {
  return request({
    url: '/fmreports',
    method: 'get',
    params
  })
}
