import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import CountDown from '../components/Countdown'
import DropdownMenu from '../components/dropdown/DropdownMenu'

const Home: NextPage = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const [timeState, setTimeState] = useState("July 7, 2022")
  const [timeStateText, setTimeStateText] = useState("as aulas acabarem!")

  return (
    <div className="flex flex-col dark:bg-gray-900 items-center justify-center h-screen w-screen overflow-hidden py-2">
      <Head>
        <title>Contador Ferias</title>
        <link rel="icon" href="/logo1-ipc.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center
        text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold select-none dark:text-white px-">
        <h1>Faltam</h1>
        <div className="text-blue-600 dark:text-blue-500 mt-6">
          <CountDown end={timeState}/>
        </div>
        <div className="flex mt-6 items-center justify-center text-center">
          <h1 className="md:flex items-center justify-center text-cente">
            para
            <div className="ml-3">
              <h1
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 hover:bg-blue-600 hover:text-white rounded-2xl cursor-pointer ${menuOpen && "bg-blue-600 text-white"}`}>
                {timeStateText}
              </h1>
              {menuOpen && <DropdownMenu 
                onClick={(timeState, timeStateText) => {
                  setTimeState(timeState)
                  setTimeStateText(timeStateText)
                  setMenuOpen(false)
                }}/>
              }
            </div>
          </h1> 
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t dark:text-white dark:border-gray-800">
        <a
          className="flex items-center justify-center"
          href="https://infinitepower.ml"
          target="_blank"
          rel="noopener noreferrer">
          Powered by
          <p className="font-bold ml-1"> InfinitePower</p>
          <div className="ml-1 w-6 h-6 relative">
            <Image
              src="/logo1-ipc.png" 
              alt="Vercel Logo" 
              layout="fill"/>
          </div>
        </a>
      </footer>
    </div>
  )
}

export default Home