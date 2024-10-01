import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px]s items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <div className=""><button className="btn btn-secondary">hhhh</button></div>
    // </div>
    <div className="sm:container mx-auto">
      <div className="lg:mx-6">
        <Header/>
        <Main />
        <Footer/>
      </div>
    </div>
  );
}
