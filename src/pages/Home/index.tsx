import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import DropZoneComponent from "./DropZone";

const Home = () => {
  return (
    <>
      <Box sx={{bgcolor: "fff"}}>
        <AppBar position="static" >
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src="/logotruong.png" alt="image" height="60px" color="gray"/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ bgcolor: "#ededed",height: "100vh" }}>
        <Container maxWidth="lg">
          <Stack>
            <Box
              sx={{ display: "flex", justifyContent: "center", py: 0, mt: 3 }}
            >
              <Stack direction="row" sx={{mt:1}}>
                {/* <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  Logo
                </IconButton> */}
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight:"bold", margin:"0px" }}>
                  GÁN NHÃN ĐA TẦNG CHO SẢN PHẨM THỜI TRANG
                </Typography>
              </Stack>
            </Box>

            <Box>
              <DropZoneComponent></DropZoneComponent>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
