import { notFound } from "next/navigation";

// nested dynamic routing  with error handling
export function errorHandling(count: number) {
  return Math.floor(Math.random() * count);
}
export default async function Reviews({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { productId, reviewId } = await params;
  const errorNumber = errorHandling(2);
  if (errorNumber === 1) {
    throw new Error("random number of reiewid is 1");
  }
  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div className="bg-slate-300  flex flex-center justify-center">
      this Review {reviewId} is the nested in dynamic product {productId} rout
    </div>
  );
}
