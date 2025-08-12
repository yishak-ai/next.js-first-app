import { notFound } from "next/navigation";

// nested dynamic routing
export default async function Reviews({params,}: {params:Promise<{reviewId:string; productId:string}>})
{
     const {productId, reviewId} = await params
     if(parseInt(reviewId)>100){
      notFound();
     }
    return (
    <div className="bg-slate-300  flex flex-center justify-center" >
       this Review {reviewId} is the nested in dynamic product {productId} rout
    </div>
  )
}

