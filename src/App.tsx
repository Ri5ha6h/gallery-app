import Gallery from './compoents/Gallery';
import Header from './compoents/Header';

const App = () => {
  return (
    <div className='flex flex-col items-center px-10 pt-20 pb-5 xl:px-60'>
      <Header />
      <Gallery />
      <div className='mt-10 text-center'>
        <p className='text-gray-400'>
          created by{' '}
          <a
            className='border-b-2'
            href='https://devchallenges.io/portfolio/Ri5ha6h'
            target='_blank'
          >
            Rishabh Malik
          </a>{' '}
          - devChallenges.io
        </p>
      </div>
    </div>
  );
};

export default App;
