import request from '@/utils/request'

export function fetchGSReports(params) {
  return request({
    url: '/gsreports',
    method: 'get',
    params
  })
}

export function fetchOneGSReport(params) {
  return request({
    url: '/gsreports',
    method: 'get',
    params
  })
}
