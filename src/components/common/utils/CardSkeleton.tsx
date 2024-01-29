function CardSkeleton() {
  return (
    <div className="md:w-auto  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full block cursor-pointer rounded-lg   bg-white overflow-hidden relative group">
      {/* <div className="border border-slate-400 shadow rounded-md p-4 max-w-sm  h-auto w-60 mx-3 md:min-w-[270px]"> */}
      <div className="animate-pulse flex flex-col space-x-4">
        <div className="rounded-sm bg-slate-400 h-44 w-full"></div>
        <div style={{ margin: "0px" }} className=" space-y-6 py-4 px-2">
          <div className="h-2 bg-slate-400 rounded"></div>
          <div className="space-y-3 px-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-400 rounded col-span-2"></div>
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
