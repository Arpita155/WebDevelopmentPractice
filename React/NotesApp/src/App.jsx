import React, { use } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import Details from './components/Details'
import CardCreation from './components/CardCreation'
import UseState from './components/UseState'
import PostDetails from './components/PostDetails'
import Counter from './components/Counter'
import AddFruits from './components/AddFruits'
import Form from './components/Form' 
import ConditionalRender from './components/ConditionalRender'
import GenerateRandomNumber from './components/GenerateRandomNumber'
import UseEffectDemo from './components/UseEffectDemo'
import ToDO from './components2/ToDO.jsx'


export default function App() {

  const details = [
    {name : "Arpita",age : 21, city : "Kolkata"},
    {name : "Rudra",age : 21, city : "Kolkata"},
    {name : "Sampa",age : 20, city : "Brrackpore"},
  ]

  const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342"
      }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    }
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478"
      }
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications"
    }
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984"
      }
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers"
    }
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677"
      }
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers"
    }
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889"
      }
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies"
    }
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
      }
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models"
    }
  }
]

const posts = [
  {
    id: 1,
    title: "10 React Tips Every Developer Should Know",
    author: "Sarah Johnson",
    authorAvatar: "https://i.pravatar.cc/50?img=1",
    content: "React hooks have revolutionized how we write components. Here are my top 10 tips for writing cleaner, more maintainable React code...",
    likes: 342,
    comments: 56,
    shares: 28,
    category: "Programming",
    isPublished: true,
    createdAt: "2026-06-20T10:30:00Z",
    tags: ["react", "javascript", "webdev"],
    readTime: 5
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence in 2026",
    author: "Michael Chen",
    authorAvatar: "https://i.pravatar.cc/50?img=2",
    content: "As AI continues to evolve, we're seeing unprecedented advancements in natural language processing and computer vision...",
    likes: 521,
    comments: 89,
    shares: 134,
    category: "Technology",
    isPublished: true,
    createdAt: "2026-06-21T14:20:00Z",
    tags: ["ai", "machinelearning", "future"],
    readTime: 8
  },
  {
    id: 3,
    title: "Healthy Meal Prep Ideas for Busy Professionals",
    author: "Emily Rodriguez",
    authorAvatar: "https://i.pravatar.cc/50?img=3",
    content: "Eating healthy doesn't have to be time-consuming. With these 5 meal prep strategies, you can save hours in the kitchen...",
    likes: 189,
    comments: 34,
    shares: 67,
    category: "Lifestyle",
    isPublished: false,
    createdAt: "2026-06-19T08:45:00Z",
    tags: ["health", "food", "mealprep"],
    readTime: 6
  },
  {
    id: 4,
    title: "Understanding JavaScript Closures",
    author: "James Wilson",
    authorAvatar: "https://i.pravatar.cc/50?img=4",
    content: "Closures are one of the most powerful and misunderstood concepts in JavaScript. Let's break them down with simple examples...",
    likes: 276,
    comments: 43,
    shares: 91,
    category: "Programming",
    isPublished: true,
    createdAt: "2026-06-18T16:10:00Z",
    tags: ["javascript", "programming", "beginners"],
    readTime: 7
  },
  {
    id: 5,
    title: "Top 5 Travel Destinations for Summer 2026",
    author: "Aisha Patel",
    authorAvatar: "https://i.pravatar.cc/50?img=5",
    content: "From the beaches of Bali to the streets of Barcelona, here are the must-visit destinations for your summer vacation...",
    likes: 415,
    comments: 72,
    shares: 203,
    category: "Travel",
    isPublished: true,
    createdAt: "2026-06-17T09:00:00Z",
    tags: ["travel", "summer", "vacation"],
    readTime: 9
  },
  {
    id: 6,
    title: "Getting Started with TypeScript in 2026",
    author: "David Kim",
    authorAvatar: "https://i.pravatar.cc/50?img=6",
    content: "TypeScript has become the standard for large-scale JavaScript applications. Here's why you should adopt it today...",
    likes: 198,
    comments: 31,
    shares: 45,
    category: "Programming",
    isPublished: false,
    createdAt: "2026-06-16T13:30:00Z",
    tags: ["typescript", "javascript", "coding"],
    readTime: 5
  },
  {
    id: 7,
    title: "Mindfulness Techniques for Daily Life",
    author: "Lisa Thompson",
    authorAvatar: "https://i.pravatar.cc/50?img=7",
    content: "In our fast-paced world, mindfulness can be a game-changer. These 7 techniques will help you stay present and reduce stress...",
    likes: 334,
    comments: 58,
    shares: 112,
    category: "Wellness",
    isPublished: true,
    createdAt: "2026-06-15T11:15:00Z",
    tags: ["mindfulness", "wellness", "mentalhealth"],
    readTime: 4
  },
  {
    id: 8,
    title: "Mastering CSS Grid: A Complete Guide",
    author: "Robert Taylor",
    authorAvatar: "https://i.pravatar.cc/50?img=8",
    content: "CSS Grid is a powerful layout system that simplifies complex web designs. Learn how to use it like a pro...",
    likes: 245,
    comments: 39,
    shares: 76,
    category: "Web Design",
    isPublished: true,
    createdAt: "2026-06-14T10:00:00Z",
    tags: ["css", "webdesign", "frontend"],
    readTime: 10
  },
  {
    id: 9,
    title: "The Rise of Remote Work: Lessons Learned",
    author: "Maria Garcia",
    authorAvatar: "https://i.pravatar.cc/50?img=9",
    content: "Three years into the remote work revolution, companies and employees have learned valuable lessons about productivity and work-life balance...",
    likes: 467,
    comments: 83,
    shares: 156,
    category: "Career",
    isPublished: true,
    createdAt: "2026-06-13T07:30:00Z",
    tags: ["remotework", "career", "productivity"],
    readTime: 6
  },
  {
    id: 10,
    title: "Building Your First Mobile App with React Native",
    author: "Alex Turner",
    authorAvatar: "https://i.pravatar.cc/50?img=10",
    content: "React Native allows you to build native mobile apps using JavaScript. Follow this step-by-step tutorial to build your first app...",
    likes: 312,
    comments: 47,
    shares: 88,
    category: "Programming",
    isPublished: false,
    createdAt: "2026-06-12T15:20:00Z",
    tags: ["reactnative", "mobile", "javascript"],
    readTime: 12
  }
];



  let userComponent = []
  // for(let user of details){
  //   userComponent.push( <Details name={user.name} age ={user.age} city={user.city} />)
  // }

  return (
    <div>

        {/* Navber scetion */}
        {/* <Navbar/> */}

        {/* Hero Section */}
        {/* <Hero/> */}

        {/* Search Section */}
        {/* <Searchbar/> */}

        {/* footer section */}
        {/* <Footer/><br /> */}


        {/* Details */}
        {/* <h1 className='text-2xl text-center underline display-flex'>User Details</h1><br />
        <Details name="arpita" age={21} address="kolkata"/>
        <Details name="dip" age={28} address="barrackpore"/>
        <Details name="krishna" age={21} address="delhi"/> */}
        {/* {
          // userComponent
          details.map((user,idx)=>(
            <Details key={idx} name = {user.name} age={user.age} city = {user.city}/>  
          ))

        } */}

        {/* Cards */}
        {/* <h1 className='text-2xl text-center underline display-flex'>Cards</h1><br />
        <div className='flex flex-wrap ml-20 m-3'>
          {
          users.map((user,idx)=>(
            <CardCreation key={idx} name={user.name} username={user.username} email={user.email} street={user.address.street} 
            suite={user.address.suite} city={user.address.city} zipcode={user.address.zipcode} lat={user.address.geo.lat} lng={user.address.geo.lng} />
          ))
        }
        </div> */}


        {/* update output using useState*/}
        {/* <UseState /> */}


        {/* Post Details */}
        {/* <h1 className='text-2xl text-center underline display-flex'>Post Details</h1><br />
        <div className="flex flex-wrap gap-2" >
          {
            posts.map((post,idx)=>(<PostDetails key={idx} post={post}/>))
          }
        </div> */}

        {/* Counter Componenet */}
        {/* <Counter /> */}

        {/* Add Fruits */}
        {/* <AddFruits /> */}

          {/* Form creation */}
        {/* <Form /> */}


          {/* Conditional Rendering  */}
        {/* <ConditionalRender age={21} /> */}


        {/* Generate Random Number */}
          {/* < GenerateRandomNumber /> */}

          {/* < UseEffectDemo /> */}

          <ToDO />
      
    </div>
    
  )
}
