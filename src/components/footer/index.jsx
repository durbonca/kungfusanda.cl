import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='flex max-w-full p-0 bg-gray-800 flex-col'>
      <div className='p-4 text-white border-t-gray-700'>
        <div className='flex justify-center gap-4'
        >
          <a href="https://wa.me/56951787063" target="_blank" rel="noreferrer">
            <BsWhatsapp />
          </a>
          <a href="https://www.instagram.com/kungfuguangong/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com/kungfulaflorida/" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
        </div>
      </div>
      <div className="text-center p-4 text-white border-t-gray-700 border-t-2">
        Kung Fu La Florida © {year} - Made by{' '}
        <a href="https://durbonca.com" target="_blank" rel="noreferrer">
          @durbonca
        </a>
      </div>
    </footer>
  );
};

export default Footer;