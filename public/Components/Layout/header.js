import Link from 'next/link';

const path = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'Blog', id: 2, path: 'Blog' },
  { uid: 41, name: 'About', id: 3, path: 'About' }
];
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <li key={value.uid}>
                <Link href={value.path}>
                  {value.name} 
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
