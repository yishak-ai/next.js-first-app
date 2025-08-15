export const metadata = {
  title: "blog second",
};
export default async function Second() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("initaing delay");
    }, 3000);
  });
  return (
    <>
      <div>
        <h1>greeting </h1>
        <p>how are you second</p>
      </div>
    </>
  );
}
