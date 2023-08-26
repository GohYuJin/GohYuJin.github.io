import { css } from "@emotion/css";
import NavigateButton from "components/navigation/NavigateButton";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { getImageURL } from "helpers/getImageURL";

type recommendation = {
  role: string;
  name: string;
  year: string;
  review: string;
  image: string;
  link: string;
};

export default function TestimonialsPage() {
  const recommendationData: recommendation[] = [
    {
      name: "Edwin Franco",
      role: "IEC62443 | NSE4 | Regional Solution Architect at Fortinet",
      year: "August 23, 2018",
      review: "A highly talented individual who is always willing to offer his help to other students. \
              Yu Jin is well versed in various programming languages such as Java, python, C++, C, javascript etc. \
              Yu Jin has helped me in troubleshooting various programming issues throughout my Masters graduate course. \
              Yu Jin is also highly knowledgable about domains on Artificial intelligence and Cyber security \
              and the tools used in them. \
              Yu Jin is a pleasant individual to work with and I highly recommend him for future job prospects.",
      image: "https://media.licdn.com/dms/image/D5603AQEI0CfWFP_hyA/profile-displayphoto-shrink_100_100/0/1680244704807?e=1698278400&v=beta&t=HUd0Vd3QhB8ZiaxPB1YYi45sw-1-hhrFKL1cS8Xz8FM",
      link: "https://www.linkedin.com/in/yu-jin-goh-737939143/details/recommendations/",
    },
    {
      name: "Graeme Chiew",
      role: "CISSP | GCIH | ICS/OT Cybersecurity",
      year: "August 23, 2018",
      review: "Yu Jin is one of the most outstanding, talented individuals I have come across. \
              He’s an extremely fast learner - having mastered java and python before commencing his studies at SUTD,\
              he served the role of a teaching assistant under our common mentor, where he taught \
              Python, Tableau, Java, WEKA and R to a class of Master students. He’s one of the rare people you’d come\
              across that simply excels at every thing he does. \
              Someone you can definitely rely on - an asset to any team!",
      image: "https://media.licdn.com/dms/image/C4D03AQHPIluWwlCnJQ/profile-displayphoto-shrink_100_100/0/1655404958714?e=1698278400&v=beta&t=89aYc1zEfLeq2duyngMfCCzrAK7MRyPgGgDcPPSrdls", 
      link: "https://www.linkedin.com/in/yu-jin-goh-737939143/details/recommendations/",
    },
  ];

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
                    display: 'flex',
                    borderRadius: 3,
                    boxShadow: '1px 2px 9px #141414'
                  }}
                >
                  <CardMedia component="img" sx={{ width: 100, height: 100, borderRadius: 50, marginTop: 5, marginBottom: 5, marginLeft: 2, }} src={item.image} alt="Profile Image" />
                  <CardContent>
                    <Link href={item.link} color="inherit" variant="h6">
                      {item.name}
                    </Link>
                    <Typography fontStyle="italic">
                      {item.role}
                    </Typography>
                    <Typography paragraph marginTop={1} marginBottom={0}>
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
