import { SnakeBeam } from '../_components/snake-beam';

export default async function Landing() {
  return (
    <>
      <div className="h-[40rem] w-full bg-background dark:bg-grid-white/[0.1] bg-grid-black/[0.1] lative flex items-center justify-center">
        {/* radial-gradient 적용 (희미한 느낌)*/}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,white_5%,transparent_20%)]"></div>
        <div className="w-full max-w-screen-md">
          <SnakeBeam className="-translate-y-1" />
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
            이창우
          </p>
        </div>
      </div>
    </>
  );
}
