import React, { useState } from 'react';
import './footbal.css';

const Footbal = () => {
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(0);
	const [position, setPosition] = useState({
		x: -25,
		y: 120,
	});

	let topMove = () => {
		if (position.y >= 0) {
			setPosition({ ...position, y: position.y - 10 });
		}
		if (position.y <= 0) {
			setPosition({ ...position, y: 120 });
		}
	};

	let bottomMove = () => {
		if (position.y <= 240) {
			setPosition({ ...position, y: position.y + 10 });
		}
		if (position.y >= 250) {
			setPosition({ ...position, y: 120 });
		}
	};

	let leftMove = () => {
		if (position.x >= -300) {
			setPosition({ ...position, x: position.x - 10 });
		}
		if (position.x <= -300) {
			setPosition({ ...position, y: 120, x: -25 });
		}
		if (position.x < -304) {
			setLeft((e) => e + +1);
		}
	};

	let rightMove = () => {
		if (position.x <= 245) {
			setPosition({ ...position, x: position.x + 10 });
		}
		if (position.x >= 245) {
			setPosition({ ...position, y: 120, x: -25 });
		}
		if (position.x > 244) {
			setRight((e) => e + 1);
		}
	};

	return (
		<div className="wrapper">
			<div className="scope">
				<span>left: {left}</span>
				<span>right: {right}</span>
			</div>
			<div className="field">
				<img
					style={{
						transform: `translate(${position.x}px, ${position.y}px)`,
					}}
					src={require('./ball.webp')}
					alt=""
					width={50}
					height={50}
				/>
				<div className="gates">
					<div className="left-gater gater"></div>
					<div className="center"></div>
					<div className="right-gater gater"></div>
				</div>
			</div>
			<div className="btnAll">
				<button onClick={() => topMove()}>top</button>
				<button onClick={() => rightMove()}>right</button>
				<button onClick={() => bottomMove()}>botton</button>
				<button onClick={() => leftMove()}>left</button>
			</div>
		</div>
	);
};

export default Footbal;
