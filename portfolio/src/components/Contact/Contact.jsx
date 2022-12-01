import './Contact.css';
import { useRef, useContext } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';
import { RefContext } from '../../context/RefContext';

export default function Contact() {
  const { contact } = useContext(RefContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_faf1dzf', 'template_29aldcd', form.current, 'c3BNf-OCrtQM_IBtB').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section
      id='contact'
      ref={contact}
    >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon icon' />
            <h4>Email</h4>

            <a
              href='mailto:justinjunious1@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Drop Me A Line
            </a>
          </article>

          <article className='contact__option'>
            <ImLinkedin className='contact__option-icon icon' />
            <h4>LinkedIn</h4>

            <a
              href='https://www.linkedin.com/jjunious1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send Me A Message
            </a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required={true}
          />
          <input
            type='text'
            name='email'
            placeholder='Your Email'
            required={true}
          />
          <textarea
            name='message'
            rows='7'
            placeholder="What's on your mind?"
            required={true}
          />
          <button
            type='submit'
            className='btn btn-primary form__btn'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}