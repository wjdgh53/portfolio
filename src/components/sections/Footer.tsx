import { personal } from '../../data/personal';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-bg border-t border-black/5 text-center">
      <p className="font-medium text-sm text-muted">
        © {new Date().getFullYear()} {personal.name}. Built with React & Tailwind.
      </p>
    </footer>
  );
}
