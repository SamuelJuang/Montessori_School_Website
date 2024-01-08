import defaultImg from "../assets/test.png";
import defaultImg2 from "../assets/test2.jpg";

function GalleryPage() {
  return (
    <div className="container mx-auto">
      <section className="py-10 px-4 md:px-8 lg:px-16">
        {/* ROW PERTAMA + FLOATING */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* KIRI */}
          <div className="lg:w-5/6">
            <h1 className="text-5xl font-semibold">Gallery</h1>
            <h1 className="text-md mt-3 mb-8 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              earum, fugit facere illo, corrupti iste, aliquam hic totam ab
              itaque consectetur. Hic aliquam doloremque qui consequatur autem
              repudiandae, dolor consequuntur.
            </h1>

            {/* img1 */}
            <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-[20rem] md:h-[28rem] mt-5 w-full">
              <img
                alt="..."
                src={defaultImg}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
                <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
                  <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h3>
                  {/* line-clamp-3 */}
                  <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ut consequuntur rerum aut unde aspernatur accusamus
                    assumenda possimus quod nemo, id, sint dolore itaque sed
                    earum, maxime sapiente ab numquam?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN */}
          {/* flex-col md:flex-row */}
          <div className="flex gap-3 lg:block lg:w-2/6 relative lg:-me-20">
            <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 lg:h-96 lg:mt-5 w-full md:w-1/2 lg:w-5/6">
              <img
                alt="..."
                src={defaultImg}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
                <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
                  <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h3>
                  {/* line-clamp-3 */}
                  <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ut consequuntur rerum aut unde aspernatur accusamus
                    assumenda possimus quod nemo, id, sint dolore itaque sed
                    earum, maxime sapiente ab numquam?
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING */}
            <div className="relative lg:absolute z-10 overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 w-full md:w-1/2 lg:w-full lg:mt-5">
              <img
                alt="..."
                src={defaultImg2}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
                <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
                  <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h3>
                  {/* line-clamp-3 */}
                  <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ut consequuntur rerum aut unde aspernatur accusamus
                    assumenda possimus quod nemo, id, sint dolore itaque sed
                    earum, maxime sapiente ab numquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW KEDUA */}
        <div className="flex flex-col md:flex-row gap-5 lg:-ms-20 relative">
          <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg aspect-video md:h-96 w-full lg:w-1/4 mt-5">
            <img
              alt="..."
              src={defaultImg2}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/25 h-full w-full">
              <div className="absolute p-4 sm:p-6 bottom-0 lg:bottom-auto lg:top-0 lg:right-0 w-2/3 lg:text-right">
                <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h3>
                {/* line-clamp-3 */}
                <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  ut consequuntur rerum aut unde aspernatur accusamus assumenda
                  possimus quod nemo, id, sint dolore itaque sed earum, maxime
                  sapiente ab numquam?
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg aspect-video md:h-96 lg:h-[32rem] w-full lg:w-4/6 md:mt-5">
            <img
              alt="..."
              src={defaultImg}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
              <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
                <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur.
                </h3>
                {/* line-clamp-3 */}
                <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  ut consequuntur rerum aut unde aspernatur accusamus assumenda
                  possimus quod nemo, id, sint dolore itaque sed earum, maxime
                  sapiente ab numquam?
                </p>
              </div>
            </div>
          </div>

          {/* floating gambar */}
          {/* <div className="absolute right-0 -top-32 z-10 overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-60 w-1/4 mt-5">
            <img
              alt="..."
              src={defaultImg2}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
              <div className="absolute p-4 sm:p-6 bottom-0">
                <h3 className="mt-0.5 text-lg text-white truncate">b</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 truncate">
                  c
                </p>
              </div>
            </div>
          </div> */}

          {/* 
          

          <div className="absolute right-0 z-20 overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-80 w-1/3 mt-5">
            <img
              alt="..."
              src={defaultImg2}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
              <div className="absolute p-4 sm:p-6 bottom-0">
                <h3 className="mt-0.5 text-lg text-white truncate">b</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 truncate">
                  c
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="relative rounded-2xl h-96 w-1/2 mt-5">
            <img
              alt="..."
              src={defaultImg2}
              className="rounded-2xl absolute z-10 -right-1/4 -top-1/3 h-1/2 w-1/2 object-cover object-center"
            />

            <img
              alt="..."
              src={defaultImg}
              className="rounded-2xl absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative h-full w-full">
              <div className="absolute p-4 sm:p-6 bottom-0">
                <h3 className="mt-0.5 text-lg text-white truncate">b</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 truncate">
                  c
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
