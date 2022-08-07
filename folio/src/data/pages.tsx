import { faCode, faStar, faSuitcase, faTrophy, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Page = {
    name: string,
    icon: IconDefinition,
    url: string
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
        url: "/Hello",
    },
    {
        name: "Honors and Awards",
        icon: faTrophy,
        url: "Hello",
    },
    {
        name: "Recommenations",
        icon: faStar,
        url: "Hello",
    },
]