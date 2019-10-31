import request from '@/utils/request'

export function fetchCSReports(params) {
  return request({
    url: '/csreports',
    method: 'get',
    params
  })
}

export function fetchOneCSReport(params) {
  return request({
    url: '/csreports',
    method: 'get',
    params
  })
}
