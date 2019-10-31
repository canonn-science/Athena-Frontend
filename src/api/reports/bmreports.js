import request from '@/utils/request'

export function fetchBMReports(params) {
  return request({
    url: '/bmreports',
    method: 'get',
    params
  })
}

export function fetchOneBMReport(params) {
  return request({
    url: '/bmreports',
    method: 'get',
    params
  })
}
