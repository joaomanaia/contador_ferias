import { useEffect, useState } from "react"
import Head from 'next/head'

type CountdownType = {
    end: string
}

export default function CountDown({end}: CountdownType) {
    const [timeLeft, setTimeLeft] = useState<CountdownValueType>(
        {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    )
    useEffect(() => {
        // subcribing the interval
        const interval: NodeJS.Timer = setInterval(() => {
          const output = getCountDown(end)
          if (!output) {
            // eslint-disable-next-line no-console
            console.error(`given end date(${end}) is not correct! or outdated`)
    
            // unsubcribing the interval if operation failed
            return clearInterval(interval)
          }
          return setTimeLeft(output)
        }, 1000);
    
        // unsubcribing the interval while signout
        return () => clearInterval(interval)
    }, [end])

    if (!timeLeft) return <div/>

    return (
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 items-center justify-center">
        <Head>
            <title>Faltam {timeLeft.days} dias</title>
        </Head>
        <div className="flex space-x-3">
            <p>{timeLeft.days}</p>
            <p>dias</p>
        </div>
        <div className="flex space-x-3">
            <p>{timeLeft.hours}</p>
            <p>horas</p>
        </div>
        <div className="flex space-x-3">
            <p>{timeLeft.minutes}</p>
            <p>minutos</p>
        </div>
        <p>e</p>
        <div className="flex space-x-3">
            <p>{timeLeft.seconds}</p>
            <p>segundos</p>
        </div>
      </div>
    )
}

type CountdownValueType = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

function getCountDown(end: string): CountdownValueType {
    // Get today's date and time
    const countDownDate = new Date(end).getTime()
    if (!countDownDate) return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }
    const now = new Date().getTime()
  
    // Find the distance between now and the count down date
    const distance = countDownDate - now
  
    if (distance <= 0) return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }
  
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
    return {  
        days,
        hours,
        minutes,
        seconds,
    };
}