export type projectData = {
  name: string;
  innerName: string; // internal link for routing

  shortDescription: string;
  description: string;

  completionDate?: string;

  teaserSrc: string; // teaser image
  previewSrc: string; // main preview image
  otherSrc: string[]; // other images for showcasing the project

  tags: string[]; // tech stack used
  link: string; // external link
};

export const projectsData: projectData[] = [
  {
    name: "Whack a mole",
    innerName: "whack-a-mole-mojo",
    shortDescription: "Whack-a-mole game for mojo FPGA using Lucid",
    description:
      "Low level software component for an arcade game (whack a mole), which was built and " +
      "graded during my time in SUTD, complete with a counter.",
    completionDate: "2017",
    teaserSrc: "wam-full-preview.jpg",
    previewSrc: "wam-full-preview.jpg",
    otherSrc: [],
    tags: ["Hardware", "Lucid"],
        link: "https://github.com/GohYuJin/MojoLucidWAM",
  },
  {
    name: "Image Captioning",
    innerName: "image-captioning-deep-learning",
    shortDescription: "Image captioning software with deep learning from SUTD",
    description:
        "Software to caption images using neural networks, using models which were finetuned for " +
        "COCO image captioning starting from Imagenet weights.\n We made architecture design choices based on experience gained from " + 
        "smaller deep learning projects such as Star Trek sentence generation and Pascal VOC classification." +
        "Training was performed over a period of 3 days using AWS EC2 instances optimized for GPU tasks.",
    completionDate: "2019",
    teaserSrc: "DL_Caption_Example.gif",
    previewSrc: "DL_Caption_Example.gif",
    otherSrc: [],
    tags: ["Artificial Intelligence", "Computer Vision", "Natural Language Processing", "Amazon Web Services"],
      link: "https://github.com/GohYuJin/DL_Image_Captioning",
  },
];
