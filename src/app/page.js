import Image from "next/image";
import profilepic from './uzair_pic.png';
import githubico from './github-mark-white.svg'
import cosima from './cosima_pfp.jpg'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <Image className="rounded-4xl"
          src={cosima}
          alt="Picture of Uzair Sarvan"
          width={200}
          height={200}
        />
        <div className="flex flex-col">
        <h1 className="text-7xl font-heading ">
          Uzair Sarvan
          </h1>
          <br>
          </br>
          <h2 className="text-2xl  font-text" >
          Aspiring Full Stack Developer🖥️ 
          <br></br>
          Location🗺️:
          📌Cape Town, South Africa 🇿🇦
          </h2>
          <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="Github Icon"
          width={20}
          height={20}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
          alt="Linkedin Icon"
          width={20}
          height={20}
        />
        </div>
        </section>
        
        <div className="">
        <h2 className="text-2xl font-text">
        🥪 Tech Stack
        </h2>
        <h3>
          Programing Languages:
        </h3>
        <div className="grid grid-cols-4 gap-1">
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
          alt="Python Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">Python</p>
        </div>
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">JavaScript</p>
        </div>

        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          alt="Typescript Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">Typescript</p>
        </div>
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
          alt="Kotlin Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">Kotlin</p>
        </div>
        </div>
        <h3>
          Tools and Frameworks:
        </h3>
        <div className="grid grid-cols-4 gap-1">
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
          alt="Node.js Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">Node.js</p>
        </div>
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
          alt="Next.js Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">Next.js</p>
        </div>

        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">React</p>
        </div>
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          alt="Git Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">Git</p>
        </div>
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src={githubico}
          alt="Github Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">Github</p>
        </div>
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          alt="MongoDB Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">MongoDB</p>
        </div>
        <div className="flex items-center p-2 rounded-xl">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
          alt="MySQL Icon"
          width={30}
          height={30}
        />
        <p className="ml-2 mr-1 text-sm font-text">MySQL</p>
        </div>
        </div>
        <div>
        </div>
        </div>
        <h2 className="text-2xl  font-text">
          Projects
        </h2>
        <h2 className="text-2xl  font-text">
          Work Experience
        </h2>
        <h2>
          Intrests and Hobbies 
        </h2>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
