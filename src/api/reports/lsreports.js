import request from '@/utils/request'

export function fetchLSReports(params) {
  return request({
    url: '/lsreports',
    method: 'get',
    params
  })
}

export function fetchOneLSReport(params) {
  return request({
    url: '/lsreports',
    method: 'get',
    params
  })
}
