
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tctsase',  // Service ID
        'template_4kzh49q', // Template ID
        form.current,
        'W4OClOYxDKmdF2YXF'   // Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.info('Email Send Success')
          form.current.reset()


        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <div id='contact'>
      <p className='text-center text-4xl text-indigo-300 mt-20 mb-8'>| Contact Me |</p>
      <div className='md:flex w-[80%] m-auto py-16'>
        <div className='md:w-[50%] lg:w-[50%] w-[90%] m-auto space-y-5' data-aos="fade-right">
          <div>
            <p className='text-4xl uppercase font-semibold'>Ayesha S.</p>
            <p className='pt-2 text-lg text-gray-400'>Professional Web Developer</p>
            <p className='text-gray-400'>Location : Dinajpur, Bangladesh</p>
          </div>
          <div className='flex gap-7 text-white '>
            <a href="https://www.facebook.com/ayesha.siddika.982225" className='w-10 cursor-pointer hover:-translate-y-1 h-10 text-center flex items-center justify-center rounded-full border text-2xl border-indigo-600 shadow-md shadow-indigo-700' target='_blank'><div className='cursor-pointer'><FaFacebookF /></div></a>


            <a href="https://www.linkedin.com/in/ayesha-siddika110/" target='_blank' className='w-10 h-10 hover:-translate-y-1 cursor-pointer text-center flex items-center justify-center rounded-full border text-xl border-indigo-600 shadow-md shadow-indigo-700'><div className='cursor-pointer'><FaLinkedinIn /></div></a>


            <a href="https://github.com/ayesha-siddika110" target='_blank' className='w-10 h-10 hover:-translate-y-1 cursor-pointer text-center flex items-center justify-center rounded-full border text-xl border-indigo-600 shadow-md shadow-indigo-700'><div className='cursor-pointer'><FaGithub /></div></a>


          </div>

        </div>
        <div className='md:w-[50%] lg:w-[50%] w-[90%] m-auto pt-8 md:pt-0 lg:pt-0'>
          <p className='text-2xl pb-5' data-aos="fade-left">Get In Touch</p>
          <form action="" ref={form} onSubmit={sendEmail} className='space-y-3'>
            <input data-aos="fade-left" type="text" name="user_name" placeholder="Type Your Name" className="input input-bordered bg-blue-950 w-full" required />
            <input data-aos="fade-left" type="email" name="user_email" placeholder="Type Your Email" className="input input-bordered bg-blue-950 w-full" required />
            <textarea data-aos="fade-left" type="text" placeholder="Type Something" className="input input-bordered bg-blue-950 w-full h-32" name='message' required />
            <button className="hover:bg-indigo-500 border cursor-pointer border-indigo-600 shadow-lg shadow-indigo-500/40 py-2 rounded-lg px-4">Send Email</button>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Contact;