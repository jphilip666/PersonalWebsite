import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { FaLocationPin, FaEnvelope, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return <>
    <div className="flex justify-between">
        <div>
            <h1 className="text-2xl font-light text-gray-400">Jestin Philip</h1>
            <h2 className="font-light text-gray-300">Senior Software Engineer & Web Developer</h2>
        </div> 
        <div className="text-xs flex">
            <table>
                <tr>
                    <td className="px-2 align-middle">
                        <FaLocationPin className="pe-3 size-6 text-red-500 inline" /> London, England
                    </td>
                    <td className="align-middle">
                        <a href="mailto:jestin.philip@icloud.com" className="px-2 hover:bg-gray-600 hover:rounded block w-full">
                            <FaEnvelope className="pe-3 size-7 text-yellow-500 inline" />jestin.philip@icloud.com
                        </a>
                    </td>                    
                </tr>
                <tr>
                    <td className="align-middle"> 
                        <a href="https://www.linkedin.com/in/jestin-philip/" className="px-2 hover:bg-gray-600 hover:rounded block w-full">
                            <FaLinkedin className="pe-3 size-7 text-blue-500 inline" />https://www.linkedin.com/in/jestin-philip
                        </a>
                    </td>
                    <td className="align-middle">
                        <a href="https://twitter.com/jphilip777" className="px-2 hover:bg-gray-600 hover:rounded block w-full">
                            <FaXTwitter className="pe-3 size-7 text-white inline" />https://x.com/jphilip777
                        </a>
                    </td>
                </tr>
            </table>
        </div> 
    </div>
    <Separator className="my-4" />
    <div>
        <p>A versatile Senior Software Engineer & Web Developer, specialising in JavaScript (TypeScript, Node.js, React.js), PHP
        (Laravel) and AWS cloud solutions. Adept at clean, maintainable code, CI/CD automation, and Agile/Scrum development.
        Drives innovation, opAmises cloud-native solutions, and mentors teams to deliver high-performance, future-proof
        applications. Passionate about emerging technologies, security best practices (OWASP), and strategic problem-solving.</p>
    </div>   
    <div>
        <h1 className="text-2xl font-light my-5">TECHNICAL EXPERTISE</h1>
        <Table className="w-full">
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Web & Frontend Development</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        Next.js, React.js, Tailwind CSS, Shadcn, Radix, JavaScript (ES6+), TypeScript, HTML, SaaS, Bootstrap 5.0, jQuery
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Backend & APIs</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        Typescript, Javascript, Node.js, Express.js, PHP 5/7/8, Laravel 10, Laminas, RESTful APIs, OAuth, OpenID
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Cloud Technologies</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        AWS (Lambda, DynamoDB, CloudWatch, S3, KMS, Secrets Manager, Fargate, CodeArtifact), Localstack
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">CI/CD & DevOps</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        Github Actions, Docker, Docker Compose, Jenkins, CDK, Infrastructure as Code
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Database Management</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        MySQL, DynamoDB, MariaDB, Prisma ORM, Doctrine ORM, Eloquent ORM
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Security & Authentication</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        Multi-Factor Authentication (MFA), Biometric Authentication, Role-Based Access Control (RBAC), OWASP Top 10, SonarQube, JWT & JWKS secure communications.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Software Development Methodologies</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        Agile, Scrum, SOLID, DRY
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Version Control</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        Git, Gitlab, GitHub, Bitbucket
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Testing & Quality Assurance</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        Jest, Vitest, PHPUnit
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium w-[30%] text-left">Tools</TableCell>
                    <TableCell className="w-[70%] text-left whitespace-normal">
                        Jira, Confluence
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
    <div>
        <h1 className="text-2xl font-light my-5">KEY COMPETENCIES</h1>
        <p>Problem-Solving & Critical Thinking: tackled security vulnerabilities, improving system integrity and user trust.</p>    
    </div> 
  </>;
}