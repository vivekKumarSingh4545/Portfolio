import FadeIn from './FadeIn';


const SERVICES = [
  {
    number: '01',
    title: 'Full Stack Development',
    description:
      'Building scalable, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with secure authentication and modern UI.',
  },
  {
    number: '02',
    title: 'Real-Time Systems',
    description:
      'Designing low-latency, real-time multiplayer features and chat systems using Socket.IO and WebRTC with high concurrent user support.',
  },
  {
    number: '03',
    title: 'Competitive Programming',
    description:
      'Strong algorithmic thinking and problem-solving skills, with over 600+ DSA problems solved on platforms like LeetCode and CodeChef.',
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description:
      'Designing clean, intuitive interfaces that prioritise user flow, hierarchy, and visual clarity — turning ideas into experiences people actually enjoy using.',
  },
  {
    number: '05',
    title: 'API & Payment Integration',
    description:
      'Developing scalable, secure RESTful APIs and seamlessly integrating third-party services like Razorpay for payments and Brevo SMTP for communications.',
  },
  {
    number: '06',
    title: 'Cloud Deployment & DevOps',
    description:
      'Containerizing applications using Docker for consistent environments and deploying robust full-stack applications to platforms like Vercel and Render.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#D7E2EA] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(215, 226, 234, 0.15)',
                ...(i === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#D7E2EA] leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
                <h3
                  className="font-medium uppercase text-[#D7E2EA] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#D7E2EA]/60 transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="font-light leading-relaxed text-[#D7E2EA] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
