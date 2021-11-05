import FormContent from '../components/FormContent'

export default function Home() {
  return (
    <div className='grid grid-cols-1 items-center md:grid-cols-2 md:gap-10'>

      <div className='grid gap-7 text-center pb-12 md:text-left'>
        <h1 className='text-3xl text-white font-semibold  md:text-4xl xl:text-5xl md:font-bold'>Learn to code by <br /> watching others</h1>
        <p className='text-lightPink md:text-lg '>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
      </div>

      <div className='grid gap-4'>
        <div className='bg-blue rounded-lg grid justify-center items-center text-center py-4 text-white md:grid-flow-col md:gap-2'>
          <p><span className='font-semibold'>Try it free 7 days</span> then</p>
          <p>$20/mo. thereafter</p>
        </div>

        <FormContent />
      </div>

    </div>
  )
}
