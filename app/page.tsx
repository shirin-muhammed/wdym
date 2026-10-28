import { Logo } from "./Logo";

export default function Home() {
  return (
    <main className="home">
      <Logo />
      <p className="tagline">Fresh fish, cleaned and delivered.</p>
      <p className="soon">Launching soon · wdym.in</p>
    </main>
  );
}
