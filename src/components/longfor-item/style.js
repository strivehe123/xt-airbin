import { styled } from 'styled-components'

export const LongForItemWrapper = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 20%;
  .inner {
    position: relative;
    padding: 8px;
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .cover img {
    width: 100%;
  }
  .bg-cover {
    position: absolute;
    right: 8px;
    left: 8px;
    bottom: 0;
    height: 40%;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
  }
  .info {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    bottom: 20%;
    display: flex;
    color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .city {
      font-size: 18px;
      font-weight: 600;
    }
    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`
