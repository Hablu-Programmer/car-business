const App = () => {
  return (
    <main className="w-full max-w-[1200px] mx-auto px-[30px]">
      <nav className="flex justify-end items-center py-[25px]">
        <a href="/login">
          <button className="flex justify-center items-center gap-2.5 font-semibold text-sm text-foreground">
            <img src="/icons/auth.png" alt="Sign Up Icon" /> Sign Up
          </button>
        </a>
      </nav>
      <section className="min-h-svh w-full flex justify-center items-center">
        <h1 className="text-5xl font-bold text-green-500">Hello World</h1>
      </section>
    </main>
  );
};

export default App;
