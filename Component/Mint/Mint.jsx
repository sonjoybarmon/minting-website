import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Mint.module.scss";

const Mint = () => {
  return (
    <div className={styles.mint_wrapper}>
      <Container maxWidth="xl">
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item md={8} sm={12} xs={12}>
            <Card className={styles.mintCard_wrapper}>
              <CardContent>
                <Box className={styles.mint_header_wrapper}>
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="h6"
                    className={styles.mint_title}
                  >
                    Pre-Sale
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="inherit"
                    component="p"
                    className={styles.mint_subtitle}
                  >
                    0x93454616565255534646541
                  </Typography>
                </Box>
                {/* mint image section */}
                <Box className={styles.mint_image_section}>
                  <Grid container spacing={1}>
                    <Grid item md={4} sm={6} xs={12}>
                      <div className={styles.mint_image}>
                        <Image
                          src="/mint4.jpg"
                          alt=""
                          width="500px"
                          height="500px"
                        />

                        <Typography
                          variant="h6"
                          color="primary"
                          component="h6"
                          className={styles.mint_image_title}
                        >
                          <span>0</span> \ 2222
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      item
                      md={2}
                      sm={0}
                      xs={0}
                      sx={{ display: { md: "block", sm: "none" } }}
                    />

                    <Grid item md={6} sm={6} xs={12}>
                      <Stack
                        direction="row"
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        className={styles.mint_button_wrapper}
                      >
                        <Button variant="outlined" color="secondary">
                          +
                        </Button>
                        <Typography variant="h5" color="primary">
                          1
                        </Typography>
                        <Button variant="outlined" color="secondary">
                          -
                        </Button>
                      </Stack>

                      <Typography
                        variant="subtitle2"
                        color="inherit"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginTop: "10px",
                        }}
                      >
                        Max Mint Amount: 5
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        className={styles.mint_total_wrapper}
                      >
                        <Typography variant="h5" color="primary">
                          Total
                        </Typography>

                        <Typography variant="h5" color="primary">
                          0.01 ETH +{" "}
                          <span style={{ color: "#F6E5F8" }}> GAS </span>
                        </Typography>
                      </Stack>

                      <Button
                        variant="contained"
                        color="primary"
                        className={styles.connect_wallet_button}
                      >
                        Connect Wallet
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                {/* Something went wrong  */}
                <Box className={styles.something_wrapper}>
                  <Typography variant="subtitle1" color="inherit" component="p">
                    Something went wrong
                  </Typography>
                </Box>

                {/* Contract Address  */}
                <Box className={styles.contract_address_wrapper}>
                  <Typography variant="h6" color="inherit" component="h6">
                    Contract Address
                  </Typography>
                  <Typography variant="subtitle1" color="inherit" component="p">
                    245145154654612463214665654646465
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Mint;
