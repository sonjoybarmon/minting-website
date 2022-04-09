import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Home.module.scss";

const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <Container>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item md={4} sm={6} xs={12}>
            <Image
              src="/mint4.jpg"
              alt="nft"
              width="600px"
              height="600px"
              className={styles.about_image}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Box className={styles.about_title_wrapper}>
              <Typography variant="h6" color="primary" component="h6">
                About Our NFT.
              </Typography>
            </Box>
            <Box className={styles.about_des}>
              <Typography variant="p" color="primary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur eligendi, quo officia ut rerum eius blanditiis
                placeat eaque veniam temporibus labore consequuntur debitis,
                sunt qui enim cum ab cupiditate cumque recusandae quidem
                quibusdam quae reiciendis. Optio ducimus mollitia, sapiente
                adipisci soluta sint exercitationem voluptatum ea beatae sequi
                architecto? Voluptates obcaecati dolorum a illo nulla, suscipit
                minima ipsum inventore consequuntur architecto sit odit tempore
                sapiente hic quia deleniti perferendis ullam, nisi qui cum iste?
                Facere alias temporibus fuga quaerat magni praesentium aut,
                voluptas dignissimos illo voluptatum. Modi ad, quas eaque cum
                iste quo minima sint obcaecati atque distinctio porro amet
                consequuntur doloremque mollitia exercitationem incidunt rerum
                quos ex omnis culpa temporibus! Quisquam eaque quaerat deleniti
                magni ratione sit in repellat rerum blanditiis? Dolore
                laudantium, adipisci delectus nostrum nulla accusantium, eos
                deleniti repellendus accusamus, laborum dolor voluptate
                blanditiis vero natus culpa. Aperiam neque autem repudiandae
                culpa corporis error, consectetur odio commodi minus!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
