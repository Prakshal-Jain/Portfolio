import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import starkandwayne from '../assets/starkandwayne.png';
import memoryfox from "../assets/memoryfox.png";

export const experiences = [
    {
        company: "Meta",
        role: "Front End Engineer Intern",
        start_date: "May 2022",
        end_date: "Aug 2022",
        description: (
            <ul>
                <li>
                    Gained 91% of the mobile-based customers of the total website visitors by developing and integrating
                    embedded signup flow for the mobile site with the back end application.
                </li>
                <li>
                    Accelerated the company-wide mobile web development process time by 70% by introducing an
                    internal mobile React component library. This boosted the product launch timeline from 7 months to only
                    3.5 months, amplified UI and code consistency, end to end Jest testing, and served code reduction.
                </li>
                <li>
                    Worked closely with UX designers and project managers to refine existing UI, documented suggestions, worked on bug fixes, created hooks for GraphQL API calls, added Flow type checking, and reorganized
                    the existing codebase for a more efficient development process beyond the scope of my intern project.
                </li>
            </ul>
        ),
        logo: <FontAwesomeIcon icon={faFacebook} />,
        background_color: '#0668E1',
        color: '#fff'
    },

    {
        company: "Stark & Wayne",
        role: "Front End Developer Intern",
        start_date: "Jan 2022",
        end_date: "May 2022",
        description: (
            <ul>
                <li>
                    Grew the customer base by 84% within 4 months by developing and launching Genesis UI - a web
                    interface to access deployment status in real-time.
                </li>
                <li>
                    Supervised and led a team of 3 front-end developers to build React components, ensure data security,
                    improve efficiency and maintain software development best practices in an agile life cycle.
                </li>
                <li>
                    Improved customer satisfaction rate to 99% by making recommendations and using the right up-to-date
                    tools to maximize efficiency, incorporating accessibility features, and devising creative solutions to feature requests like QuickView favorite deployments, auto-updates, and so on.
                </li>
            </ul>
        ),
        logo: <img src={starkandwayne} className="vertical-center" style={{ width: '100%' }} />,
        background_color: '#0067ac',
        color: '#fff'
    },

    {
        company: "MemoryFox",
        role: "Software Developer (Front End) Intern",
        start_date: "May 2021",
        end_date: "Aug 2021",
        description: (
            <ul>
                <li>
                    Enhanced user interaction rate by 32.5% and platform’s avg. user time spent by 44% by building efficient
                    algorithms for DOM manipulation, building responsive, reusable, and optimized components in ReactJS, creating REST API endpoints in PHP, presenting daily presentations, communicating about user demands/needs with the marketing team, and implementing solutions.
                </li>
            </ul>
        ),
        logo: <img src={memoryfox} className="vertical-center" style={{ width: '100%' }} />,
        background_color: '#ee4a21',
        color: '#fff'
    },
]