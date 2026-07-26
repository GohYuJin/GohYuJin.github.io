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
      year: "May 2018 - Aug 2018",
    },
    {
      role: "Computer Vision Engineer",
      name: "DSO National Laboratories",
      year: "Nov 2019 - Aug 2024",
    },
    {
      role: "Machine Learning Engineer Intern",
      name: "Adobe",
      year: "May 2025 - Aug 2025",
    },
    {
      role: "Machine Learning Engineer (AI Agents)",
      name: "Adobe",
      year: "Jan 2026 - Present",
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
          Machine Learning Engineer | Problem Solver | Bboy
        </Typography>
      </section>

      <section id="background-and-experience">
        <Grid container>
          <Grid item xs={12}>
            <Stack
              spacing={{ xs: 3, md: -12 }}
              sx={{
                margin: "2rem 0 1rem",
                alignItems: { xs: "center", md: "flex-end" },
                width: "100%",
              }}
            >
              <Card
                sx={{
                  width: "50vw",
                  maxWidth: "32rem",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  position: "relative",
                  zIndex: 2,
                  "@media screen and (max-width: 900px)": {
                    width: "90vw",
                    maxWidth: "90vw",
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
                  <Typography paragraph>
                    Graduated with a Magna Cum Laude Honours Degree in Information Systems,
                    with a double major in Artificial Intelligence and Business Analytics
                  </Typography>
                  <Typography paragraph>
                    Carnegie Mellon University, Class of 2025
                  </Typography>
                  <Typography>
                    Graduated with a Master of Science in Computer Vision in December 2025
                  </Typography>
                </CardContent>
              </Card>

              <img
                alt="academic"
                src={getImageURL("me/grad-photo.jpg")}
                className={css`
                  height: 78vh;
                  align-self: flex-start;
                  @media screen and (max-width: 900px) {
                    align-self: center;
                    width: 80vw;
                    height: auto;
                  }
                `}
              />

              <Card
                sx={{
                  width: "50vw",
                  maxWidth: "40rem",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  position: "relative",
                  zIndex: 2,
                  "@media screen and (max-width: 900px)": {
                    width: "90vw",
                    maxWidth: "90vw",
                  },
                }}
              >
                <CardContent>
                  <Typography paragraph>
                    My engineering journey began here!
                  </Typography>
                  <Typography paragraph>
                    I studied general engineering for 1 year before selecting
                    Information Systems as my course after realizing my proficiency and interest in programming, instead of my initial choice
                    of Electrical Engineering
                  </Typography>
                  <Typography paragraph>
                    Being a young school, the choice of specialisation in SUTD was
                    limited to either Artificial Intelligence, Game Development, or Security. I realized my
                    passion for artificial intelligence when I worked as a teaching assistant for the
                    Masters of Science in Security by Design under the guidance of Dr. Teoh Teik Toe.
                    I was fascinated by how math was used to develop powerful predictive models
                    and focused my degree towards strengthening my foundations in Artificial Intelligence.
                  </Typography>
                </CardContent>
              </Card>

              <img
                alt="cmu graduation"
                src={getImageURL("me/cmu-grad.jpg")}
                className={css`
                  height: 65vh;
                  align-self: flex-start;
                  @media screen and (max-width: 900px) {
                    align-self: flex-start;
                    width: 70vw;
                    height: auto;
                  }
                `}
              />
              <img
                alt="cmu scs graduation"
                src={getImageURL("me/scs-grad.jpg")}
                className={css`
                  height: 65vh;
                  align-self: flex-start;
                  transform: translateX(19rem);
                  @media screen and (max-width: 900px) {
                    align-self: flex-end;
                    width: 60vw;
                    height: auto;
                    transform: none;
                  }
                `}
              />

              <Card
                sx={{
                  width: "50vw",
                  maxWidth: "40rem",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  position: "relative",
                  zIndex: 2,
                  "@media screen and (max-width: 900px)": {
                    width: "90vw",
                    maxWidth: "90vw",
                  },
                }}
              >
                <CardContent>
                  <Typography paragraph>
                    After several years as a Computer Vision Engineer at DSO National Laboratories, I was
                    exposed to the true breadth of knowledge the field demands: classical image processing,
                    graphics, SLAM, 3D/4D vision, and more. It made me realize a real gap in my foundations, since my
                    undergraduate studies had been heavily focused on machine learning.
                  </Typography>
                  <Typography>
                    This drove me to pursue a Master of Science in Computer Vision at Carnegie Mellon
                    University, where I graduated in December 2025, rounding out my technical foundations
                    across the full breadth of the field.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
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
                  I then moved on to become a computer vision research engineer as I wanted to gain more
                deep technical expertise in developing predictive models, gain a deeper understanding 
		of artificial intelligence technologies and work on unstructured data which I found more challenging.
                </Typography>
                <Typography paragraph>
                  During my Masters, I interned at Adobe from May to August 2025, and returned full-time in
                  January 2026 as a Machine Learning Engineer working on AI agents.
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
                src={getImageURL("me/Deloitte-Intern.jpg")}
                className={css`
                  height: 50vh;
                  margin-right: auto;
                `}
              />
              <img
                alt="work-pictures2"
                src={getImageURL("me/DSO.jpg")}
                className={css`
                height: 50vh;
                margin-right: auto;
                `}
              />
              <img
                alt="work-pictures3"
                src={getImageURL("me/Adobe_intern.jpg")}
                className={css`
                height: 44vh;
                align-self: flex-start;
                `}
              />

              <Card
                sx={{
                  width: "40vw",
                  maxWidth: "36rem",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  position: "relative",
                  zIndex: 2,
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
                src={getImageURL("me/bboy-1.jpg")}
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
                src={getImageURL("me/bboy-2.jpg")}
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
                src={getImageURL("me/bboy-3.jpg")}
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
      <section id="navigate-to-testimonials">
        <NavigateButton
          link="/testimonials"
          overText="Hear from others 👂"
          underText="See my testimonials"
        />
      </section>
    </Container>
  );
}
