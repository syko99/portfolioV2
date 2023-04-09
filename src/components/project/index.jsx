import taskrImg from  '@public/assets/project_images/taskr.png'
import castforecastImg from  '@public/assets/project_images/castforecast.png'
import welpImg from  '@public/assets/project_images/welp.jpg'
import pixelSketcherImg from  '@public/assets/project_images/pixelSketcher.jpg'

import Project from './project'

const Projects = () => {
    let projectList = [
        {
            name: 'Pixel Sketcher',
            image: pixelSketcherImg,
            description: 'Let your pixelated imaginations free.',
            live: 'https://syko99.github.io/pixelSketcherPub/',
            code: 'https://github.com/syko99/pixelSketcherPub',
            background: 'bg-[#33323A]',
            textColor: 'text-white',
            accentColor: 'white'
        },
        {
            name: 'Welp',
            image: welpImg,
            description: 'Review tourist destinations with this Yelp-inspired site.',
            live: 'http://sp-cfsics.metrostate.edu/~ics325fa2227/Group7_Project/index.php',
            code: 'https://github.com/syko99/Welp',
            background: 'bg-[#FEDDBE]',
            textColor: 'text-black',
            accentColor: 'black'
        },
        {
            name: 'castforecast',
            image: castforecastImg,
            description:
                "You don't need to be a meteorologist to understand the data.",
            live: 'https://castforecast.netlify.app',
            code: 'https://github.com/syko99/castforecast',
            background: 'bg-sky-200',
            textColor: 'text-black',
            accentColor: 'black'
        },
        {
            name: 'Taskr',
            image: taskrImg,
            description:
                'The ultimate to-do list app.',
            live: 'https://taskrapp.netlify.app',
            code: 'https://github.com/syko99/Taskr',
            background: 'bg-slate-200',
            textColor: 'text-black',
            accentColor: 'black'
        },
    ]

    let projectComponents = projectList.reverse().map((project) => {
        return <Project project={project} key={project.name} />
    })

    return (
        <div className='grid-in-projects w-full grid gap-4 rounded-lg'>
            {projectComponents}
        </div>
    )
}

export default Projects
