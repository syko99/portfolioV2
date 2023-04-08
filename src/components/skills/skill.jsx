const Skill = ({ icon }) => {
    return (
        <div className='w-16 flex flex-col items-center'>
            <img src={icon.image} alt='' />
            <p className='text-sm capitalize dark:text-slate-300'>{icon.title}</p>
        </div>
    )
}

export default Skill
