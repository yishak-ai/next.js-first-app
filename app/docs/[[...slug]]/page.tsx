export default async function({params} : {params: Promise<{slug: string[]}>}){
    const {slug} =  await params;
    if(slug?.length === 2){
        return(
                  <p>this features {slug[0]} content is {slug[1]} </p>
  
        )
    }
    else if(slug?.length === 1){
        return(
                 <p> this is the feacture {slug[0]}</p>
   
        )
    }
}