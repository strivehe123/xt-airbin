import { styled } from 'styled-components'

export const RoomWrapper = styled.div`
  position: relative;
  padding: 30px 20px;

  .title {
    margin-top: 20px;
    margin-left: 30px;
    font-size: 24px;
    font-weight: 700;
  }
  .list {
    padding: 20px 20px;
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`
