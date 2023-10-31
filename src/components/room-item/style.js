import { styled } from 'styled-components'

export const RoomWrapper = styled.div`
  width: ${(props) => props.itemwidth};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  margin: 8px 0;
  .inner {
    width: 100%;
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .slide {
      position: relative;
      cursor: pointer;
      &:hover {
        .control {
          display: flex;
        }
      }
      .indicator {
        position: absolute;
        bottom: 30px;
        width: 30%;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 9;
        .dot-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;
          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            &.active {
              height: 8px;
              width: 8px;
              background-color: red;
            }
          }
        }
      }
      .control {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: none;
        justify-content: space-between;

        color: #fff;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }
    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.verifycolor};
    }
    .name {
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .bottom {
      font-size: 12px;
      display: flex;
      align-items: center;
      .anticon {
        margin-right: -6px;
      }
      .count {
        margin: 0 12px;
      }
    }
  }
`
