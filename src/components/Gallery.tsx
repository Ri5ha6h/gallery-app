import photo1 from '../images/photo1.png';
import photo2 from '../images/photo2.png';
import photo3 from '../images/photo3.png';
import photo4 from '../images/photo4.png';
import photo5 from '../images/photo5.png';
import photo6 from '../images/photo6.png';

const Gallery = () => {
  return (
    <div className='grid grid-cols-3 gap-2 mt-10 md:w-2/3 2xl:w-2/5 sm:gap-4'>
      <div>
        <img
          className='rounded-lg'
          src={photo1}
          alt='photo1'
        />
      </div>
      <div className='col-span-2 '>
        <img
          className='rounded-lg'
          src={photo2}
          alt='photo2'
        />
      </div>
      <div className='col-span-2 '>
        <img
          className='rounded-lg'
          src={photo3}
          alt='photo3'
        />
      </div>
      <div className='row-span-2 '>
        <img
          className='rounded-lg'
          src={photo4}
          alt='photo4'
        />
      </div>
      <div>
        <img
          className='rounded-lg'
          src={photo5}
          alt='photo5'
        />
      </div>
      <div>
        <img
          className='rounded-lg'
          src={photo6}
          alt='photo6'
        />
      </div>
    </div>
  );
};

export default Gallery;
