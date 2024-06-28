import Link from 'next/link';

const Home = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10">
			<h1>Welcome to the Home Page</h1>
			<nav>
				<ul>
					<li><Link href="/login">login </Link></li>
					<li><Link href="/leaderboard"> leardboard</Link></li>
				</ul>
			</nav>
		</main>
	);
};

export default Home;
