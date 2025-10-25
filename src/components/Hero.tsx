export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(./kailash-mountain.jpg)`,
      }}
      id="home"
    >
      <div className="relative container mx-auto px-8 py-32 xl:p-40 flex flex-col text-center md:text-left">
        <h1 className="text-8xl md:text-6xl text-gray-200 text-shadow-lg">
          Kailash Mansarovar Yatra
          <span className="font-bold"> 2026</span>
        </h1>
        <p className="text-2xl my-8 text-gray-200 font-bold">
          Divine Pilgrimage to Mount Kailash in Tibet
        </p>
        <p className="text-lg max-w-3xl mb-8">
          A classic and popular route starting from Kathmandu, offering a blend
          of comfort and adventure. Experience the journey of a lifetime to the
          sacred abode of Lord Shiva.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-items-end">
          <a
            href="tel:+447545066652"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Bookings Open for 2026
          </a>
        </div>
      </div>
    </section>
  );
}
