export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-primary h-full w-full border-2 p-4">
      <p>{year} Aaron Mullan</p>
    </footer>
  );
}
