import { styled } from 'styled-components'

export const SectionTabWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-shrink: 0;
    flex-basis: 120px;
    padding: 14px 16px;
    margin-right: 16px;
    font-size: 16px;
    text-align: center;
    border-radius: 3px;
    border: 0.5px solid #d8d8d8;
    cursor: pointer;
    white-space: nowrap;
    ${(props) => props.theme.mixin.boxShadow};
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondColor};
    }
  }
`
