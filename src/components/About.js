
import '../assets/styles/about.css';

import MeNow from '../assets/utility components/currentMe';
import ContactMe from '../assets/utility components/contacts';
import Profession from '../assets/utility components/professional';


const eduHistory = [
    {
        'institution': 'Faith Primary School',
        'period': '1998 - 2004',
        'subject': 'PLE',
        'award': 'PLE Certificate',
    },
    {
        'institution': 'Hilton High School',
        'period': '2005 - 2008',
        'subject': 'O-Level',
        'award': 'UCE Certificate',
    },
    {
        'institution': 'Hilton High School',
        'period': '2009 - 2010',
        'subject': 'A-Level ',
        'award': 'UACE Certificate',
    },
    {
        'institution': 'Makerere University',
        'period': '2011 - 2016',
        'subject': 'Bsc. Industrial Chemistry',
        'award': 'Bachelors Degree',
    },
    {
        'institution': 'University of the People',
        'period': '2022 - Present',
        'subject': 'Asc. Computer Science',
        'award': 'Ongoing',
    }
]

const workHistory = [
    {
        'institution': 'K1 Media School',
        'period': '2010-2011',
        'where': 'Luzira',
        'role': 'Chemistry & Biology Tutor',
    },
    {
        'institution': 'SDA Church Kyambogo',
        'period': '2016',
        'where': 'Kyambogo University',
        'role': 'Alternative Health Trainer',
    },
    {
        'institution': 'Government Analytical Labs',
        'period': '2016',
        'where': 'Wandegeya',
        'role': 'Water Quality Analyst',
    },
    {
        'institution': 'Avvento Media',
        'period': '2017 - 2019',
        'where': 'Nansana',
        'role': 'Video Production Manager',
    },   
    {
        'institution': 'Maganjo Millers (Ark water)',
        'period': '2019',
        'role': 'Water Quality Analyst',
    },
    {
        'institution': 'Nansana Education Centre',
        'period': '2022',
        'where': 'Nansan',
        'role': 'Maths & Physics Tutor',
    },
    {
        'institution': 'Ebenezer Junior School',
        'period': '2022-2023',
        'where': 'Mpererwe',
        'role': 'Teacher - English/Math',
    },
];

function About(){

    return(
        <div>
           <MeNow/>
           <ContactMe/>
           <Profession eduData = {eduHistory} workData = {workHistory}/>
        </div>
    )

}
export default About;