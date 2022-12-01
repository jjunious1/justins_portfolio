import { BsGithub, BsLinkedin} from 'react-icons/bs';

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a
        href='https://github.com/jjunious1'
        title='GitHub Link'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <BsGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/jjunious'
        title='LinkedIn Link'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <BsLinkedin />
      </a>
    </div>
  );
}