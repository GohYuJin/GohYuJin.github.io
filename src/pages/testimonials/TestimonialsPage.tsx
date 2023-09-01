import { css } from "@emotion/css";
import NavigateButton from "components/navigation/NavigateButton";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { recommendation, recommendationData } from "data/testimonials";
import { getImageURL } from "helpers/getImageURL";

export default function TestimonialsPage() {

  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "80vh", marginTop: "2rem", color: "var(--text-main)" }}
    >
      <section className={css``}>
        <Typography variant="h3" gutterBottom>
          Testimonials
        </Typography>
      </section>

      <section id="background-and-experience">
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={9}>
            <Stack
              spacing={3}
              sx={{
                margin: "1rem 0 2rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {recommendationData.map((item) => (
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: "80rem",
                    backgroundColor: "var(--bg-card)",
                    color: "var(--text-main)",
                    "@media screen and (max-width: 600px)": {
                      width: "74vw",
                    },
                    borderRadius: 3,
                    boxShadow: '1px 2px 9px #141414'
                  }}
                >
                  <CardHeader
                    avatar={<img
                      alt="academic"
                      src={item.image}
                      className={css`
                        height: 48px;
                        margin-left: auto;
                        border-radius: 50px;
                      `}
                    />}
                    title={
                      <Link href={item.link} color="inherit" variant="h6">
                        {item.name}
                      </Link>
                    }
                    subheader={<Typography fontStyle="italic">
                      {item.role}
                    </Typography>}
                  />
                  <CardContent>
                    <Typography paragraph marginTop={0} marginBottom={0} whiteSpace='pre-line'>
                      {item.review}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </section>

      <section id="navigate-to-projects">
        <NavigateButton
          link="/projects"
          overText="Look deeper 👀"
          underText="See my projects"
        />
      </section>
    </Container>
  );
}
