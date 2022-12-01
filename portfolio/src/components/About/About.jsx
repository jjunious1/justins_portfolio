import './About.css';
import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';
import aboutMe from '../../assets/full.png'

export default function About() {
  const { about, contact, scrollTo } = useContext(RefContext);
  return (
    <section
      id='about'
      ref={about}
    >
      <h5>Get To Know Me</h5>
      <h2>A Little About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-pfp-container'>
            <div className='about__me-pfp'>
              <img
                src={aboutMe}
                alt='justin junious'
              />
            </div>
          </div>
        </div>

        <div className='about__content'>
          <p>
          I am a problem solving, solutions driven software engineer with a passion for creative design and intuitive functionality. Previously working as a customer support manager in the tech space informs everything I do: from collaborating with customers and stakeholders, adapting to ever changing landscapes and solving complex problems efficiently. I am excited to grow my skills as a software engineer and use my skillset to impact an engineering team with a focus on creative and intuitive development.
          </p>
          <p>
            In my spare time, I really enjoy spending time with my family which includes my wife, daughter and dog. I'm an avid gamer and like traveling with my family.
          </p>
        </div>
      </div>
      <div className='about__contact-btn-container'>
        <div
          onClick={() => {
            scrollTo(contact);
          }}
          className='btn btn-primary about__contact-btn'
        >
          Say Hi
        </div>
      </div>
    </section>
  );
}