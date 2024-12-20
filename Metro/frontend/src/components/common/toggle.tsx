const Toggle = ({ onClickCallback }: { onClickCallback: () => void }) => {
    return ( <>
        <div>
			<input onClick={onClickCallback} type="checkbox" id="theme-toggle" className="hidden"/>
			<label htmlFor="theme-toggle" className="theme-toggle"></label>
		</div>
    </> );
}
 
export default Toggle;