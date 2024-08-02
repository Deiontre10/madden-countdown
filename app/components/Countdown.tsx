import { useState, useEffect } from 'react'

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft()
      setTimeLeft(updatedTimeLeft)

      if (Object.keys(updatedTimeLeft).length === 0) {
        clearInterval(timer)
      }
    }, 1000)

    // Clear interval if the component is unmounted
    return () => clearInterval(timer)
  }, [])

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={index} className='m-1 p-1'>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <div className='bg-white'>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  )
}

export default CountdownTimer
