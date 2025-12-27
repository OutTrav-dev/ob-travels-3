

// const aboutPoints = [
//   {
//     icon: "/images/about/expert-team.png",
//     title: "Expert Team",
//     desc: "A passionate team of travel experts with 15+ years of experience crafting unforgettable journeys. Our advisors have traveled extensively and bring first-hand knowledge to every itinerary.",
//   },
//   {
//     icon: "/images/about/partners.png",
//     title: "Trusted Partners",
//     desc: "We partner with local guides and global brands for authentic, comfortable experiences. Our network ensures you get the best service, safety, and value wherever you go.",
//   },
//   {
//     icon: "/images/about/personalized.png",
//     title: "Personalized Itineraries",
//     desc: "From solo adventures to family vacations, every trip is tailored to your dreams. We listen to your preferences and design journeys that match your style and pace.",
//   },
//   {
//     icon: "/images/about/happy-travelers.png",
//     title: "Happy Travelers",
//     desc: "Thousands have trusted us for their domestic and international trips. Our travelers return with stories, smiles, and a desire to explore more with us.",
//   },
//   {
//     icon: "/images/about/support.png",
//     title: "24/7 Support",
//     desc: "We’re with you every step of the way. Our dedicated support team is available round the clock to assist you before, during, and after your journey.",
//   },
//   {
//     icon: "/images/about/unique-experiences.png",
//     title: "Unique Experiences",
//     desc: "We go beyond the ordinary. Enjoy curated experiences, hidden gems, and local insights that make your trip truly memorable.",
//   },
// ];

import { sanitizeHtml } from "@/src/utils/helper";

const aboutHtml = `
  <span class="font-bold text-emerald-600">Outbound Travelers</span> is your trusted partner in exploring the world. 
  <br /><br />
  we specialize in crafting extraordinary outbound travel experiences tailored to your desires. Our dedicated team of travel experts is committed to curating journeys that exceed expectations, ensuring every detail is meticulously planned for your comfort and enjoyment.
  <br /><br />
  Whether you seek adventure in remote destinations, cultural immersion in vibrant cities, or relaxation on idyllic beaches, we cater to diverse interests and preferences. From booking flights and accommodations to designing personalized itineraries, we handle every aspect of your journey with care and expertise.
  <br /><br />
  Trust us to deliver seamless travel experiences that inspire, enrich, and create lasting memories.
`;

const sanitizedHtml = sanitizeHtml(aboutHtml);

const WhoAreWe = () => {
  return (
    <section className="w-full px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#052210] mb-4 text-center drop-shadow-lg">
          Who Are We?
        </h2>
        <div
          className="text-lg text-gray-700 mb-6 text-center max-w-4xl"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {aboutPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-emerald-50 shadow">
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-lg font-bold text-emerald-700 mb-2 text-center">
                {point.title}
              </div>
              <div className="text-gray-700 text-base text-center">
                {point.desc}
              </div>
            </li>
          ))}
        </ul> */}
        <div className="mt-12 text-center">
          <span className="inline-block px-8 py-3 rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 text-white font-bold text-lg shadow-lg tracking-wide hover:scale-105 transition-transform">
            Your journey, our passion.
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
