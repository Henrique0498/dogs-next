import ContaHeader from "@/components/Conta/Header";

export default async function ContaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <ContaHeader />

      {children}
    </div>
  );
}
