export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-10">
      <h1 className="text-xl font-semibold">John Doe</h1>
      <nav className="space-x-4">
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
