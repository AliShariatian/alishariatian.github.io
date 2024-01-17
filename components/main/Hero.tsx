function Hero() {
   return (
      <div className="relative flex flex-col h-full w-full">
         <video autoPlay muted loop className="absolute top-[-340px] left-0 w-full h-full object-cover rotate-180 z-[1]">
            <source src="/video/blackhole.webm" type="video/webm" />
         </video>
      </div>
   );
}

export default Hero;