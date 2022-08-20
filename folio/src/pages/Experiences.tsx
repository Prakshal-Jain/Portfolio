import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FlexLayout from '../components/FlexLayout';
import PageContent from '../components/PageContent';
import { experiences } from "../data/experience_list";

const Experiences = () => (
    <FlexLayout direction="vertical">
        <VerticalTimeline lineColor='#5A5A5A'>
            {experiences.map(({ company, role, start_date, end_date, logo, description, background_color, color }, idx) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: background_color, color: color }}
                    contentArrowStyle={{ borderRight: `7px solid  ${background_color}` }}
                    date={`${start_date} - ${end_date}`}
                    iconStyle={{ background: background_color, color: color }}
                    icon={logo}
                    key={`experience-${idx}`}
                >
                    <h3 className="vertical-timeline-element-title">{company}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{role}</h4>
                    {description}
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </FlexLayout>
)

export default Experiences;