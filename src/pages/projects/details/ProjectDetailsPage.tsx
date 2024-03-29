import { useParams } from "react-router-dom";
import { projectsData } from "data/projects";
import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { css } from "@emotion/css";
import IPhoneCase from "./IPhoneCase";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GridViewIcon from "@mui/icons-material/GridView";
import { ThemedIconButton, ThemedLink } from "components/ThemedComponents";

export default function ProjectDetailsPage() {
  const { name } = useParams();
  const dataIndex = projectsData.findIndex((item) => item.innerName === name);
  const data = dataIndex !== -1 ? projectsData[dataIndex] : null;

  if (!data) {
    return <></>;
  }

  const isMobileProject = data?.tags.includes("Mobile");
  const smoothScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <section
        id="teaser"
        className={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: space-around;
          color: var(--text-main);
          ${isMobileProject && "margin-top: 2rem;"}

          @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        <Box
          sx={{
            marginRight: "1rem",
            borderRadius: "1rem",
          }}
          height="40rem"
          display="flex"
          justifyContent="center"
        >
          {isMobileProject ? (
            <IPhoneCase>
              <img
                src={`${process.env.PUBLIC_URL}/images/${data?.teaserSrc}`}
                alt={`teaser for ${data?.name}`}
                className={css`
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                `}
              />
            </IPhoneCase>
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/${data?.teaserSrc}`}
              alt={`teaser for ${data?.name}`}
              className={css`
                object-fit: contain;
                max-width: 100%;
              `}
            />
          )}
        </Box>
        <article
          className={css`
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            @media screen and (max-width: 600px) {
              margin-bottom: 2rem;
            }
          `}
        >
          <Typography variant="h2" fontWeight={600}>
            {data?.name}
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            {data?.shortDescription}
          </Typography>
        </article>
      </section>

      <section
        id="preview"
        className={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: space-around;
          color: var(--text-main);
          ${isMobileProject && "margin-top: 2rem;"}

          @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            margin-bottom: 2rem;
          }
        `}
      >
        <Box
          sx={{
            marginRight: "1rem",
            borderRadius: "1rem",
          }}
          height="40rem"
          display="flex"
          flex="1"
          justifyContent="center"
        >
          {isMobileProject ? (
            <IPhoneCase>
              <img
                src={`${process.env.PUBLIC_URL}/images/${data?.previewSrc}`}
                alt={`preview for ${data?.name}`}
                className={css`
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                `}
              />
            </IPhoneCase>
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/${data?.previewSrc}`}
              alt={`preview for ${data?.name}`}
              className={css`
                object-fit: contain;
                max-width: 100%;
              `}
            />
          )}
        </Box>

        <article
          className={css`
            width: 80%;
            margin: auto;
          `}
        >
          <Typography variant="body1" paragraph>
            {data?.description}
          </Typography>
          <Typography variant="h6" textTransform="uppercase">
            Completion Date
          </Typography>
          <Typography paragraph>
            {data?.completionDate ?? "Work in progress"}
          </Typography>
          <Typography variant="h6" textTransform="uppercase">
            Tech Stack
          </Typography>
          <Typography paragraph>{data?.tags.join(", ")}</Typography>
          <Button
            sx={{ marginTop: "2rem" }}
            size="large"
            variant="contained"
            endIcon={<ChevronRightIcon />}
            onClick={() => {
                window.location.href = data?.link;
            }}
          >
            Check it out
          </Button>
        </article>
      </section>
      <section id="other-images">
        <Grid container spacing={2}>
          {data?.otherSrc.map((item, index) => (
            <Grid item xs={12} md={6}>
              <img
                className={css`
                  width: 100%;
                `}
                alt={`sample ${index}`}
                src={`${process.env.PUBLIC_URL}/images/${item}`}
              />
            </Grid>
          ))}
        </Grid>
      </section>
      <section
        id="project-navigation"
        className={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div
          id="previous-project"
          className={css`
            flex: 1;
            @media screen and (max-width: 600px) {
              display: none;
            }
          `}
        >
          {dataIndex - 1 > -1 ? (
            <Button
              variant="text"
              sx={{ textTransform: "none" }}
              onClick={smoothScrollUp}
            >
              <ThemedLink
                to={`/projects/${
                  projectsData[dataIndex - 1].innerName
                }`}
              >
                <div
                  className={css`
                    display: flex;
                    align-items: center;
                    text-align: left;
                  `}
                >
                  <ChevronLeftIcon sx={{ marginRight: "1rem" }} />
                  <div>
                    <Typography
                      gutterBottom
                      variant="overline"
                      component="div"
                      marginBottom="-0.5rem"
                    >
                      PREVIOUS PROJECT
                    </Typography>
                    <Typography variant="h5" component="div">
                      {projectsData[dataIndex - 1]?.name}
                    </Typography>
                  </div>
                </div>
              </ThemedLink>
            </Button>
          ) : (
            ""
          )}
        </div>
        <div
          id="project-main"
          className={css`
            flex: 1;
            align-self: center;
            text-align: center;
            @media screen and (max-width: 600px) {
              display: none;
            }
          `}
        >
          <ThemedIconButton>
            <ThemedLink to={`/projects`}>
              <GridViewIcon />
            </ThemedLink>
          </ThemedIconButton>
        </div>
        <div
          id="next-project"
          className={css`
            flex: 1;
            display: flex;
            justify-content: right;
          `}
        >
          {dataIndex + 1 < projectsData.length ? (
            <Button
              variant="text"
              sx={{ textTransform: "none" }}
              onClick={smoothScrollUp}
            >
              <ThemedLink
                to={`/projects/${
                  projectsData[dataIndex + 1].innerName
                }`}
              >
                <div
                  className={css`
                    display: flex;
                    align-items: center;
                    text-align: right;
                  `}
                >
                  <div>
                    <Typography
                      gutterBottom
                      variant="overline"
                      component="div"
                      marginBottom="-0.5rem"
                    >
                      NEXT PROJECT
                    </Typography>
                    <Typography variant="h5" component="div">
                      {projectsData[dataIndex + 1]?.name}
                    </Typography>
                  </div>

                  <ChevronRightIcon sx={{ marginLeft: "1rem" }} />
                </div>
              </ThemedLink>
            </Button>
          ) : (
            ""
          )}
        </div>
      </section>
    </Container>
  );
}
