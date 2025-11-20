import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
  return <>
    <div>
        <p>A versatile Senior SoFware Engineer & Web Developer, specialising in JavaScript (TypeScript, Node.js, React.js), PHP
        (Laravel) and AWS cloud soluAons. Adept at clean, maintainable code, CI/CD automaAon, and Agile/Scrum development.
        Drives innovaAon, opAmises cloud-naAve soluAons, and mentors' teams to deliver high-performance, future-proof
        applicaAons. Passionate about emerging technologies, security best pracAces (OWASP), and strategic problem-solving.</p>
    </div>    
    <div>
        <h1 className="text-3xl font-light my-5">TECHNICAL EXPERTISE</h1>
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
                        AWS (Lambda, DynamoDB, CloudWatch, S3, KMS, Secrets Manager, Fargate, CodeAreefact), Localstack
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
        <h1 className="text-3xl font-light my-5">KEY COMPETENCIES</h1>
        <p>Problem-Solving & Critical Thinking: tackled security vulnerabilities, improving system integrity and user trust.</p>    
    </div>
  </>;
}