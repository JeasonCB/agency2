function BannerSlider () {
  return (
    <div className='grid place-items-center bg-black/50 relative select-none'>
      <div className='absolute h-screen w-full bg-gradient-to-b from-transparent from-80% via-black/10 via-98% to-black to-99%'></div>
      <video autoPlay loop muted poster='homepage/video2.jpg' className="h-screen aspect-[3/1] object-cover"
        disableRemotePlayback>
        <source
          src="homepage/video2.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute text-white text-center w-[15rem] backdrop-blur-[1px] rounded-full bg-black/10">
        <h1 className="text-2xl font-bold uppercase">Bienvenido a<br />Área 51 </h1>
        <h2 className="text-sm mt-4 font-semibold">Con tecnología de punta creamos las páginas web más rápidas del mercado</h2>
        <button className='btn btn-outline text-xs text-white backdrop-blur-xl mt-6 mb-1'>Descubre como</button>
</div>
    </div>
  )
}
export default BannerSlider
