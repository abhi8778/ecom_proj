import Footer from "./Atoms/Footer";
import Navbar from "./Atoms/Navbar";
import HomeComp from "./Molecules/Home/Home";
import StoreProvider from "./StoreProvider";
import Login from "./login/page";

export default function Home() {
  return (
    <StoreProvider>
      <main>
        <Login />
      </main>
    </StoreProvider>
  );
}
