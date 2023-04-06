const Project = () => {
    return (
        <div className='w-full bg-white rounded-lg p-4 flex flex-col gap-4'>
            <h3>Project Name</h3>
            <div className='grid place-items-center'>Image</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, vero!</p>
            <div className='flex gap-4 justify-center items-center'>
                <a href="" className="w-full"><button className="w-full p-1 border rounded-lg">Live</button></a>
                <a href="" className="w-full"><button className="w-full p-1 border rounded-lg">Code</button></a>
            </div>
        </div>
    )
}

export default Project
