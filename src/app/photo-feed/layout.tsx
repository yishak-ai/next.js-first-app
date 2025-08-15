export default function WenderLayout({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) {
  return (
    <>
      {children}
      {model}
    </>
  );
}
