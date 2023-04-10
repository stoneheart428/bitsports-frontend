import Image from "next/image";
import Banner from "@/public/banner2.png";
import { Button, Header } from "@/components";
import Pagination from "@/components/Pagination";
import QuestComponent from "@/components/Quest";
import { Lock } from "@/public/icons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto">
        <div className="banner w-full relative mt-5 xl:mt-0">
          <div className="win relative" />
          <div className="flex flex-col justify-center items-center relative banner-text">
            <h2 className="text-white mb-4 font-bold text-xl px-8 pt-4 xl:pt-0 xl:px-0 xl:text-6xl xl:text-4xl text-center font-Poppins">
              WORLD FIRST PLAY-TO-EARN POOL GAME
            </h2>
            <Button px="px-4" text="Play Bit Pool Web" />
          </div>
        </div>
      </div>

      <section className="px-3 xl:px-0 mt-6 xl:mt-0 xl:container xl:mx-auto">
        <h3 className="xl:text-2xl text-xl text-white font-bold ">QUESTS</h3>
        <p className="text-secondary-200 xl:text-sm text-xs">
          Accept and play some of the below F2E (Free to Earn) modes, earn $BITP
          and other Crypto
        </p>

        <div className="mt-5 xl:gap-11 flex w-full flex-col xl:flex-row  items-start justify-between">
          <div className="flex w-full flex-col gap-2">
            {[1, 2, 3, 4].map((item, index) => (
              <QuestComponent key={index} index={index} />
            ))}
            <div className="hidden xl:block">
              <Pagination />
            </div>
          </div>
          <Image
            priority={true}
            width={465}
            src={Banner}
            alt="pool banner"
            className="hidden xl:block cursor-pointer"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="xl:hidden">
          <Pagination />
          <div className="mt-4">
            <div className="flex items-center justify-center">
              <Lock />
            </div>
            <Image
              priority={true}
              height={267}
              src={Banner}
              alt="pool banner"
              className="xl:hidden cursor-pointer w-full"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
