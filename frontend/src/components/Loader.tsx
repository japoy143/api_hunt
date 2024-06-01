function MyListLoader() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className=" bg-bgwhite h-40 w-full mt-4 rounded-md"
        ></div>
      ))}
    </>
  );
}

export default MyListLoader;
