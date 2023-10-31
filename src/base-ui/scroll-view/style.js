import { styled } from 'styled-components'

export const ScrollViewWrapper = styled.div`
  position: relative;
  .scroll {
    overflow: hidden;
  }
  .scroll-content {
    padding: 8px 0;
    position: relative;
    display: flex;
    transition: transform 200ms ease;
  }
  .control {
    z-index: 9;
    position: absolute;
    border: 1px solid #eee;
    color: red;
    padding: 5px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    &.left {
      left: -30px;
    }
    &.right {
      right: -30px;
    }
  }
`
