import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary" style={{ color: "white" }}>
        매물 보러 가기
      </Button>
      <Button variant="contained" color="success"></Button>
      <Button variant="outlined" color="error">
        다른 할인 이벤트
      </Button>
    </Stack>
  );
}
