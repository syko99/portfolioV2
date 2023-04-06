import landscapeImg from '../../assets/landscape.png'
import profileImg from '../../assets/profile.jpg'

const About = () => {
    return (
        <div className='w-full bg-white rounded-lg relative shadow-md overflow-hidden'>
            <div className='w-full h-24 border-b overflow-hidden relative'>
                <img src={landscapeImg} alt='background image' className='absolute -bottom-3/4' />
            </div>
            <div className='rounded-full border w-24 h-24 absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white'>
                <img src={profileImg} alt='profile image' className='absolute -bottom-0' />
            </div>
            <div className='mt-12 p-4 flex flex-col'>
                <h1 className='text-center font-medium text-xl'>Sykong Yang</h1>
                <h2 className='text-center text-black/75 mt-2'>
                    Full Stack Developer - B.S. Computer Science
                </h2>
                <p className='text-center mt-4'>
                    Becoming a developer is result of my passion to build and design things. When
                    I'm not pressing keys, I'll probably be unplugged and surrounded by nature 🌳.
                </p>
            </div>
        </div>
    )
}

export default About
