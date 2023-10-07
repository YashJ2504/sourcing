import Link from 'next/link'

const Layout = () => {
  return (
    <>
		<nav>
			<ul>
			<li>
				<Link href="/Home">Home</Link>
			</li>
			<li>
				<Link href="/Blogs">Blogs</Link>
			</li>
			</ul>
		</nav>
    </>
  )
};

export default Layout;