// app/products/[productId]/page.tsx
import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = params.productId; 

  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100); 
  });

  return {
    title: `Product ${title}`,
  };
}

export default function ProductDetail({ params }: Props) {
  return (
    <div>
      This is product id page {params.productId}
    </div>
  );
}
