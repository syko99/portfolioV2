import dotSVG from '@public/assets/status/dot.svg'

const Status = () => {
    return (
        <div className='flex flex-col items-center gap-1 w-full p-4 text-center rounded-3xl shadow-lg bg-zinc-200'>
            <div className='flex items-center gap-1 justify-self-center'>
                <div className='w-3'>
                    <img
                        src={dotSVG}
                        alt='status dot'
                        className='animate-pulse justify-self-end'
                        width={100}
                        height={100}
                    />
                </div>
                <h3 className='font-medium text-zinc-500'>Status: </h3>
            </div>
            <p>Currently building a website to promote natural disaster safety. </p>{' '}
            <p className='text-zinc-500'>Check out my recent projects below!</p>
        </div>
    )
}

export default Status
