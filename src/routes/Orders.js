import React, { useEffect, useState } from "react";
import axios from "axios";

// moment
import moment from "moment";
import "moment/locale/ko";

// redux
import { useSelector } from "react-redux";

// styles
import { OrdersBlock } from "../styles/OrdersStyle";

// material
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

export default function Orders() {
  // useSelector
  const getUserInfo = useSelector((state) => state.isLoginReducer);

  // 테이블 페이징을 위한 state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // 제품 구매 내역 담을 state
  const [productsHistory, setProductsHistory] = useState([]);
  // 거래 내역 id를 담을 변수
  let detailId = "";

  // 전체 거래 내역 API
  const paymentHistoryApi = {
    method: "get",
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/details",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${getUserInfo.accessToken}`,
    },
  };

  useEffect(() => {
    axios(paymentHistoryApi).then((res) => {
      setProductsHistory(res.data);
      console.log(res.data);
    });
  }, []);

  // 테이블 pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleConfirmPurchase = async (e) => {
    detailId = e.target.value;
    // 구매 확정 API
    const detailIdData = JSON.stringify({
      detailId: detailId,
    });
    const paymentConfirmApi = {
      method: "post",
      url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/ok",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.REACT_APP_API_KEY,
        username: "TeamTest",
        Authorization: `Bearer ${getUserInfo.accessToken}`,
      },
      data: detailIdData,
    };
    if (
      window.confirm(
        `'구매 확정' 후에는 '구매 취소'를 할 수 없습니다. 구매 확정 하시겠습니까?`
      )
    ) {
      await axios(paymentConfirmApi).then((res) => console.log(res.data));
    }
    await axios(paymentHistoryApi).then((res) => {
      setProductsHistory(res.data);
    });
  };

  const handleCancelPurchase = async (e) => {
    detailId = e.target.value;
    // 구매 취소 API
    const detailIdData = JSON.stringify({
      detailId: detailId,
    });
    const paymentCancelApi = {
      method: "post",
      url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/cancel",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.REACT_APP_API_KEY,
        username: "TeamTest",
        Authorization: `Bearer ${getUserInfo.accessToken}`,
      },
      data: detailIdData,
    };
    if (
      window.confirm(
        `'구매 취소'시 결제한 사용자 계좌로 금액이 환불됩니다. 구매 취소 하시겠습니까?`
      )
    ) {
      await axios(paymentCancelApi).then((res) => console.log(res.data));
    }
    await axios(paymentHistoryApi).then((res) => {
      setProductsHistory(res.data);
    });
  };
  return (
    <OrdersBlock>
      <h2>구매목록</h2>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: "grey", color: "white" }}>
              <TableCell>번호</TableCell>
              <TableCell>상품정보</TableCell>
              <TableCell align="center">구매일자</TableCell>
              <TableCell align="center">상품금액</TableCell>
              <TableCell align="center">구매확정</TableCell>
              <TableCell align="center">구매취소</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsHistory
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((product, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {page * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="productInfo">
                      <img
                        className="thumbnail"
                        src={product.product.thumbnail}
                        alt="thumbnail"
                      />
                      <div className="productText">
                        <h4>{product.product.title}</h4>
                        <p>{product.product.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    {moment(product.timePaid).format("YYYY-MM-DD hh:mm:ss")}
                  </TableCell>
                  <TableCell align="center">
                    {Number(product.product.price).toLocaleString("ko-KR")}원
                  </TableCell>
                  <TableCell align="center">
                    {product.isCanceled ? (
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={handleConfirmPurchase}
                        type="submit"
                        value={product.detailId}
                        endIcon={<SendIcon />}
                        disabled
                        className="confirmBtn"
                      >
                        구매확정
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={handleConfirmPurchase}
                        type="submit"
                        value={product.detailId}
                        endIcon={<SendIcon />}
                        className="confirmBtn"
                      >
                        구매확정
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {product.done ? (
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={handleCancelPurchase}
                        type="submit"
                        value={product.detailId}
                        endIcon={<DeleteIcon />}
                        disabled
                        className="canceledBtn"
                      >
                        구매취소
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={handleCancelPurchase}
                        type="submit"
                        value={product.detailId}
                        endIcon={<DeleteIcon />}
                        className="canceledBtn"
                      >
                        구매취소
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={productsHistory.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </OrdersBlock>
  );
}
