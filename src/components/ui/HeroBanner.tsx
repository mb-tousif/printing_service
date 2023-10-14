import React from 'react'

export default function HeroBanner() {
  return (
    <div className="h-screen flex items-center">
      <section
        className="w-full bg-cover bg-center py-32"
        style={{
          backgroundImage: `url('../../assets/heroBanner.png')`,
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">Welcome to My Agency</h1>
          <p className="text-xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae.
          </p>
          <a
            href="#"
            className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
          >
            Demo
          </a>
        </div>
      </section>
    </div>
  );
}
