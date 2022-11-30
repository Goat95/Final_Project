import React from "react";
import Merchandise from "./Merchandise";
import { DiscountSaleBlock } from "../styles/DiscountSaleStyle";

export default function DiscountSale() {
  return (
    <>
      <DiscountSaleBlock>
        <h3>파격 세일 매물</h3>
        <p className="discountSaleDesc">
          전세보증금 보증료의 경우 보증금 2억원 이하는 80%, 2억원 초과는 70%
          할인, 내년부터는 40% 할인!
        </p>
        <div className="merchandiseBlock">
          <Merchandise />
        </div>
      </DiscountSaleBlock>
    </>
  );
}
