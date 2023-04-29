import dotSVG from '@public/assets/status/dot.svg'

const Status = () => {
    return (
        <div className='flex flex-col items-center gap-1 w-full p-4 text-center rounded-3xl shadow-lg bg-zinc-200 dark:shadow-[inset_0_0_2rem_0] dark:shadow-zinc-800 dark:bg-zinc-900'>
            <div className='flex items-center gap-1 justify-self-center relative'>
                <div className='w-3 absolute -left-4'>
                    <img
                        src={dotSVG}
                        alt='status dot'
                        className='animate-pulse justify-self-end'
                        width={100}
                        height={100}
                    />
                </div>
                <h3 className='font-medium text-slate-500 dark:text-slate-400'>Status: </h3>
            </div>
            <p className='dark:text-slate-300'>Currently building a website to promote natural disaster safety. </p>
        </div>
    )
}

export default Status
