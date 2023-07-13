const Hero = () => {
  return (
    <div className="hero min-h-screen grid">
      <div className="hero-content text-center text-neutral-content">
        <video autoPlay loop disableRemotePlayback muted poster="/homepage/video2.jpg" className=" absolute h-screen aspect-[3/1] object-cover">
          <source
            src="homepage/video2.mp4"
            type="video/mp4"
          />
        </video>
      <div className=" absolute h-screen w-full" ></div>
        <div className="max-w-md relative">
          <h1 className="mb-5 text-5xl font-bold">Una agencia web de infinitas posibilidades</h1>
          <p className="mb-5">Creamos experiencias, forjamos sueños, abrimos caminos al futuro.</p>
          <button className="btn btn-outline text-white backdrop-blur-xl mt-6">Conoce más</button>
        </div>
      </div>
    </div>
  )
}
export default Hero
