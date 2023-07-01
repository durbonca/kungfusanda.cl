import Link from "next/link"
import Image from "next/image"

export default function Kungfu() {
    return (
      <div className="h-100 bg-dark bg-gradient bg-opacity-75">
      <section className="container mb-5">
        <div className="row pt-5">
          <div className="col">
            <h1 className="text-4xl text-center text-white">Kung fu</h1>
            <h2 className="text-2xl text-center text-red-800">武术蔡李佛</h2>
          </div>
        </div>
        <div className="row pt-5 text-focus-in">
          <div className="col-12 offset-md-1 col-md-10">
            <h5 className="text-justify text-white">
              Nuestro sistema de kung fu es el Choy Lee Fut, es un arte marcial china fundada en 1836 por Chan Heung.
              Combina las técnicas de artes marciales de varios sistemas de kung-fu del norte y del sur de China. Contiene una amplia variedad de técnicas de combate con armas y manos vacias, incluyendo puñetazos de largo y corto alcance, patadas, barridos, ataques de puntos de presión, bloqueos de articulaciones y agarres
            </h5>
            <h5 className="text-justify text-white pt-3">
              La escuela de kung fu está dirigida por el Shifu Gustavo Fellenberg (maestro), con 26 años de práctica en artes marciales, seminarios, capacitaciones y medallista en torneos nacionales e internacionales en sanda y taolu
              En estos momentos, sigue capacitándose en kung fu y entrena bajo la guía del Maestro Internacional JOSE MELERO, director de la escuela de kung fu FU YING de España
            </h5>
            <h5 className="text-justify text-white pt-3">
              {' '}
              ¡¡¡PUEDES VENIR A PROBAR UNA CLASE DE REGALO!!!
              Para ver los días que se practican, favor de hacer <Link className="underline text-red-600 visited:text-red-400" href="/horarios">click acá</Link>
            </h5>{' '}
          </div>
        </div>
      </section>
      <section className="container mt-5 pb-5">
        <div className="pics mt-5">
          <div className="item level-3">
            <Image src="/img/kungfu/Kungfu1.png" alt="kung-fu imagen" width={300} height={300}/>
          </div>
          <div className="item level-3">
            <Image src="/img/kungfu/Kungfu2.png" alt="kung-fu imagen" width={300} height={300} />
          </div>
          <div className="item level-3">
            <Image src="/img/kungfu/Kungfu3.png" alt="kung-fu imagen" width={300} height={300} />
          </div>
        </div>
      </section>
    </div>
    )
  }
  