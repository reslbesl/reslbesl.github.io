// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-on-the-fundamental-limits-of-privacy-enhancing-technologies",
        
          title: "On the Fundamental Limits of Privacy-Enhancing Technologies",
        
        description: "Public defence of my PhD thesis",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/phd/";
          
        },
      },{id: "post-privacy-preserving-data-sharing-and-the-european-data-strategy",
        
          title: "Privacy-preserving Data Sharing and the European Data Strategy",
        
        description: "Lecture at the Brussels Privacy Hub Global Summer Academy for Privacy Law 2024",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/brussels/";
          
        },
      },{id: "post-rethinking-data",
        
          title: "Rethinking Data",
        
        description: "Panel discussion at CPDP 2023",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/cpdp/";
          
        },
      },{id: "post-synthetic-data-anonymisation-groundhog-day",
        
          title: "Synthetic Data - Anonymisation Groundhog Day",
        
        description: "The false promise of synthetic data as the holy grail of privacy-preserving data publishing",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/synthetic/";
          
        },
      },{id: "post-analysis-of-the-potential-harms-in-the-luca-tracing-system",
        
          title: "Analysis of the Potential Harms in the LUCA Tracing System",
        
        description: "The risk of targeted surveillance and social stigmatisation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/luca/";
          
        },
      },{id: "post-die-risiken-des-luca-systems",
        
          title: "Die Risiken des LUCA Systems",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/luca-de/";
          
        },
      },{id: "news-invited-talk-at-the-university-of-bern-about-synthetic-data-in-medicine",
          title: 'Invited talk at the University of Bern about synthetic data in medicine.',
          description: "",
          section: "News",},{id: "news-panel-discussion-at-the-venice-privacy-symposium-about-alternative-legal-basis-to-consent",
          title: 'Panel discussion at the Venice Privacy Symposium about alternative legal basis to consent....',
          description: "",
          section: "News",},{id: "news-lecture-at-the-brussels-privacy-hub-global-summer-academy-for-privacy-law-2024-on-privacy-preserving-data-sharing-in-the-context-of-the-european-data-strategy",
          title: 'Lecture at the Brussels Privacy Hub Global Summer Academy for Privacy Law 2024...',
          description: "",
          section: "News",},{id: "news-talk-and-panel-discussion-at-the-synthetic-data-for-ai-conference-organised-by-the-european-commission",
          title: 'Talk and panel discussion at the Synthetic Data for AI Conference organised by...',
          description: "",
          section: "News",},{id: "news-public-defence-of-my-phd-thesis-on-the-fundamental-limits-of-privacy-enhancing-technologies",
          title: 'Public defence of my PhD thesis On the Fundamental Limits of Privacy Enhancing...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-responsible-ai-seminar-at-nokia-bell-labs",
          title: 'Invited talk at the Responsible AI Seminar at Nokia Bell Labs.',
          description: "",
          section: "News",},{id: "news-interview-with-svea-eckert-and-eva-wolfange-on-the-they-talk-tech-podcast-and-for-heise-online-about-privacy-engineering",
          title: 'Interview with Svea Eckert and Eva Wolfange on the “They talk Tech” podcast...',
          description: "",
          section: "News",},{id: "projects-analysis-of-real-world-systems",
          title: 'Analysis of Real-World Systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/analysis_project/";
            },},{id: "projects-system-design",
          title: 'System Design',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/design_project/";
            },},{id: "projects-design-of-evaluation-frameworks",
          title: 'Design of Evaluation Frameworks',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/evaluation_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
