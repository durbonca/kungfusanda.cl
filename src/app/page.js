import VideoCover from '../components/VideoCover'
import Intro from '../components/Intro'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Intro />
      <Image
        className='w-full'
        alt="home"
        height={421}
        width={720}
        src={'/img/home.jpg'}
      />
      <h3 className='py-4 text-4xl text-center'>
        Misión
      </h3>
      <section className="max-w-full p-12 bg-white flex gap justify-center items-center flex-col-reverse md:flex-row">
        <p className='text-black'>
          Nuestra misión es promover el bienestar físico, mental y emocional de la comunidad de la Florida a través de la práctica del Kung Fu, sanda y shuaijiao. Ofrecemos un espacio inclusivo y de respeto donde enseñamos no solo técnicas de defensa personal, sino también valores como la disciplina, la perseverancia, el respeto y la humildad. Nos dedicamos a fortalecer el cuerpo y la mente de cada uno de nuestros estudiantes, brindando una formación integral que favorezca su desarrollo personal y social.
        </p>
      </section>
      <h3 className='py-4 text-4xl text-center'>
        Visión
      </h3>
      <section className="max-w-full p-12 bg-white flex gap justify-center items-center flex-col-reverse md:flex-row">
        <p className='text-black'>
          Ser la escuela de Kung Fu líder en la Florida, reconocida por su compromiso con la excelencia en la enseñanza de artes marciales, la inclusión y el desarrollo integral de nuestros estudiantes. Aspiramos a crear una comunidad unida, saludable y fuerte, en la que el Kung Fu sea una herramienta para mejorar la calidad de vida de nuestros miembros y de la sociedad en general. Con el tiempo, queremos expandir nuestra influencia, llevando los beneficios del Kung Fu a más personas en la región.
        </p>
      </section>
      <VideoCover />
    </div>
  )
}
