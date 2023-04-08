import reactSvg from '../../assets/skills_icons/react.svg'
import webpackSvg from '../../assets/skills_icons/webpack.svg'
import javascriptSvg from '../../assets/skills_icons/javascript.svg'
import sassSvg from '../../assets/skills_icons/sass.svg'
import tailwindSvg from '../../assets/skills_icons/tailwind.svg'
import bootstrapSvg from '../../assets/skills_icons/bootstrap.svg'
import nodeSvg from '../../assets/skills_icons/node.svg'
import expressSvg from '../../assets/skills_icons/express.svg'
import javaSvg from '../../assets/skills_icons/java.svg'
import mysqlSvg from '../../assets/skills_icons/mysql.svg'
import pythonSvg from '../../assets/skills_icons/python.svg'
import railsSvg from '../../assets/skills_icons/rails.svg'
import phpSvg from '../../assets/skills_icons/php.svg'
import gitSvg from '../../assets/skills_icons/git.svg'

import Skill from './skill'

const Skills = () => {
    let skillIcons = [
        { image: reactSvg, title: 'react' },
        { image: webpackSvg, title: 'webpack' },
        { image: javascriptSvg, title: 'javascript' },
        { image: tailwindSvg, title: 'tailwind' },
        { image: sassSvg, title: 'sass' },
        { image: bootstrapSvg, title: 'bootstrap' },
        { image: nodeSvg, title: 'node' },
        { image: expressSvg, title: 'express' },
        { image: javaSvg, title: 'java' },
        { image: mysqlSvg, title: 'mysql' },
        { image: pythonSvg, title: 'python' },
        { image: railsSvg, title: 'rails' },
        { image: phpSvg, title: 'php' },
        { image: gitSvg, title: 'git' },
    ]

    let iconComponents = skillIcons.map((icon) => {
        return <Skill icon={icon} key={icon.title} />
    })

    return (
        <div className='grid-in-skills w-full bg-white rounded-lg p-4 relative shadow-md dark:bg-zinc-800'>
            <h2 className='text-xl border-b mb-4 text-slate-800 dark:text-slate-300'>Skills</h2>
            <div className='flex flex-wrap gap-4 justify-center items-center'>{iconComponents}</div>
        </div>
    )
}

export default Skills
