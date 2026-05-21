export default function Home() {
  return (
    <main>
      <section>
        <p className="eyebrow">Hostlet deploy test</p>
        <h1>Next Test Website</h1>
        <p>
          This small Next.js app exists to verify Hostlet can clone a GitHub repo,
          generate a Docker build, run health checks, and serve the app locally.
        </p>
        <p className="status">Auto-deploy smoke test: May 21, 2026</p>
      </section>
    </main>
  );
}
