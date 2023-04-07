import Project from './project'

const Projects = () => {
    let projectList = [
        {
            name: 'Pixel Sketcher',
            background: 'bg-pixelSketcher',
            description: 'A sketching web application made with HTML, CSS, and Javascript.',
            live: 'https://syko99.github.io/pixelSketcherPub/',
            code: 'https://github.com/syko99/pixelSketcherPub',
        },
        {
            name: 'Welp',
            background: 'bg-welp',
            description: 'A full-stack review website using PHP, SQL, Javascript, HTML, and CSS.',
            live: 'http://sp-cfsics.metrostate.edu/~ics325fa2227/Group7_Project/index.php',
            code: 'https://github.com/syko99/Welp',
        },
        {
            name: 'castforecast',
            background: 'bg-castforecast',
            description:
                "You don't need to be a meteorologist to understand the data. With just a few clicks, you can see the forecast for the next few days and get a sense of the overall weather patterns in your area.",
            live: 'https://castforecast.netlify.app',
            code: 'https://github.com/syko99/castforecast',
        },
        {
            name: 'Taskr',
            background: 'bg-taskr',
            description:
                'The ultimate to-do list app designed to help you organize your life! Say goodbye to traditional paper lists and sticky notes cluttering your desk, our app is all you need to stay organized and productive.',
            live: 'https://taskrapp.netlify.app',
            code: 'https://github.com/syko99/Taskr',
        },
    ]

    let projectComponents = projectList.reverse().map((project) => {
        return <Project project={project} key={project.name} />
    })

    return (
        <div className='grid-in-projects w-full grid gap-4 shadow-md rounded-lg '>
            {/* <h2 className='text-xl text-slate-800 dark:text-slate-300'>Projects <hr /></h2> */}
            {projectComponents}
        </div>
    )
}

export default Projects
