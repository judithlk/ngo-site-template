export default function Wrapper({ children }: { children: any }) {
  return (
    <>
      <main className="h-screen w-screen bg-gradient-to-br from-white to-midblue m-0 p-5 flex items-center">
        <div className="w-[84%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-fit m-auto shadow-xl p-7 sm:p-10 lg:p-16 bg-midblue space-y-8">
          {children}
        </div>
      </main>
    </>
  );
}
