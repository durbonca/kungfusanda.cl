import Image from "next/image";

const index = () => {
  return (
      <section className="max-w-full p-12 bg-white flex gap justify-center items-center flex-col-reverse md:flex-row">
        <div
            className="w-full md:w-3/5 text-black"
        >
              <p className="mb-4">
                Bienvenidos a la escuela de Kung fu y sanda &quot;GUANGONG&quot;
              </p>
              <p className="mb-4">
                ¡Nos alegra mucho tenerte aquí! En nuestra escuela de Kung Fu, creemos que las artes marciales son mucho más que una disciplina física; son una forma de vida que fortalece cuerpo, mente y espíritu. Nuestro objetivo es ofrecerte un espacio donde puedas aprender, crecer y formar parte de una comunidad unida por la pasión por el Kung Fu y los deportes de combate chinos (sanda y shuaijiao)
              </p>
              <p className="mb-4">
                Ya seas principiante o tengas experiencia previa, aquí encontrarás un ambiente acogedor y amigable donde cada estudiante es respetado y apoyado en su camino. Nos enorgullece enseñar no solo técnicas de Kung Fu, sino también valores fundamentales como la disciplina, el respeto, la perseverancia y la humildad, que pueden transformar tu vida tanto dentro como fuera de la sala de entrenamiento.
              </p>
              <p className="mb-4">
                Te invitamos a unirte a nuestra familia de Kung Fu GUANGONG y descubrir cómo esta antigua disciplina puede ayudarte a alcanzar tus objetivos personales, mejorar tu bienestar y conectar con una comunidad vibrante que crece día a día.
              </p>
              <p className="mb-4">
                Nos especializamos en 3 disciplinas de combate chinos:
              </p>
              <ul className="list-decimal mb-4 ml-8">
                <li>
                  Kung fu choy lee fut (rama enfocada en la defensa personal, salud y cultura china)
                </li>
                <li>
                  Sanda (Deporte de combate del wushu, se permiten golpes de puños, patadas y derribos)
                </li>
                <li>
                  Shuaijiao ( Sistema mas antiguo del wushu, se basa en el desarrollo de técnicas de derribos)
                </li>
              </ul>
              <p className="mb-4">
                ¡Esperamos verte pronto y comenzar juntos este increíble viaje de aprendizaje y crecimiento!
              </p>
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