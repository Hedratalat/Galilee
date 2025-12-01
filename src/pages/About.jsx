import Navbar from "../Navbar/Navbar";
// import video from "../assets/about.mp4";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function About() {
  // لا نعمل أي أنيميشن للفيديو و الـ title
  // فقط العناصر تحتهم
  const [whoRef, whoInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [paraRef, paraInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [item1Ref, item1InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [item2Ref, item2InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [item3Ref, item3InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = (inView) =>
    useSpring({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 30,
      config: { tension: 200, friction: 25 },
    });

  return (
    <>
      <Navbar />

      {/* Hero Video بدون أنيميشن */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden mt-0">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white/90 text-4xl sm:text-6xl font-bold font-poppins tracking-wide">
            About Us
          </h2>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 sm:px-20 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <animated.h2
            ref={whoRef}
            style={fadeUp(whoInView)}
            className="text-3xl sm:text-4xl font-bold text-darkBlue font-poppins mb-6"
          >
            Who We Are
          </animated.h2>

          <animated.p
            ref={paraRef}
            style={fadeUp(paraInView)}
            className="text-gray-700 text-lg leading-relaxed font-poppins mb-8"
          >
            We are a leading notebook and stationery brand focused on delivering
            high-quality products that combine creativity, durability, and
            modern design. Our mission is to provide you with tools that inspire
            you to write, dream, and create.
          </animated.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10">
          <animated.div
            ref={visionRef}
            style={fadeUp(visionInView)}
            className="bg-gray-50 p-8 rounded-3xl shadow-inner"
          >
            <h3 className="text-2xl font-bold text-blue font-poppins mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed font-poppins">
              To become the go-to brand for stationery lovers by crafting unique
              designs and premium materials that elevate your writing
              experience.
            </p>
          </animated.div>

          <animated.div
            ref={missionRef}
            style={fadeUp(missionInView)}
            className="bg-gray-50 p-8 rounded-3xl shadow-inner"
          >
            <h3 className="text-2xl font-bold text-orange font-poppins mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed font-poppins">
              We aim to blend style with functionality through products designed
              with attention to detail, ensuring every notebook inspires your
              creativity.
            </p>
          </animated.div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 text-center">
          <animated.h2
            ref={whyRef}
            style={fadeUp(whyInView)}
            className="text-3xl font-bold text-darkBlue font-poppins mb-8"
          >
            Why Choose Us?
          </animated.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <animated.div
              ref={item1Ref}
              style={fadeUp(item1InView)}
              className="bg-white shadow-lg p-8 rounded-3xl"
            >
              <h3 className="text-xl font-semibold text-blue font-poppins mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600 font-poppins">
                We use high-grade materials to ensure long-lasting, durable
                notebooks.
              </p>
            </animated.div>

            <animated.div
              ref={item2Ref}
              style={fadeUp(item2InView)}
              className="bg-white shadow-lg p-8 rounded-3xl"
            >
              <h3 className="text-xl font-semibold text-orange font-poppins mb-2">
                Modern Designs
              </h3>
              <p className="text-gray-600 font-poppins">
                Trendy, elegant, and creative designs for every style.
              </p>
            </animated.div>

            <animated.div
              ref={item3Ref}
              style={fadeUp(item3InView)}
              className="bg-white shadow-lg p-8 rounded-3xl"
            >
              <h3 className="text-xl font-semibold text-darkBlue font-poppins mb-2">
                Fast Support
              </h3>
              <p className="text-gray-600 font-poppins">
                We're always here to help—customer satisfaction is our priority.
              </p>
            </animated.div>
          </div>
        </div>
      </section>
    </>
  );
}
