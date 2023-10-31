import { styled } from 'styled-components'

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  z-index: 999;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    height: 86px;
    .close {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .container {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
    .fade-enter {
      transform: translate(${(props) => (props.isnext ? '100%' : '-100%')});
      opacity: 0;
    }
    .fade-enter-active {
      opacity: 1;
      transform: translate(0);
      transition: all 200ms ease;
    }
    .fade-exit {
      opacity: 1;
    }
    .fade-exit-active {
      opacity: 0;
      transition: all 200ms ease;
    }
  }
  .preview {
    /* display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 10px;
  .info{
    position: absolute;
    bottom: 10px;
    max-width: 105vh;
    .desc{
    display: flex;
    justify-content: space-between;
      .toggle{
      cursor: pointer;
      }
    }
  } */
    margin: 0 auto;
    height: 100px;
    margin-top: 10px;
    width: 1000px;
    color: #fff;
    position: relative;
    .info {
      position: absolute;
      right: 0;
      bottom: ${(props) => (props.showlist ? '79px' : '0')};
      transition: height 400ms ease-out;
      display: flex;
      justify-content: space-between;
    }
    .list {
      position: absolute;
      bottom: 10px;
      transition: height 300ms ease;
      width: 1000px;
      height: ${(props) => (props.showlist ? '67px' : '0')};
      overflow: hidden;
      .item {
        margin-right: 15px;
        cursor: pointer;
        img {
          height: 67px;
          opacity: 0.5;
        }
        &.active {
          img {
            opacity: 1;
          }
        }
      }
    }
  }
`
