import React, { useEffect, useState } from "react";
import { ProfileBox } from "../styles/ProfileStyle";
import axios from "axios";
import styled from "styled-components";

// styles
import { AccountBlock, MyAccountBlock } from "../styles/AccountStyle";
import { withStyles } from "@mui/material";

// redux
import { AddAccount, DeleteAccount } from "../reducers/accountReducer";
import { useDispatch, useSelector } from "react-redux";

// material
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ViewListIcon from "@mui/icons-material/ViewList";
import Skeleton from "../components/Skeletons";
import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Skeletons from "../components/Skeletons";

const CustomizedTable = styled(Table)``;

const CustomizedTableCell = styled(TableCell)`
  color: white;
`;

export default function Account() {
  // useSelector
  const getUserInfo = useSelector((state) => state.isLoginReducer);
  const dispatch = useDispatch();

  // 계좌 목록을 담을 state
  const [accountList, setAccountList] = useState([]);
  // 은행 목록 조회 data를 담을 state
  const [banksdata, setBanksData] = useState([]);
  // 은행 선택을 위한 state
  const [selected, setSelected] = useState("");
  // 은행 코드를 담을 state
  const [bankcode, setBankCode] = useState("");
  // 은행 계좌 자릿수를 담을 state
  const [digits, setDigits] = useState("");
  // 계좌번호를 담을 state
  const [accountNumber, setAccountNumber] = useState("");
  // 전화번호를 담을 state
  const [phoneNumber, setPhoneNumber] = useState("");
  // 생성된 계좌 id를 담을 변수
  let accountId = "";
  // loading 처리
  const [loading, setLoading] = useState(false);
  // option태그에 value 값이 있는지 확인하기 위한 state
  const [optionvalue, setOptionvalue] = useState(false);

  // 은행 목록 조회 API
  const bankListApi = {
    method: "get",
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${getUserInfo.accessToken}`,
    },
  };

  // 계좌 연결 API
  const data = JSON.stringify({
    bankCode: bankcode,
    accountNumber: accountNumber,
    phoneNumber: phoneNumber,
    signature: true,
  });
  const accountRegisterApi = {
    method: "POST", //통신 방식
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${getUserInfo.accessToken}`,
    },
    data: data,
  };

  // 계좌 목록 및 잔액 조회 API
  const myAccountApi = {
    method: "get",
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${getUserInfo.accessToken}`,
    },
  };

  // MUI styles

  const styles = {
    root: {
      color: "white",
    },
  };

  useEffect(() => {
    axios(myAccountApi).then((res) => {
      setAccountList(res.data.accounts);
    });
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  useEffect(() => {
    axios(bankListApi).then((res) => {
      setBanksData(res.data);
    });
  }, []);

  const handleSelect = (e) => {
    setSelected(e.target.value);
    if (e.target.value === "KB국민은행") {
      setBankCode("004");
      setDigits("'12자리'를 입력해주세요.");
      setOptionvalue(true);
    } else if (e.target.value === "신한은행") {
      setBankCode("088");
      setDigits("'12자리'를 입력해주세요.");
      setOptionvalue(true);
    } else if (e.target.value === "우리은행") {
      setBankCode("020");
      setDigits("'13자리'를 입력해주세요.");
      setOptionvalue(true);
    } else if (e.target.value === "하나은행") {
      setBankCode("081");
      setDigits("'14자리'를 입력해주세요.");
      setOptionvalue(true);
    } else if (e.target.value === "케이뱅크") {
      setBankCode("089");
      setDigits("'12자리'를 입력해주세요.");
      setOptionvalue(true);
    } else if (e.target.value === "카카오뱅크") {
      setBankCode("090");
      setDigits("'13자리'를 입력해주세요.");
      setOptionvalue(true);
    } else if (e.target.value === "NH농협은행") {
      setBankCode("011");
      setDigits("'13자리'를 입력해주세요.");
      setOptionvalue(true);
    } else {
      setOptionvalue(false);
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "accountNumber") {
      setAccountNumber(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios(accountRegisterApi)
      .then((res) => {
        dispatch(AddAccount(res.data));
      })
      .catch((error) => alert(error));
    alert("계좌 등록");
    await axios(myAccountApi).then((res) => {
      setAccountList(res.data.accounts);
    });
    setSelected("은행선택");
    setAccountNumber("");
    setPhoneNumber("");
  };

  const handleDeleteAccount = (e) => {
    setAccountList(
      accountList.filter((account) => account.id !== e.target.value)
    );
    accountId = e.target.value;

    // 계좌 해지 API
    const deleteData = JSON.stringify({
      accountId: accountId,
      signature: true,
    });
    const deleteAccountApi = {
      method: "delete",
      url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.REACT_APP_API_KEY,
        username: "TeamTest",
        Authorization: `Bearer ${getUserInfo.accessToken}`,
      },
      data: deleteData,
    };
    alert("계좌 해지");
    axios(deleteAccountApi).then((res) => {
      dispatch(DeleteAccount());
    });
  };

  return (
    <ProfileBox>
      <AccountBlock>
        <div className="accountTitle">
          <AccountBalanceIcon className="accountIcon" />
          <h2>계좌 등록</h2>
        </div>
        <Divider />
        <br />
        <form onSubmit={onSubmit}>
          <select className="select" onChange={handleSelect} value={selected}>
            <option value="은행선택">-은행선택-</option>
            {banksdata.map((data) => (
              <option value={data.name}>{data.name}</option>
            ))}
          </select>
          <TextField
            required={true}
            id="outlined-basic"
            label="계좌번호"
            variant="outlined"
            name="accountNumber"
            value={accountNumber}
            placeholder={optionvalue ? digits : ""}
            helperText="계좌번호를 '-' 없이 입력하세요."
            onChange={onChange}
          />
          <TextField
            required={true}
            id="outlined-basic"
            label="전화번호"
            variant="outlined"
            name="phoneNumber"
            value={phoneNumber}
            helperText="전화번호를 '-' 없이 입력하세요."
            onChange={onChange}
          />
          <Button
            size="large"
            variant="outlined"
            type="submit"
            endIcon={<SendIcon />}
            className="submitBtn"
          >
            등록
          </Button>
        </form>
      </AccountBlock>
      <MyAccountBlock>
        <div className="accountListTitle">
          <ViewListIcon className="accountListIcon" />
          <h2>내 계좌 목록</h2>
        </div>
        <Divider />
        <br />

        {loading ? (
          <CustomizedTable>
            <TableHead>
              <TableRow>
                <TableCell align="center">번호</TableCell>
                <TableCell align="center">은행이름</TableCell>
                <TableCell align="center">계좌번호</TableCell>
                <TableCell align="center">잔액</TableCell>
                <TableCell align="center">계좌 해지</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountList.map((account, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{account.bankName}</TableCell>
                  <TableCell align="center">{account.accountNumber}</TableCell>
                  <TableCell align="center">
                    {Number(account.balance).toLocaleString("ko-KR")}원
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={handleDeleteAccount}
                      value={account.id}
                      type="submit"
                      endIcon={<DeleteIcon />}
                      className="deleteAccountBtn"
                    >
                      계좌 해지
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </CustomizedTable>
        ) : (
          <Skeletons />
        )}
      </MyAccountBlock>
    </ProfileBox>
  );
}
