import Cart from "./components/Cart";
import MenuList from "./components/MenuList";

export default function Home() {
  return (
    <main className=" w-full bg-rose-50 min-h-screen grid sm:grid-cols-3 grid-cols-1 p-8 sm:py-[100px] sm:px-12 items-center sm:items-start justify-center">
      <MenuList />
      <Cart />
    </main>
  );
}
