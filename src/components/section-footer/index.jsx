import PropTypes from 'prop-types'
import React, { memo } from 'react'
import IconArrow from '@/assets/svg/icon-arrow'
import { SectionFooterWrapper } from './style'
import { useNavigate } from 'react-router-dom'
const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = '显示全部'
  if (name) {
    showMessage = `显示更多${name}房源`
  }
  const navigate = useNavigate()
  function handleClick() {
    navigate('/entire')
  }
  return (
    <SectionFooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="info" onClick={handleClick}>
        <span className="text">{showMessage}</span>
        <IconArrow />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
}

export default SectionFooter
