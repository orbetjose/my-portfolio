import Image from "next/image";

type cardProps = {
  title: string;
  year: number;
  description: string;
  url: string;
  image: string;
};

export default function card({
  title,
  year,
  description,
  url,
  image,
}: cardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-slate-800 dark:border-slate-700">
      <a href={url} target="_blank">
        <Image
          src={image}
          width={350}
          height={150}
          alt={`Proyecto ${title}`}
          unoptimized
          priority
          className="object-cover w-full h-[136px] rounded-t-lg"
        />
      </a>
      <div className="p-5">
        <a href={url} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#6266d1] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ir al sitio
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
