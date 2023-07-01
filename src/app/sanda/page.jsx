import Image from "next/image"

export default function Sanda() {
    return (
      <div className="h-100 bg-dark bg-gradient bg-opacity-75">
      <section className="container">
        <div className="row pt-5">
          <div className="col">
            <h1 className="text-4xl text-center text-white">SANDA</h1>
            <h2 className="text-2xl text-center text-red-800">散打</h2>
          </div>
        </div>
        <div className="row pt-5 text-focus-in">
          <div className="col-12 offset-md-1 col-md-10">
            <h5 className="text-justify text-white">
              El sanda, es el deporte de contacto pleno del wushu kung fu, se caracteriza por su reglamento flexible, donde está permitido golpear con puños y patadas, además de ocupar técnicas de derribos.
            </h5>
            <h5 className="text-justify text-white pt-3">
              Nuestra escuela es dirigida por el profesor Gustavo Fellenberg, licenciado como profesor en Educación Física, entrenador certificado de sanda por la asociación de wushu de china, director de la LIGA CHILENA DE SANDA, y ex técnico nacional de esta disciplina, formador de la primera selección nacional, obteniendo medallas a nivel sudamericano y panamericano durante 6 años en torneos IWUF {`(INTERNATIONAL WUSHU FEDERATION)`}
            </h5>
          </div>
        </div>
      </section>
      <section className="mt-8 pb-5">
        <div className="container pics">
          <div className="item level-3">
            <Image src="/img/sanda/Sanda1.png" alt="sanda foto" width={300} height={300} />
          </div>
          <div className="item level-3">
            <Image src="/img/sanda/Sanda2.png" alt="sanda foto" width={300} height={300} />
          </div>
          <div className="item level-3">
            <Image src="/img/sanda/Sanda3.png" alt="sanda foto" width={300} height={300} />
          </div>
          <div className="item level-3">
            <Image src="/img/sanda/Sanda4.png" alt="sanda foto" width={300} height={300} />
          </div>
        </div>
      </section>
    </div>
    )
  }
  