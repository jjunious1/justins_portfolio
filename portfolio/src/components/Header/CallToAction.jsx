import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';
import Resume from '../../assets/';

export default function CallToAction() {
  const { contact, scrollTo } = useContext(RefContext);
  return (
    <div className='call-to-action'>
      <a
        href={Resume}
        download
        className='btn'
      >
        Download Resume
      </a>
      <div
        onClick={() => {
          scrollTo(contact);
        }}
        className='btn btn-primary'
      >
        Let's Chat
      </div>
    </div>
  );
}