import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function RecentImage() {
  return (
    <ImageList
      cols={2}
      gap={2}
      variant="woven"
      sx={{ width: 1000, height: 450 }}
    >
      {itemData.map((item) => (
        <ImageListItem sx={{ width: 400, height: 350 }} key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={<h5>{item.title}</h5>}
            subtitle={<span style={{ fontSize: "15px" }}> {item.price}</span>}
            position="top"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://storage.doopedia.co.kr/upload/_upload/image4/slide/201710/16/20171016174751715902d47f7b74be0d0358be90c6e069458HBqW/20171016174751715902d47f7b74be0d0358be90c6e069458HBqW.jpg",
    title: "웨스트민스터",
    price: "가격",
  },
  {
    img: "https://www.koreattrack.com/images/63-building-sunset.jpg",
    title: "63빌딩",
    price: "가격",
  },

  {
    img: "https://t1.daumcdn.net/cfile/tistory/2407B44B50EB808728",
    title: "타지마할",
    price: "가격",
  },
  {
    img: "https://watermark.lovepik.com/photo/20211122/large/lovepik-beijings-landmark-tiananmen-square-picture_500714257.jpg",
    title: "천안문",
    price: "가격",
  },
];
