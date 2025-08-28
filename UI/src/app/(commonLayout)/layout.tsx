import Navbar from "@/components/Navbar/Navbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
      <div>{children}</div>
   
    </>
  );
};

export default CommonLayout;