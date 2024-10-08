import { css } from "@emotion/css";
import { Avatar, Container, Typography } from "@mui/material";
import NavigateButton from "components/navigation/NavigateButton";
import { getImageURL } from "helpers/getImageURL";

export default function LandingPage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        color: "var(--text-main)",
        minHeight: "78vh",
      }}
    >
      <section
        id="introduction"
        className={css`
          display: flex;
          flex-flow: column;
          justify-content: center;
          margin: 2rem 0 8rem;
          text-align: center;

          @media screen and (max-width: 600px) {
          }
        `}
      >
        <Avatar
          alt="Yu Jin Profile Pic"
          src={getImageURL("Close_up.JPG")}
          sx={{
            margin: "2rem auto 0",
            height: "10rem",
            width: "10rem",
          }}
        />
        <Typography variant="h3" component="h1" margin="auto">
          Goh Yu Jin
        </Typography>
        <Typography variant="h5" margin="auto" component="h2">
          Computer Vision Research Engineer
        </Typography>
      </section>

      <section
        id="quick-intro"
        className={css`
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        `}
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Welcome to my space, where I try to show off stuff I've made during my stay on this Earth -->
          `,
        }}
      ></section>

      <section id="getting-around">
        <NavigateButton
          link="/about"
          overText="Check it out!"
          underText="My interests and hobbies"
        />
      </section>
    </Container>
  );
}
