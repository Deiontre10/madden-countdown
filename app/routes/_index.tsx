import type { MetaFunction } from '@remix-run/node'
import CountdownTimer from '~/components/countdown'

export const meta: MetaFunction = () => {
  return [
    { title: 'Madden 25 Countdown' },
    { name: 'description', content: 'ITS ALMOST MADDEN TIME' }
  ]
}

export default function Index() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-black'>
      <div className='bg-white rounded-lg p-8 shadow-lg'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-card-foreground mb-4'>
            Madden 25 Countdown
          </h2>
          <div className='text-6xl font-bold text-primary-foreground mb-4'>
            <div className='flex gap-4'>
              <div className='flex flex-col items-center'>
                <div className='text-sm text-muted-foreground'>
                  <CountdownTimer targetDate='8.16.2024' />
                </div>
              </div>
            </div>
          </div>
          <p className='text-muted-foreground'>
            Get ready for the big release on August 16, 2024!
          </p>
        </div>
      </div>
    </div>
  )
}
