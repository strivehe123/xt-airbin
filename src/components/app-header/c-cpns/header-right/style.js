import { styled } from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  .btns {
    display: flex;
    color: ${(props) => props.theme.textColor.primaryColor};
    font-size: 14px;
    font-weight: 600;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 12px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    .panel {
      position: absolute;
      top: 60px;
      right: 0;
      width: 240px;

      border-radius: 10px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      .top {
        border-bottom: 1px solid #eee;
      }
      .top,
      .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 10px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
`
