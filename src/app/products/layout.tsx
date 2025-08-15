export const metadata = {
  title: "Product Layout",
};
export function generateError(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ProdeuctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const errorNumber = generateError(2);
  if (errorNumber === 1) {
    throw new Error("random number of product error");
  }
  return (
    <>
      <h1>Product Layout</h1>
      {children}
    </>
  );
}
