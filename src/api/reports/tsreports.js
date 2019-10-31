import request from '@/utils/request'

export function fetchTSReports(params) {
  return request({
    url: '/tsreports',
    method: 'get',
    params
  })
}

export function fetchOneTSReport(params) {
  return request({
    url: '/tsreports',
    method: 'get',
    params
  })
}
