import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faBoltLightning, faHandshake, faHeart, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export const iconList: ReadonlyArray<{iconName: IconDefinition, x: number, y: number}> = [
    {iconName: faHandshake, x: 70, y: 15},
    {iconName: faLightbulb, x: 30, y: 15},
    {iconName: faHeart, x: 50, y: 20},
    {iconName: faFacebook, x: 15, y: 35},
    {iconName: faUserGraduate, x: 85, y: 35},
    {iconName: faBoltLightning, x: 25, y: 50},
    {iconName: faPaintBrush, x: 75, y: 50},
    {iconName: faGithub, x: 10, y: 60},
    {iconName: faDesktop, x: 90, y: 60},
    {iconName: faLaptopCode, x: 20, y: 75},
    {iconName: faPencilRuler, x: 80, y: 75},
    {iconName: faLinkedin, x: 50, y: 80},
    {iconName: faCheckSquare, x: 12, y: 90},
    {iconName: faSuitcase, x: 35, y: 90},
    {iconName: faPalette, x: 65, y: 90},
    {iconName: faBookReader, x: 88, y: 90},
];