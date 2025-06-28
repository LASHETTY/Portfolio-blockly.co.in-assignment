
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-gray-300 dark:bg-gray-600 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                This is it :)
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Anish K. Sinha is an UI/UX Designer & Front End Developer with a passion for designing beautiful and functional user experiences. He has 4+ years of experience in designing and developing digital products.
                </p>
                <p>
                  He is currently a Master degree in Computer Applications. During his graduation, he has been actively involved in the web design and development industry. He loves creating awesome things and has been developing mobile applications, web applications, web applications and Games.
                </p>
                <p>
                  His Ultimate Objective: Attend Open-mic with stand-up having 15-min great material and speaking often large, motivating crowd to 15 films, plays.
                </p>
                <p>
                  When he's not designing, You can catch him binging one old cartoons, watching movies, sketching or hanging around on a weeknight, sprinkling humour into otherwise-normal conversations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src="/placeholder.svg"
                alt="About illustration"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
