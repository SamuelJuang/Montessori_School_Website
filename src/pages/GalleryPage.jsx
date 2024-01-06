import defaultImg from "../assets/test.png";
import defaultImg2 from "../assets/test2.jpg";

function GalleryPage() {
  return (
    <div className="container mx-auto ">
      <section className="py-10 px-5">
        <h1 className="text-4xl font-semibold">Gallery</h1>
        <h1 className="text-md max-w-screen-lg mt-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          earum, fugit facere illo, corrupti iste, aliquam hic totam ab itaque
          consectetur. Hic aliquam doloremque qui consequatur autem repudiandae,
          dolor consequuntur.
        </h1>

        {/* img1 */}
        <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-80 max-w-screen-md lg:max-w-screen-lg mt-5">
          <img
            alt="..."
            src={defaultImg}
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
        </div>

        {/* div bawahnya */}
        <div className="flex flex-row gap-3 -ms-10 relative">
          <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-80 w-1/3 mt-5">
            <img
              alt="..."
              src={defaultImg}
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
          </div>
          {/* 
          <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-80 w-1/3 mt-5">
            <img
              alt="..."
              src={defaultImg}
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
          </div>

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

          {/* shadow transition hover:shadow-lg */}
          <div className="relative rounded-2xl h-96 w-1/2 mt-5">
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

            {/* bg-gradient-to-t from-gray-900/50 to-gray-900/25 */}
            <div className="relative h-full w-full">
              <div className="absolute p-4 sm:p-6 bottom-0">
                <h3 className="mt-0.5 text-lg text-white truncate">b</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 truncate">
                  c
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
