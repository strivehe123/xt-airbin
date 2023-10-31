import { styled } from 'styled-components'

export const DetailPictureWrapper = styled.div`
  position: relative;
  .pictures {
    display: flex;

    margin: 0 auto;
    .left {
      box-sizing: border-box;
      border-right: 1px solid #000;
      width: 50%;
      overflow: hidden;
      img {
        width: 100%;
        object-fit: cover;
        &:hover {
          transform: scale(1.1);
        }
        transition: all ease 200ms;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      .item {
        position: relative;
        width: 50%;
        box-sizing: border-box;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
        flex-shrink: 0;
        overflow: hidden;
        img {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          &:hover {
            transform: scale(1.1);
          }
          transition: all ease 200ms;
        }
      }
    }
  }
  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`
