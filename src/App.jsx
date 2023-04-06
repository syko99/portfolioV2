import { useState } from 'react'

//components

import Header from './components/layout/header'

function App() {
  const [lightMode, setLightMode] = useState(true)

  function toggleLightMode() {
      lightMode === true ? setLightMode(false) : setLightMode(true)
  }

  return (
      <div id='colorTheme' className={lightMode === true ? '' : 'dark'}>
          <div className='flex flex-col bg-slate-100 mx-auto min-h-screen dark:bg-slate-800'>
              <Header toggleLightMode={toggleLightMode} />
              <main className='flex-grow p-2 max-w-screen-xl mx-auto md:p-4'>

              </main>
          </div>
      </div>
  )
}

export default App
