import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
    }
]