import React, { memo } from 'react'
import { Pagination } from 'antd'
const EntirePagination = memo((props) => {
  return (
    <div>
      <Pagination total={300} />
    </div>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination
