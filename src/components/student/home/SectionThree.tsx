function SectionThree() {
  return (
    <div className=" w-full md:h-[70vh] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
        <div className="w-full h-full flex justify-end">
          <div className="relative w-10/12 h-5/6">
            <div className="absolute h-20 w-20 pt-2">
              <div className="rounded-full w-12 h-12 bg-[#F3AC50]"></div>
            </div>
            <div className="absolute flex flex-col py-3 px-2">
              <h3 className="font-bold text-3xl leading-10 text-[#2F327D] pb-6">
                Everything you can do in a physical classroom,{" "}
                <span className="text-[#F48C06]">you can do with EduVista</span>
              </h3>
              <p className=" pr-10 text-[#2F327D]">
                EduVista revolutionizes online learning by seamlessly
                replicating the full spectrum of a physical classroom
                experience. With our platform, you can engage in dynamic group
                discussions through our intuitive group chat feature, ensuring
                collaborative learning akin to traditional classrooms. Capture
                and organize your insights effortlessly with our advanced
                note-taking tools, personalizing your educational journey.
              </p>
              <h6 className=" py-2 text-[#2F327D] underline cursor-pointer font-medium">
                Learn more
              </h6>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="relative w-3/5 h-5/6">
            <div className="absolute  h-2/6 w-1/6 px-2 py-3">
              <div className="bg-[#23BDEE] rounded-lg  h-full w-full"></div>
            </div>
            <div className="absolute bottom-0 px-2 py-3 right-0  h-3/6 w-3/12">
              <div className="bg-[#F3AC50] rounded-lg  h-full w-full"></div>
            </div>
            <div className="absolute inset-0 mx-auto my-auto overflow-hidden bg-green-400 h-5/6 w-11/12 rounded-lg">
              <img
                src="/banners/students group.jpg"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
