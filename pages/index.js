import Header from "./../components/Header.js";
import Footer from "./../components/Footer.js";
import Title from "./../components/Title.js";

export default function Home() {
  const Body = () => {
    return (
      <>
        <div className="flex-grow"></div>
      </>
    );
  };

  return (
    <>
      <Title title="Website" />
      <div className="flex flex-col h-screen">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}
