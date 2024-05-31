export default function Wrapper({children}:{children:any}) {
  return (
    <>
      <main className="h-screen w-screen bg-gradient-to-br from-white to-midblue m-0 p-5 flex items-center">
        {children}
      </main>
    </>
  );
}
