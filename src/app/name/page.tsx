import Image from 'next/image';
import React from 'react';
import Style from "@/component/Style/namepage.module.css" // Import your CSS file

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <figure className={`bg-slate-100 rounded-xl p-8 dark:bg-slate-800 ${Style.dynamicEffect}`}>
        <div className={`flex flex-row-reverse md:flex-row w-full md:w-auto ${Style.imageEffect}`}>
          <div className="w-80 h-80 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto overflow-hidden">
            <Image
              className="object-cover w-full h-full"
              src="/inshot.jpg"
              alt=""
              width="384"
              height="512"
            />
          </div>
        </div>
        <div className={`pt-6 md:p-8 text-center md:text-left space-y-4 ${Style.textEffect} ${Style.fontCursive}`}>
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I have seen scale
              on large teams. It is easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Farrukh Sajjad</div>
            <div className="text-slate-700 dark:text-slate-500">Web Developer, Rojhan</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;
