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
        name: "Blood Alcohol Content Detection Watch",
        innerName: "alcohol-watch",
        shortDescription: "Blood Alcohol Content detection watch designed in SUTD",
        description:
            "Alcohol intoxication can put a person's life at risk. However, many are unable to determine their thresholds while drinking." +
            "The blood alcohol detection watch helps to accurately measure when a person is at risk of alcohol poisoning and drunk driving." +
            "In this project I designed, 3D printed the watch, coded the software and soldered the circuit into a portable and thin form factor."
        ,
        completionDate: "2016",
        teaserSrc: "Watch.jpg",
        previewSrc: "Watch-2.gif",
        otherSrc: [],
        tags: ["Arduino", "Computer Aided Design", "Autodesk Fusion 360", "Hardware", "C Programming"],
        link: "https://github.com/GohYuJin/BAC-Watcher",
    },
    {
        name: "Trash It!",
        innerName: "trash-it",
        shortDescription: "Game developed with Rasberry PI and vibration sensor to encourage recycling",
        description:
            "Game developed to encourage kids to recycle. Users are expected to throw recyclables into a hole from a distance " +
            "where a moving robot will try to block it to increase the difficulty. Scores will be uploaded to social media to encourage competition. " +
            "In this project I developed the GUI application, coded the Raspbeery PI and robot for game logic. "
        ,
        completionDate: "2017",
        teaserSrc: "TrashIt.png",
        previewSrc: "TrashItPoster.jpg",
        otherSrc: [],
        tags: ["Python", "App Development", "Raspberry PI", "Hardware"],
        link: "https://github.com/GohYuJin/TrashIt",
    },
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
        name: "SUTD Events Mobile App",
        innerName: "event-scheduler-app",
        shortDescription: "SUTD Scheduler App that aggregates all events in the school displayed on one app",
        description:
            "SUTD has many events, ranging from school events, club events, workshops, classes and personal events which many students find hard to manage." +
            "Our team created the event scheduler app that crawls weekly information from our school events website, timetable website and co-curricular activites" +
            "to provide an all in one scheduler app. Users can also subscribe to groups and add their own personal events in order to include other activities."
        ,
        completionDate: "2017",
        teaserSrc: "LIFR-1.png",
        previewSrc: "LIFR-1.png",
        otherSrc: [],
        tags: ["Android App", "Java Programming", "Web Scraping"],
        link: "https://github.com/GohYuJin/SUTDApp1D",
    },
    {
        name: "SUTD Chatrooms",
        innerName: "chatrooms",
        shortDescription: "SUTD chatrooms that people can be invited into private groups or join public groups",
        description:
            "This app is developed for students to share school related events and discussions via a chat application. " +
            "People are able to join various discoverable public groups or create their own private groups to interact with. " +
            "Once subscribed to a chat, members will be updated of new messages in the chatroom. Annoucements can be made in the annoucements " +
            "tab of each group to ensure annoucements aren't pushed too far up the chat from incoming messages'. Spam detection was also included" +
            "to block bad actors."
        ,
        completionDate: "2018",
        teaserSrc: "ESCchat-1.png",
        previewSrc: "ESCchat-2.png",
        otherSrc: [],
        tags: ["App Development", "Javascript"],
        link: "https://github.com/GohYuJin/SoftConst-Project",
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
    {
        name: "DSO Reconaissance Bot",
        innerName: "reconaissance-bot",
        shortDescription: "Computer Vision enabled reconaissance robot developed as part of SUTD's industry-capstone project with DSO.",
        description:
            "Counter Terrorism Urban oberations are likely to have high casualty rates as enemies control the element of surprise. " +
            "In our capstone project, we developed a reconaissance robot that is able to be deployed in place of human responders to gain"  +
            "situational awareness. Our robot performs object detection, gunshot localization and semi autonomous pathfinding. " +
            "We trained a YoloV3 network to detect people, faces and objects of interest such as guns and deployed it on the edge. " +
            "This information is sent back to increase situational awareness and perform for facial identification. " +
            "I was in charge of the GUI development and computer vision modules (object detection, facial recognition and localization)"
        ,
        completionDate: "2019",
        teaserSrc: "CapstoneBot.jpg",
        previewSrc: "CapstoneVision-1.png",
        otherSrc: [],
        tags: ["Hardware", "Computer Vision", "App Development"],
        link: "https://github.com/GohYuJin/devastator",
    },


];
