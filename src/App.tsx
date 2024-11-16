import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex min-h-screen w-full items-center justify-center">
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" className="rounded bg-green-300 px-2 py-1" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</div>
	);
}

export default App;
