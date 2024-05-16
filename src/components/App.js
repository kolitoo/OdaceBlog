import Footer from './Footer'
import Articles from './Articles'

function App() {
	return (
		<div>
			<header>
				<h1 className='lmj-title' style={{textAlign: 'center'}}>ODACE Blog</h1>
			</header>
			<body>
				<div>
					<Articles />
				</div>
			</body>
			<Footer />
		</div>
	)
}

export default App