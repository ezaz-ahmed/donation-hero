import Link from "next/link";
import Button from "~/components/ui/Button";

export default function Home() {
  return (
    <section className="relative bg-bg bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r" />

      <div className="relative flex mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex min-h-screen items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-balance text-black">
            Become the hero of someone&apos;s story
            <strong className="block font-extrabold text-daisyBush text-balance">
              Donate now.
            </strong>
          </h1>

          <p className="my-4 max-w-lg sm:text-xl/relaxed text-balance text-black">
            Together, as heroes united, we hold the power to change lives.
            Embrace generosity and donate now, igniting hope for a brighter
            future.
          </p>

          <Link href="/login" className="">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
