import styled from "styled-components";

const mainColor = "#6C5DD3";
const basicColor = "#CCCCCC";

export const ListCardStyle = styled.div`
  .listWrap {
    border: 1px solid ${basicColor};
    border-radius: 15px;
    margin: 15px;
    position: relative;

    .thumbnail {
      width: 300px;
      height: 300px;
      border-radius: 14px 14px 0 0;
    }
    h3 {
      font-size: 24px;
      padding: 10px;
      text-align: center;
      font-weight: 700;
    }
    h4 {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      padding: 10px;
    }
  }
`;
