import Image from "next/image"

export default function Leon() {
    return (
        <div className="h-100 bg-dark bg-gradient bg-opacity-75">
        <section className="container">
          <div className="row pt-5">
            <div className="col">
              <h1 className="text-4xl text-center text-white">DANZA DE LEÓN CHINO</h1>
              <h2 className="text-2xl text-center text-red-800">舞狮</h2>
            </div>
          </div>
          <div className="row pt-5 text-focus-in">
            <div className="col-12 offset-md-1 col-md-10">
              <h5 className="text-justify text-white">
                La danza del león, es una forma de danza tradicional en la cultura china y otros países asiáticos, en los que los artistas imitan los movimientos de un león, disfrazados de la representación de este animal, para traer buena suerte y fortuna.
              </h5>
              <h5 className="text-justify text-white pt-3">
                La danza del león se realiza generalmente durante el Año Nuevo chino y otros festivales chinos tradicionales y culturales. También se puede realizar en ocasiones importantes como eventos de apertura de negocios, celebraciones especiales o ceremonias de bodas, bautizos, cumpleaños, matrimonios, festividades o para honrar a invitados especiales de las comunidades chinas.
              </h5>
            </div>
          </div>
        </section>
  
        <section className="mt-5 pb-5">
          <div className="container pics">
            <div className="item level-3">
              <Image src="/img/leon/1.jpeg" width={300} height={600} alt="Danza de león imagen" />
            </div>
            <div className="item level-3">
              <Image src="/img/leon/2.jpeg" width={300} height={600} alt="Danza de león imagen" />
            </div>
            <div className="item level-3">
              <Image src="/img/leon/3.jpeg" width={300} height={600} alt="Danza de león imagen" />
            </div>
            <div className="item level-3">
              <Image src="/img/leon/4.jpeg" width={300} height={600} alt="Danza de león imagen" />
            </div>
            <div className="item level-3">
              <Image src="/img/leon/5.jpeg" width={300} height={600} alt="Danza de león imagen" />
            </div>
            <div className="item level-3">
              <Image src="/img/leon/6.jpeg" width={300} height={600} alt="Danza de león imagen" />
            </div>
            <div className="item level-3">
              <Image src="/img/leon/7.jpeg" width={300} height={600} alt="Danza de león imagen" />
            </div>
            <div className="item level-3">
              <Image src="/img/leon/8.jpeg" width={300} height={600} alt="Danza de león imagen" />
            </div>
          </div>
        </section>
      </div>
    )
  }
  