export default class DataService {
  _data = {
    projectRepo: 'https://github.com/JP-Rockpile',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! My name is Jeremy, thanks for visiting my site! I am a Software Engineer based in Los Angeles. For the last few years I have worked as a Full Stack developer creating Healthcare Systems and Financial Technology.",
            "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development and design, I think I would be a valuable asset to your project.",
            'I mainly work in the Java / Angular technology stack, but I am well versed in other technologies as well. In my free time I really enjoy coding in Python, Node.js and Swift. My primary areas of interest are FinTech, Machine Learning, Big Data, and Sports.',
            'When I am not at my desk staring at my computer screen, I enjoy skiing, running, yoga and exploring the outdoors.',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://docs.google.com/document/d/1aHhjOqs4ZcwzL7MEuombQ1lTSXzGthuT/edit?usp=sharing&ouid=103121153839738711761&rtpof=true&sd=true',
          workExperience: [
            {
              jobTitle: 'Software Engineer',
              company: 'Optum',
              location: 'Remote',
              period: 'July 2022 – PRESENT',
              accomplishments: [
                'Led successful data migration of over 30 million individual records from legacy to modernized database systems using Java Spring Boot applications and programs.',
                'Enhanced UI interfaces and features for patient and care provider software, contributing to improved user experience',
                'Ensured high quality of standards in unit testing and performance testing for all code written',
                'Increased the performance of existing app by applying code and database design best practices',
                'Expanded the overall project’s unit tests coverage from 30% to 85%. Started applying integration tests',
                'Technologies used: Java, Angular, Kubernetes, Postgres SQL, GCP, Azure, Docker',
              ],
            },
            {
              jobTitle: 'Associate Full Stack Developer',
              company: 'InfoSys',
              location: 'Remote',
              period: 'September 2021 – July 2022',
              accomplishments: [
                'Contributed to multiple projects, collaborating within teams of 4 to 25 members, to build Java Full Stack applications using Java, Spring Boot, Angular, PostgreSQL, MySQL, JDBC, and other technologies',
                'Key contributor to the development of secure financial transaction features printed on the Blockchain using Ethereum Smart Contract technology.',
                'Integrated formulas in Java and SQL to pull data from three databases and send JSON objects to the front end using APIs',
                'Technologies used: Java, Angular, Postgres SQL, AWS',
              ],
            },
          ],
          education: [
            {
              credit: 'Full Stack Development with MERN',
              place: 'MIT xPRO',
              gpa: '',
              period: 'Issued Jan 2022',
            },
            {
              credit: 'B.S.',
              place: 'University of Southern California',
              gpa: '3.8/4.0 GPA',
              period: '2015 – 2018',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Java',
              progress: 100,
            },
            {
              name: 'Typescript',
              progress: 100,
            },
            {
              name: 'Angular',
              progress: 100,
            },
            {
              name: 'Node.js',
              progress: 90,
            },
            {
              name: 'SQL',
              progress: 90,
            },
            {
              name: 'React',
              progress: 80,
            },
            {
              name: 'Swift and SwiftUI',
              progress: 70,
            },
            {
              name: 'AWS/Azure',
              progress: 70,
            },
            {
              name: 'Python',
              progress: 60,
            },
            {
              name: 'Kubernetes',
              progress: 50,
            },
          ],
          soft: 'Leadership, Effective Communication, Analytical Thinking, Teamwork, Creative Problem Solving, Entrepreneurship',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you would like to get in contact with me, feel free to email me at ',
          email: 'jpsteinhafel@gmail.com',
          socialText: 'Or you can reach me through the various social media links on this site.',
          social: [
            {
              name: '',
              link: '',
            },
            {
              name: '',
              link: '',
            },
            {
              name: '',
              link: '',
            },
            {
              name: '',
              link: '',
            },
            {
              name: '',
              link: '',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
