import { css } from "@emotion/css";
import NavigateButton from "components/navigation/NavigateButton";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { getImageURL } from "helpers/getImageURL";

type workExperience = {
  role: string;
  name: string;
  year: string;
};

export default function AboutPage() {
  const workData: workExperience[] = [
    {
      role: "Operational Risk Advisory Intern (Technology & Data)",
      name: "Deloitte & Touche LLP",
      year: "2018",
    },
    {
      role: "Computer Vision Engineer",
      name: "DSO National Laboratories",
      year: "2019 - present",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "80vh", marginTop: "2rem", color: "var(--text-main)" }}
    >
      <section className={css``}>
        <Typography variant="overline" gutterBottom>
          MY INTERESTS AND HOBBIES
        </Typography>

        <Typography variant="h5">I'd like to think of myself as a:</Typography>
        <Typography variant="h3" component="h1">
          Data Scientist | Problem Solver | Bboy
        </Typography>
      </section>

      <section id="background-and-experience">
        <Grid container>
          <Grid item xs={12} md={7} lg={5}>
            <Stack
              spacing={-16}
              sx={{
                margin: "2rem 0 1rem",
                alignItem: "flex-start",
                width: "100%",
              }}
            >
              <img
                alt="academic"
                src={getImageURL("grad-photo.jpg")}
                className={css`
                  height: 60vh;
                  margin-left: auto;
                `}
              />

              <Card
                sx={{
                  width: "50vw",
                  maxWidth: "32rem",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  "@media screen and (max-width: 600px)": {
                    width: "74vw",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    My Academic Background
                  </Typography>
                  <Typography paragraph>
                    Singapore University of Technology and Design, Class of 2019
                  </Typography>
                  <Typography>
                    Graduated with a Magna Cum Laude Honours Degree in Information Systems,
                    with a double major in Artificial Intelligence and Business Analytics
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={7}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Card
              sx={{
                color: "var(--text-main)",
                backgroundColor: "var(--bg-card)",
                width: "100%",
                margin: "0 0 1rem 4rem",
                "@media screen and (max-width: 600px)": {
                  margin: "0",
                },
              }}
            >
              <CardContent>
                <Typography paragraph>
                  My engineering journey began here!
                </Typography>
                <Typography paragraph>
                  I studied general engineering for 1 year before selecting
                  Information Systems as my course instead of my initial choice
                  of Electrical Engineering
                </Typography>
                <Typography paragraph>
                  Being a young school, the choice of specialisation in SUTD was
                  limited to either Data Science, Game Development, or Security. I realized my 
                  passion for data science when I worked as a teaching assistant for the
                  Masters of Science in Security by Design under the guidance of Dr. Teoh Teik Toe.
                  I was fascinated by how math was used to develop powerful predictive models
                  and focused my degree towards strengthening my foundations in Data Science.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Card
              sx={{
                color: "var(--text-main)",
                backgroundColor: "var(--bg-card)",
                width: "100%",
                marginRight: "2rem",
                "@media screen and (max-width: 600px)": {
                  margin: "2rem 0 0",
                },
              }}
            >
              <CardContent>
                <Typography paragraph>
                  I started my professional career as an intern at Deloitte, lucky
                  to get into an amazing team developing a high impact data analytics
                  prototype to assist executives at an Indonesian argicultural conglometrate
                  in decision making.
                </Typography>
                <Typography paragraph>
                  I then moved on to become a computer vision engineer as I wanted to gain more
                deep expertise in developing predictive models, especially from challenging
                unstructured data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={-12}
              sx={{
                margin: "1rem 0 2rem",
                alignItems: "flex-end",
              }}
            >
              <img
                alt="work-pictures"
                src={getImageURL("Deloitte-Intern.jpg")}
                className={css`
                  height: 50vh;
                  margin-right: auto;
                `}
              />
              <img
                alt="work-pictures2"
                src={getImageURL("DSO.jpg")}
                className={css`
                height: 50vh;
                margin-right: auto;
                `}
              />

              <Card
                sx={{
                  width: "40vw",
                  maxWidth: "36rem",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  "@media screen and (max-width: 600px)": {
                    width: "74vw",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    My Work Experience
                  </Typography>
                  <Grid container spacing={2}>
                    {workData.map((item) => (
                      <>
                        <Grid item xs={4} display="flex" alignItems="center">
                          <Typography>{item.role}</Typography>
                        </Grid>
                        <Grid item xs={4} display="flex" alignItems="center">
                          <Typography fontWeight="bold">{item.name}</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          display="flex"
                          alignItems="center"
                          justifyContent="flex-end"
                        >
                          <Typography textAlign="end">{item.year}</Typography>
                        </Grid>
                      </>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card
              sx={{
                width: "88%",
                maxWidth: "32rem",
                backgroundColor: "var(--bg-card)",
                color: "var(--text-main)",
                marginBottom: "-2rem",
                "@media screen and (max-width: 600px)": {
                  width: "74vw",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  I love bboying
                </Typography>
                <Typography paragraph>
                  This dance has been a passion of mine since 2010!
                </Typography>
                <Typography paragraph>
                  It's fun and challenging since it involves working towards
                  executing physically demanding moves, innovating on the spot and musicality.
                </Typography>
                <Typography paragraph>
                  Choreographing and leading a team of bboys is especially challenging as it can take
                  months to learn cool new moves. So putting up a great performance requires
                  understanding and figuring out how to best highlight the strengths of my team
                  which is really fun to me.
                </Typography>
              </CardContent>
            </Card>
            <div
              className={css`
                width: 100%;
                display: flex;
                justify-content: flex-end;
              `}
            >
              <img
                alt="bboy photos"
                src={getImageURL("bboy-1.jpg")}
                className={css`
                  width: 70%;
                  margin-left: auto;
                  @media screen and (max-width: 700px) {
                    width: 100%;
                  }
                `}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <div
              className={css`
                width: 100%;
                display: flex;
                flex-flow: column;
              `}
            >
              <img
                alt="bboy-2"
                src={getImageURL("bboy-2.jpg")}
                className={css`
                  height: 22rem;
                  width: auto;
                  margin: 1rem auto 0;
                  @media screen and (max-width: 600px) {
                    width: 100%;
                    height: auto;
                  }
                `}
              />
              <img
                alt="bboy-3"
                src={getImageURL("bboy-3.jpg")}
                className={css`
                  height: 22rem;
                  width: auto;
                  margin: 1rem auto;
                  @media screen and (max-width: 600px) {
                    width: 100%;
                    height: auto;
                  }
                `}
              />
            </div>
          </Grid>
        </Grid>
      </section>
      {/**
       * todo: add some achievements when I finally do something noteworthy with my life
       **/}
      <section id="navigate-to-projects">
        <NavigateButton
          link="/portfolio/projects"
          overText="Look deeper 👀"
          underText="See my projects"
        />
      </section>
    </Container>
  );
}
