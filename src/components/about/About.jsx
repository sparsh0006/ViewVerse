import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React developers are some of the most dynamic, innovative, and versatile professionals in the tech world.
                      They bring incredible user experiences to life by creating fast, scalable, and efficient applications.
                      Known for their ability to think both creatively and logically, React developers possess a deep understanding of JavaScript,
                      modern front-end frameworks, and, most importantly, how to turn complex ideas into intuitive, beautiful interfaces.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Moreover, React developers tend to stay updated with the latest trends and improvements in the rapidly evolving React ecosystem,
                      from exploring new libraries to contributing to open-source projects. They are problem-solvers, performance-focused,
                      and driven by a passion for creating solutions that make a real difference in users’ lives.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}