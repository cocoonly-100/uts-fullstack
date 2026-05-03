export default async function SlowPage() {
  await new Promise(a => setTimeout(a, 3000));
  return <div>Slow content</div>;
}