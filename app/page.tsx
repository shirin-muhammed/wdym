import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 text-center">
      <Image src="/logo.svg" alt="WDYM" width={420} height={202} priority />
      <p className="text-xl">Fresh fish, cleaned and delivered.</p>
      <p className="text-sm opacity-60">Launching soon · wdym.in</p>
    </main>
  );
}
