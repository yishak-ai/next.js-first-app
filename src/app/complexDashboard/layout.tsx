export default function ComplexDashboardLayout({
  children,
  notification,
  revinueMetrics,
  user,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  revinueMetrics: React.ReactNode;
  user: React.ReactNode;
}) {
  return (
    <div className=" py-4 px-5 bg-slate-100 mb-10 flex flex-col gap-2">
      <div className=" bg-slate-200 py-10 flex-1">{children}</div>
      <div className=" bg-slate-200 flex p-3 gap-1 ">
        <div className="flex flex-col flex-auto w-1/3  gap-1">
          <div className="flex-1 ">{revinueMetrics}</div>
          <div className="flex-1 ">{user}</div>
        </div>
        <div className="flex-auto row-span-2 w-2/3">{notification}</div>
      </div>
    </div>
  );
}
