import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./counter";

//create your first component
const Home = ({digito}) => {
	return (
		<div className="text-center">
			<Counter digito={digito}/>
		</div>
	);
};

export default Home;
