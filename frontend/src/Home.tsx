import { FaLocationPin, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return <>
    <div className="flex flex-col md:flex-row justify-between">
        <div className="mr-2 mb-2 md:mb-0">
            <h1 className="text-2xl font-light text-gray-400">Jestin Philip</h1>
            <h2 className="font-light text-gray-300">Senior Software Engineer & Web Developer</h2>
        </div> 
        <div className="text-xs flex flex-wrap sm:w-88 md:w-97">
            <div className="px-2 align-middle grow">
                <FaLocationPin className="pe-3 size-6 text-red-500 inline" /> London, England
            </div>
            <div className="align-middle grow">
                <a href="mailto:jestin.philip@icloud.com" className="px-2 hover:bg-gray-600 hover:rounded block w-full">
                    <FaEnvelope className="pe-3 size-7 text-yellow-500 inline" />jestin.philip@icloud.com
                </a>
            </div> 
            <div className="align-middle grow"> 
                <a href="https://www.linkedin.com/in/jestin-philip/" className="px-2 hover:bg-gray-600 hover:rounded block w-full">
                    <FaLinkedin className="pe-3 size-7 text-blue-500 inline" />https://www.linkedin.com/in/jestin-philip
                </a>
            </div>
        </div> 
    </div>
    <Separator className="my-4 bg-gray-400"/>
    <div>
        <p>A versatile Senior Software Engineer and Web Developer specialising in JavaScript (TypeScript, Node.js, React.js), PHP (Laravel), and AWS cloud solutions. Skilled in writing clean, maintainable code, implementing CI/CD automation, and working within Agile/Scrum environments. Drives innovation, optimises cloud-native architectures, and mentors teams to deliver high-performance, future-ready applications. Passionate about emerging technologies, security best practices (OWASP), and strategic problem-solving.</p>
    </div>   
    <div>   
        <h1 className="text-2xl font-light my-5">TECHNICAL EXPERTISE</h1>
        <div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">Web & Frontend Development</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    Next.js, React.js, Tailwind CSS, Shadcn, Radix, JavaScript (ES6+), TypeScript, HTML, SaaS, Bootstrap 5.0, jQuery
                </div>
            </div>            
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">Backend & APIs</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    Typescript, Javascript, Node.js, Express.js, PHP 5/7/8, Laravel 10, Laminas, RESTful APIs, OAuth, OpenID
                </div>
            </div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">Cloud Technologies</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    AWS (Lambda, DynamoDB, CloudWatch, S3, KMS, Secrets Manager, Fargate, CodeArtifact), Localstack
                </div>
            </div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">CI/CD & DevOps</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    Github Actions, Docker, Docker Compose, Jenkins, CDK, Infrastructure as Code
                </div>
            </div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">Database Management</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    MySQL, DynamoDB, MariaDB, Prisma ORM, Doctrine ORM, Eloquent ORM
                </div>
            </div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">Security & Authentication</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    Multi-Factor Authentication (MFA), Biometric Authentication, Role-Based Access Control (RBAC), OWASP Top 10, SonarQube, JWT & JWKS secure communications.
                </div>
            </div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">Software Development Methodologies</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    Agile, Scrum, SOLID, DRY
                </div>
            </div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">Version Control</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    Git, Gitlab, GitHub, Bitbucket
                </div>
            </div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row md:border-b md:border-b-gray-400">
                <div className="font-medium text-left border-b border-b-gray-400 pb-2 md:border-b-0 md:w-[30%] md:mr-4">Testing & Quality Assurance</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    Jest, Vitest, PHPUnit
                </div>
            </div>
            <div className="pb-2 mb-2 flex flex-col md:flex-row">
                <div className="font-medium text-left mr-4 md:w-[30%]">Tools</div>
                <div className="text-left whitespace-normal md:w-[70%]">
                    Jira, Confluence
                </div>
            </div>
        </div>
    </div>
    <div> 
        <h1 className="text-2xl font-light my-5">KEY COMPETENCIES</h1>
        <p>Problem-Solving & Critical Thinking: tackled security vulnerabilities, improving system integrity and user trust.</p>    
    </div>
  </>;
}