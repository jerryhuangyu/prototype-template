import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen w-full items-center justify-center flex">
			<h1>Vite + React</h1>
			<div className="card">
				<button
					type="button"
					className="bg-green-300 rounded px-2 py-1"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
			</div>
		</div>
	);
}

export default App;
