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

const Home = () => {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              Logo
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tên app
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Stack>
            <Box
              sx={{ display: "flex", justifyContent: "center", py: 2, mt: 5 }}
            >
              <Stack direction="row">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  Logo
                </IconButton>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                  Tên appasdf
                </Typography>
              </Stack>
            </Box>

            <Box></Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
