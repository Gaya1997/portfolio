import TypewriterComponent from "typewriter-effect";
import type {
  Heading as IHeading,
  Contact,
  i18nKeys,
} from "@/types/profile.interface";
import BoxSpotlight from "@/components/BoxSpotlight";
import TextSpotlight from "@/components/TextSpotlight";
import { motion, useAnimationControls, type Variants } from "motion/react";
import { useCallback } from "react";
import Button from "@/components/Button";
// import Socials from "@/components/Socials";
import Image from "@/components/Image";
import linkedInLogo from "@/assets/icons/linkedin.svg";

const parentVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const childrenVariant: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

interface HeadingProps extends IHeading {
  contact: Contact;
  i18nKeys: i18nKeys;
  aboutMeId?: string;
}

const HeaderSection = ({
  id,
  name,
  intro,
  titles,
  contact,
  aboutMeId,
  i18nKeys,
}: HeadingProps) => {
  const animationControls = useAnimationControls();

  const handleSpotlightAnimationEnd = useCallback(() => {
    // console.log("[LOG] Spotlight animation ended");
    animationControls.start("animate");
  }, [animationControls]);

  return (
    <section
      id={id}
      className="h-[100dvh] mx-5 md:mx-10 3xl:mx-40 pt-[80px] md:pt-[118px] 3xl:p-0 flex flex-col 3xl:items-center"
    >
      <div className="flex flex-col h-full 3xl:justify-center">
        <div className="h-fit flex flex-col gap-4 md:gap-6 items-start">
          <div className="items-center md:items-start flex flex-col gap-3 w-full">
            <BoxSpotlight
              className="flex items-center group w-[150px] md:w-[175px] 3xl:w-[225px] aspect-square rounded-full shadow-2xl"
              spotLightColor="var(--color-cardBg1Spotlight)"
            >
              <Image
                src="/images/profile-pic.jpg"
                className="z-0 w-[125px] md:w-[150px] 3xl:w-[200px] aspect-square object-cover object-center rounded-full border-4 border-primary-foreground"
                draggable={false}
                alt="profile picture"
              />
            </BoxSpotlight>
            <TextSpotlight
              spotlightSize={200}
              className="text-4xl md:text-6xl 3xl:text-8xl font-semibold"
              shouldAnimateOnView
              onAnimationEnd={handleSpotlightAnimationEnd}
            >
              {name}
            </TextSpotlight>
          </div>
          <motion.div
            className="flex flex-col gap-2 3xl:gap-4"
            initial="initial"
            animate={animationControls}
            variants={parentVariant}
          >
            <motion.div
              className="flex text-xl 3xl:text-3xl text-quaternary-foreground"
              variants={childrenVariant}
            >
              <TypewriterComponent
                options={{
                  cursor: "|",
                  strings: titles.map((title) => title.toUpperCase()),
                  deleteSpeed: 10,
                  delay: 50,
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <motion.p
              className="text-md 3xl:text-2xl 3xl:max-w-[75%]"
              variants={childrenVariant}
            >
              {intro}
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row gap-4 items-center mt-4"
              variants={childrenVariant}
            >
              <div className="max-md:w-full flex gap-4 items-center">
                <Button
                  variant="stroke"
                  className="max-md:w-full 3xl:text-lg 3xl:px-5 3xl:py-3"
                  as="a"
                  href={`mailto:${contact.email}`}
                  aria-label="Contact Me"
                >
                  {i18nKeys.contactMe}
                </Button>
                <Button
                  variant="solid"
                  className="max-md:w-full 3xl:text-lg 3xl:px-5 3xl:py-3"
                  as="a"
                  href={`#${aboutMeId}`}
                  aria-label="About Me"
                >
                  {i18nKeys.experience}
                </Button>
              </div>
              {contact.socials.linkedin && (
                <Button
                  as="a"
                  className="text-sm 3xl:text-base font-normal"
                  variant="ghost"
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <img
                    src={linkedInLogo}
                    className="w-6 h-6"
                    alt="linkedIn logo"
                  />
                  <span>{i18nKeys?.linkedIn}</span>
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* <Socials
        className="w-full md:flex mb-2 mt-auto justify-center md:justify-end 3xl:justify-center"
        i18nKeys={i18nKeys}
        buttonClassName="max-md:[&>span]:hidden opacity-50 hover:opacity-100"
        {...contact}
      /> */}
    </section>
  );
};

export default HeaderSection;
