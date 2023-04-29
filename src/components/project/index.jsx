import taskrImg from '@public/assets/project_images/taskr.png'
import castforecastImg from '@public/assets/project_images/castforecast.png'
import welpImg from '@public/assets/project_images/welp.jpg'
import digitalleafIMG from '@public/assets/project_images/digitalleaf.png'

import Project from './project'
import Status from './status'

const Projects = () => {
    let projectList = [
        {
            name: 'Welp',
            image: welpImg,
            imageAlt: 'welp website image',
            description: 'Review tourist destinations with this Yelp-inspired site.',
            live: 'http://sp-cfsics.metrostate.edu/~ics325fa2227/Group7_Project/index.php',
            code: 'https://github.com/syko99/Welp',
            background: 'bg-[#FEDDBE]',
            textColor: 'text-black',
        },
        {
            name: 'Digital Leaf',
            image: digitalleafIMG,
            imageAlt: 'digital leaf website image',
            description: "Managing a project shouldn't be a project itself.",
            live: '',
            code: 'https://github.com/fridaythethirteenth/DigitalLeaf',
            background: 'bg-[#212529]',
            textColor: 'text-slate-300',
        },
        {
            name: 'castforecast',
            image: castforecastImg,
            imageAlt: 'castforecast website image',
            description: "You don't need to be a meteorologist to understand the data.",
            live: 'https://castforecast.netlify.app',
            code: 'https://github.com/syko99/castforecast',
            background: 'bg-sky-200',
            textColor: 'text-black',
        },
        {
            name: 'Taskr',
            image: taskrImg,
            imageAlt: 'Taskr website image',
            imageRel: 'preload',
            description: 'The ultimate to-do list app.',
            live: 'https://taskrapp.netlify.app',
            code: 'https://github.com/syko99/Taskr',
            background: 'bg-slate-200',
            textColor: 'text-black',
        },
    ]

    let projectComponents = projectList.reverse().map((project) => {
        return <Project project={project} key={project.name} />
    })

    return (
        <div className='grid-in-projects w-full grid gap-4 rounded-lg'>
            <Status />
            {projectComponents}
        </div>
    )
}

export default Projects
