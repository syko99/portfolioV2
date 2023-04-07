import Project from './project'
import welpImg from '../../assets/project_images/welp.jpg'
import pixelSketcherImg from '../../assets/project_images/pixelSketcher.jpg'
import taskrImg from '../../assets/project_images/taskr.png'
import castforecastImg from '../../assets/project_images/castforecast.png'

const Projects = () => {
    let projectList = [
        {
            name: 'Pixel Sketcher',
            image: pixelSketcherImg,
            description: 'A sketching web application made with HTML, CSS, and Javascript.',
            live: '',
            code: '',
        },
        {
            name: 'Welp',
            image: welpImg,
            description: 'A full-stack review website using PHP, SQL, Javascript, HTML, and CSS.',
            live: '',
            code: '',
        },
        {
            name: 'Taskr',
            image: taskrImg,
            description:
                'The ultimate to-do list app designed to help you organize your life! Say goodbye to traditional paper lists and sticky notes cluttering your desk, our app is all you need to stay organized and productive.',
            live: 'https://taskrapp.netlify.app',
            code: '',
        },
        {
            name: 'Castforecast',
            image: castforecastImg,
            description:
                "You don't need to be a meteorologist to understand the data. With just a few clicks, you can see the forecast for the next few days and get a sense of the overall weather patterns in your area.",
            live: 'https://castforecast.netlify.app',
            code: '',
        },
    ]

    let projectComponents = projectList.reverse().map((project) => {
        return <Project project={project} />
    })

    return (
        <div className='grid-in-projects w-full grid gap-4'>
            {projectComponents}
        </div>
    )
}

export default Projects
