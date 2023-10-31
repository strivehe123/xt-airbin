import xtRequest from '../request'

export function getEntireRoomList(offset = 0, size = 20) {
  return xtRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size,
    },
  })
}
