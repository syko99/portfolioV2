import { useState } from 'react'

//components

import Header from './components/layout/header'
import About from './components/about'
import Work from './components/work'
import Projects from './components/project'

function App() {
  const [lightMode, setLightMode] = useState(true)

  function toggleLightMode() {
      lightMode === true ? setLightMode(false) : setLightMode(true)
  }

  return (
      <div id='colorTheme' className={`${lightMode === true ? '' : 'dark'}`}>
          <div className='flex flex-col bg-slate-100 mx-auto min-h-screen dark:bg-zinc-900'>
              <Header toggleLightMode={toggleLightMode} />
              <main className='flex-grow p-4 max-w-screen-xl mx-auto grid gap-4'>
                <About />
                <Work />
                <Projects />
              </main>
          </div>
      </div>
  )
}

export default App
