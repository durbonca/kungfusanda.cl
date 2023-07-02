import Image from "next/image";

const index = () => {
  return (
      <section className="max-w-full p-12 bg-white flex gap justify-center items-center flex-col-reverse md:flex-row">
        <div
            className="w-full md:w-3/5 text-black"
        >
            <span>
              Bienvenido a nuestra escuela &quot;GUANGONG&quot;, un espacio de grato ambiente para entrenar y sacar lo
              mejor de ti mediante nuestras disciplinas:
              <br />
              <br />
              <ul className="mb-4">
                <li> kung fu estilo choy lee fut</li>
                <li> Sanda (deporte de contacto) </li>
                <li> Acondicionamiento físico </li>
              </ul>
              A través de clases grupales y particulares (plan de personal trainer) para niños, jóvenes y adultos
              Nuestra escuela tiene espacio para la práctica recreativa, formativa y competitiva, somos un club
              deportivo afiliado a la Federación nacional de wushu y es formadora de deportistas seleccionados para
              representar a Chile en el extranjero en las áreas de taolu (kung fu tradicional) y sanda
              <br />
            </span>
        </div>
        <div className="m-auto w-full h-full md:w-2/5">
          <Image
            className="w-full h-auto"
            src="/img/nuevoLogo.jpeg"
            alt="logo"
            style={{
              mixBlendMode: 'hard-light',
            }}
            width={1280}
            height={988}
          />
        </div>
      </section>
  )
}

export default index