function BannerSlider () {
  return (
    <div className='grid place-items-center bg-black/50 relative select-none'>
      <div className='absolute h-screen w-full bg-gradient-to-b from-transparent via-black/10 via-98% to-black to-99%'></div>
      <video autoPlay loop muted poster='homepage/video2.jpg' className="h-screen aspect-[3/1] object-cover"
        disableRemotePlayback>
        <source
          src="homepage/video2.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute text-white text-center w-[19rem]">
        <h1 className="text-2xl font-bold">Una Agencia <br /> a la vanguardia tecnológica.</h1>
        <h2 className="text-sm mt-4 font-semibold">Diseñamos productos web de altisima calidad ofreciendo así experiencias únicas para sus usuarios.</h2>
        <button className='btn btn-outline text-white backdrop-blur-xl mt-6'>Conoce más</button>
      </div>
    </div>
  )
}
export default BannerSlider
