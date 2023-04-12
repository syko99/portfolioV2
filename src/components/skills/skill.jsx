const Skill = ({ icon }) => {
    return (
        <div className='w-16 flex flex-col items-center'>
            <img src={icon.image} alt={icon.title} width={100} height={100} />
            <p className='text-sm capitalize dark:text-slate-300'>{icon.title}</p>
        </div>
    )
}

export default Skill
