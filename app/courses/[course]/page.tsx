import Link from "next/link";
import Image from "next/image";
import getCourseById from "@/actions/getCourseById";
import { MdDateRange } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { CarouselDemo } from "@/components/Carousel";

interface IParams {
  listingId?: string;
}

const Course = async ({ params }: { params: IParams }) => {
  const listing = await getCourseById(params);
  console.log(listing);

  return (
    <>
      <main className="w-full flex flex-col items-left justify-start md:px-24 ">
        <article className=" grid">
          <div className="relative rounded-b-3xl h-64 overflow-hidden">
            <Image
              className="object-cover"
              src={listing?.image || "/courseimg/art.jpg"}
              alt={""}
              fill
            />
          </div>
          <div className="px-6 pt-4 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{listing.title}</h1>
            <h2>by Emil Sørvåg</h2>
            <button className="border-[1px] mt-2 font-bold w-fit py-2 px-6 rounded-full border-black solid">
              buy ticket
            </button>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex gap-2">
                <MdDateRange size="20" />
                <span className="text-sm">
                  Wed, Jan 20, 2024 @ 9:00 AM - 2:00 PM
                </span>
              </div>
              <div className="flex gap-2">
                <MdLocationOn size="20" />
                <span className="text-sm">Stavanger, Norway</span>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <h2 className="text-xl font-medium">About the event</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                voluptatibus, quibusdam, natus, tempore voluptas quos
                exercitationem quod similique voluptatem fugit voluptatum
                doloremque. Quasi, voluptatem.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <h2 className="text-xl font-medium">Other related events</h2>
              <CarouselDemo/>
              
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Course;
