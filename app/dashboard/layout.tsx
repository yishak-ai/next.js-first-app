

export default function DashbordLayout({children} : {children:React.ReactNode}){
    return(
      <div className="flex " >
        <aside className="h-screen w-1/4 bg-slate-700 p-4 scroll-mr-72 scroll-smooth" >
         <a className="text-slate-400 bg-slate-600 py-2 no-underline px-4 rounded-md hover:text-slate-50 cursor-pointer hover:shadow-xl shadow-slate-400 hover:translate-x-2 hover:duration-500 hover:delay-700" href="/products">SideBar</a>
         </aside>
        {children}
      </div>
    )
}