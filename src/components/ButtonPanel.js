const ButtonPanel = (props) => {
	return (
		<div className="button-panel">
			{props.buttons.map(({ onClick, text }) => (
				<button onClick={onClick} key={text}>
					{text}
				</button>
			))}
		</div>
	);
};

export default ButtonPanel;
