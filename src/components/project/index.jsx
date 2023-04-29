// project images
import taskrImg from '@public/assets/project_images/taskr.png'
import castforecastImg from '@public/assets/project_images/castforecast.png'
import welpImg from '@public/assets/project_images/welp.jpg'
import digitalleafIMG from '@public/assets/project_images/digitalleaf.png'

// tool icons
import reactSvg from '@public/assets/skills_icons/react.svg'
import webpackSvg from '@public/assets/skills_icons/webpack.svg'
import javascriptSvg from '@public/assets/skills_icons/javascript.svg'
import sassSvg from '@public/assets/skills_icons/sass.svg'
import tailwindSvg from '@public/assets/skills_icons/tailwind.svg'
import bootstrapSvg from '@public/assets/skills_icons/bootstrap.svg'
import nodeSvg from '@public/assets/skills_icons/node.svg'
import expressSvg from '@public/assets/skills_icons/express.svg'
import mysqlSvg from '@public/assets/skills_icons/mysql.svg'
import phpSvg from '@public/assets/skills_icons/php.svg'

import Project from './project'
import Status from './status'

const Projects = () => {
    let projectList = [
        {
            name: 'Welp',
            image: welpImg,
            imageAlt: 'welp website image',
            skills: [
                { image: phpSvg, alt: 'php' },
                { image: javascriptSvg, alt: 'javascript' },
                { image: sassSvg, alt: 'sass' },
                {
                    image: mysqlSvg,
                    alt: 'mysql',
                },
            ],
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
            skills: [
                { image: nodeSvg, alt: 'node' },
                {
                    image: expressSvg,
                    alt: 'express',
                },
                {
                    image: bootstrapSvg,
                    alt: 'bootstrap',
                },
                {
                    image: mysqlSvg,
                    alt: 'mysql',
                },
            ],
            description: "Managing a project shouldn't be a project itself.",
            live: '',
            code: 'https://github.com/fridaythethirteenth/DigitalLeaf',
            background: 'bg-[#313539]',
            textColor: 'text-slate-300',
        },
        {
            name: 'castforecast',
            image: castforecastImg,
            imageAlt: 'castforecast website image',
            skills: [
                { image: reactSvg, alt: 'react' },
                {
                    image: tailwindSvg,
                    alt: 'tailwindcss',
                },
            ],
            description: "You don't need to be a meteorologist to understand the data.",
            live: 'https://castforecast.netlify.app',
            code: 'https://github.com/syko99/castforecast',
            background: 'bg-sky-200',
            textColor: 'text-black',
        },
        {
            name: 'Taskr',
            image: taskrImg,
            skills: [
                { image: webpackSvg, alt: 'webpack' },
                { image: javascriptSvg, alt: 'javascript' },
                {
                    image: tailwindSvg,
                    alt: 'tailwindcss',
                },
            ],
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
