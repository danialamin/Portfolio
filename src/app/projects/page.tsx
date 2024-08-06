import Card from "@/components/Card"

const page = () => {
  const WebDevProjectsData = [
    {
      "imageName": "real estate mrketplace",
      "name": "Real Estate Marketplace",
      "image": "/s1.webp",
      "description": "This user-friendly website empowers you to create, manage, and showcase your real estate listings with ease. Built on the MERN stack (MongoDB, Express, React, Node.js), this platform offers a powerful combination of features and security ",
      "githubLink": "https://github.com/danialamin/Real-Estate-Marketplace-MERN",
      "liveLink": "https://real-estate-marketplace-mern-client.vercel.app/"
    },
    {
      "imageName": "weather app",
      "name": "Weather App",
      "image": "/s2.jpg",
      "description": "This mobile app delivers accurate weather conditions straight to your device, built with cutting-edge technologies: React Native, mongoDB, NodeJS and ExpressJS. I cannot host it as it would require me to pay to google playstore",
      "githubLink": "https://github.com/danialamin/Weather-app-MERN",
      "liveLink": null
    },
    {
      "imageName": "whatsapp",
      "name": "Whatsapp clone",
      "image": "/s3.jpg",
      "description": "This project is a Whatsapp clone created with MongoDB, Express, React 18 and Node 21. Used Pusher to make mongoDB real-time. ",
      "githubLink": "https://github.com/danialamin/Whatsapp-MERN",
      "liveLink": 'https://whatsapp-mern-client-ten.vercel.app/'
    },
    
    {
      "imageName": "netflix-ui clone",
      "name": "Netflix UI clone",
      "image": "/s4.png",
      "description": "A clone of the popular entertainment app Netflix, made using React 18, Tailwind CSS and Firebase. I mainly focused on the UI in this project with a backend to store user accounts and favourite tv shows.",
      "githubLink": 'https://github.com/danialamin/Netflix-UI-clone',
      "liveLink": "https://netflix-ui-clone-jade.vercel.app/"
    },
    {
      "imageName": "tic-tac-toe",
      "name": "Tic Tac Toe",
      "image": "/s5.webp",
      "description": "A simple tic-tac-toe game created for practice. With a beautiful UI and interactive design, it allows two players to have fun.",
      "githubLink": 'https://github.com/danialamin/tic-tac-toe',
      "liveLink": "https://tic-tac-toe-two-navy.vercel.app/"
    },
    {
      "imageName": "linkedin clone",
      "name": "Linkedin Clone",
      "image": "/s6.png",
      "description": "This is a clone of the networking platform Linkedin made using React JS, Firebase and Tailwind CSS. It allows users to connect with each other and share posts. I am actively trying to fix some bugs that will allow me to complete its deployment. ",
      "githubLink": 'https://github.com/danialamin/Linkedin-clone',
      "liveLink": null
    }
  ]

  return (
    <div className="grow flex justify-center text-center">
      <div className="py-[150px] w-[min(100%,1100px)] flex flex-col gap-10 px-3">
        <h1 className="text-[36px]">Recent <span className="text-lightPurple">Projects</span></h1>
        <div className="flex justify-center flex-wrap gap-6">
          {WebDevProjectsData.map((project) => Card(project.imageName, project.name, project.image, project.description, project.githubLink, project.liveLink))}
        </div>
      </div>
    </div>
  )
}

export default page