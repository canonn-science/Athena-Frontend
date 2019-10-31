import request from '@/utils/request'

export function fetchAPReports(params) {
  return request({
    url: '/apreports',
    method: 'get',
    params
  })
}

export function fetchOneAPReport(params) {
  return request({
    url: '/apreports',
    method: 'get',
    params
  })
}
