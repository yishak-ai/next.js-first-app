import Link from "next/link";

export default function Products() {
  const ProductId = 100;
  return (
    <>
      <div className="bg-slant-300 text-lg flex-col flex item-center justify-center ">
        <h1>products list</h1>
        <ul className="flex flex-col justify-center p-3 m-4 bg-red-200">
          <Link href="/products/1">product 1</Link>
          <Link href="/products/2">product 2</Link>
          <Link href="/products/50">product 50</Link>
          <Link href={`/products/${ProductId}`}>product {ProductId} </Link>
        </ul>
      </div>
    </>
  );
}
