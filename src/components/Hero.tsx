"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function Hero() {
  // Use local images from the public folder (need to copy assets to public folder)
  const baseImages = [
    "/assets/apartment-building.jpg",
    "/assets/bgimage.png",
    "/assets/hero-building.jpg",
    "/assets/luxury-interior.jpg",
    "/assets/modern-home.jpg",
    "/assets/office-interior.jpg",
    "/assets/office-lobby.jpg",
    "/assets/penthouse-view.jpg",
    "/assets/team-meeting.jpg",
    "/assets/villa-exterior.jpg"
  ];

  // If we need more images, repeat the array until we have enough
  const images = [];
  const targetCount = 31; // Same as the original count
  
  for (let i = 0; i < targetCount; i++) {
    images.push(baseImages[i % baseImages.length]);
  }
  
  return (
    <div
      className="relative mx-auto my-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-none">
      <h2
        className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        This is your life and it&apos;s ending one{" "}
        <span
          className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          moment
        </span>{" "}
        at a time.
      </h2>
      <p
        className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        You are not your job, you&apos;re not how much money you have in the
        bank. You are not the car you drive. You&apos;re not the contents of
        your wallet.
      </p>
      <div
        className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Join the club
        </button>
        <button
          className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Read more
        </button>
      </div>
      {/* overlay */}
      <div
        className="absolute inset-0 z-10 h-full w-full bg-black/50 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images} />
    </div>
  );
}