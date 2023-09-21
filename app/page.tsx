import ComputersCanvas from "@/components/canvas/Computer";

export default function Home() {
  return (
    <>
      <section className="w-full h-full grid items-center">
        <h1 className="text-5xl text-center">Mahrus Rohisyam</h1>
        <p className="text-3xl text-center">
          Under construction👷👷‍🔨🔥🔥 Stay tuned!
        </p>
        <ComputersCanvas />
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <div className="mockup-code snap-center">
          <pre data-prefix="1">
            <code>Tunning...</code>
          </pre>
          <pre data-prefix="2">
            <code>installing...</code>
          </pre>
          <pre data-prefix="3" className="bg-warning text-warning-content">
            <code>Error!</code>
          </pre>
        </div>
      </section>
    </>
  );
}
