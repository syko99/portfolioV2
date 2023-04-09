import reactSvg from '@public/assets/skills_icons/react.svg'
import webpackSvg from '@public/assets/skills_icons/webpack.svg'
import javascriptSvg from '@public/assets/skills_icons/javascript.svg'
import sassSvg from '@public/assets/skills_icons/sass.svg'
import tailwindSvg from '@public/assets/skills_icons/tailwind.svg'
import bootstrapSvg from '@public/assets/skills_icons/bootstrap.svg'
import nodeSvg from '@public/assets/skills_icons/node.svg'
import expressSvg from '@public/assets/skills_icons/express.svg'
import javaSvg from '@public/assets/skills_icons/java.svg'
import mysqlSvg from '@public/assets/skills_icons/mysql.svg'
import pythonSvg from '@public/assets/skills_icons/python.svg'
import railsSvg from '@public/assets/skills_icons/rails.svg'
import phpSvg from '@public/assets/skills_icons/php.svg'
import gitSvg from '@public/assets/skills_icons/git.svg'

import '../shared_styles/index.css'

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
        <div className='grid-in-skills w-full bg-white rounded-lg p-4 relative shadow-md overflow-hidden dark:shadow-[inset_0_0_2rem_0] dark:shadow-zinc-800 dark:bg-zinc-900 dark:hover-glow-pixel'>
            <h2 className='text-xl border-b mb-4 text-slate-800 dark:text-slate-300'>Skills</h2>
            <div className='flex flex-wrap gap-4 justify-center items-center'>{iconComponents}</div>
            <div id='skills' className='absolute -top-1/4' aria-hidden='true'></div>
        </div>
    )
}

export default Skills
