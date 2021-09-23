import profile from '../images/profilePhoto.png';

const Header = () => {
  return (
    <div className='flex flex-col items-center lg:w-1/2 2xl:w-1/3'>
      <div className='flex flex-col items-center'>
        <img
          className='w-48 h-48 rounded-2xl'
          src={profile}
          alt='profile pic'
        />
        <h2 className='mt-3 text-2xl font-semibold tracking-wider'>
          Rodney Cotton
        </h2>
        <span className='mt-1 text-sm text-gray-400'>
          Helsinki, Finland
        </span>
      </div>
      <div className='flex flex-col w-full mt-8 space-y-5 xl:justify-around sm:space-y-0 sm:flex-row sm:space-x-10'>
        <div className='flex flex-col items-center px-8 py-3 bg-gray-200 rounded-md'>
          <h4 className='text-lg font-semibold'>
            100
          </h4>
          <span className='text-sm font-semibold text-gray-400'>
            Posts
          </span>
        </div>
        <div className='flex flex-col items-center px-8 py-3 bg-gray-200 rounded-md'>
          <h4 className='text-lg font-semibold'>
            2,242
          </h4>
          <span className='text-sm font-semibold text-gray-400'>
            Follower
          </span>
        </div>
        <div className='flex flex-col items-center px-8 py-3 bg-gray-200 rounded-md'>
          <h4 className='text-lg font-semibold'>
            1,432
          </h4>
          <span className='text-sm font-semibold text-gray-400'>
            Following
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
