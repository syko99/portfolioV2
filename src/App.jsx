import { useState } from 'react'

//components

import Header from './components/layout/header'
import Footer from './components/layout/footer'
import About from './components/about'
import Work from './components/work'
import Projects from './components/project'
import Skills from './components/skills'

function App() {
    const [lightMode, setLightMode] = useState(getLightModeSession() === 'true')

    function toggleLightMode() {
        lightMode == true ? setLightMode(false) : setLightMode(true)
        updateLightModeSession()
    }

    function getLightModeSession() {
        if (sessionStorage.getItem('mode') === null) {
            sessionStorage.setItem('mode', 'true')
        }
        return sessionStorage.getItem('mode')
    }

    function updateLightModeSession() {
        sessionStorage.getItem('mode') === 'true'
            ? sessionStorage.setItem('mode', 'false')
            : sessionStorage.setItem('mode', 'true')
    }

    return (
        <div id='colorTheme' className={`${lightMode === true ? '' : 'dark'}`}>
            <div className='flex flex-col bg-zinc-100 mx-auto min-h-screen dark:bg-zinc-950'>
                <Header toggleLightMode={toggleLightMode} />
                <main className='flex-grow p-4 max-w-screen-2xl mx-auto relative grid gap-4 grid-areas-mobile sm:grid-areas-tablet lg:grid-areas-desktop lg:grid-rows-desktop lg:grid-cols-desktop 2xl:grid-cols-desktop-wide'>
                    <About />
                    <Work />
                    <Skills />
                    <Projects />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default App
