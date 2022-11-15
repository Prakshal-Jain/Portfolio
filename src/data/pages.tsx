import { faCode, faStar, faSuitcase, faUser, IconDefinition, faFile } from "@fortawesome/free-solid-svg-icons";
import resume from "../assets/Prakshal_Resume.pdf";
import recommendation from "../assets/recommendation.pdf"

type Page = {
    name: string,
    icon: IconDefinition,
    url: string,
    isAnchorTag?: boolean
}

export const pages: Page[] = [
    {
        name: "About Me",
        icon: faUser,
        url: "/about",
    },
    {
        name: "Work Experiences",
        icon: faSuitcase,
        url: "/experiences",
    },
    {
        name: "Projects",
        icon: faCode,
        url: "/projects",
    },
    {
        name: "Resume",
        icon: faFile,
        url: resume,
        isAnchorTag: true,
    },
    {
        name: "Recommendation",
        icon: faStar,
        url: recommendation,
        isAnchorTag: true,
    }
    // {
    //     name: "Recommenations",
    //     icon: faStar,
    //     url: "Hello",
    // },
]