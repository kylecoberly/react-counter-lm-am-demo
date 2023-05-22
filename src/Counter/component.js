import './style.css';
import { useState } from "react"
import CounterDisplay from '../CounterDisplay';
import Button from '../Button';

function Counter() {
	// const $button = document.querySelector("button")
	// $button.addEventListener("click", () => {
	// 	console.log("Handle click")
	// })

	// let count = 9
	const [count, setCount] = useState(2)

	const clickHandler = () => {
		// count++
		setCount(count + 2)
	}

	const prompts = ["Increment", "Mas", "Git 'r up there hoss"]
	const $buttons = prompts.map(prompt => {
		return <Button key={prompt} action={clickHandler} text={prompt} />
	})

	return (
		<div className="Counter">
			<p className="description">Current count:</p>
			<CounterDisplay count={count} />
			{$buttons}
		</div>
	);
}

export default Counter
