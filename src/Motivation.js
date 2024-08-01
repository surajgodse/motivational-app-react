import { useState, useEffect } from "react";
import axios from "axios";

function Motivation()
{

	const [msg, setMsg] = useState("");
	const [aut, setAut] = useState("");

	const gm = (event) =>{
			
		let url = "https://quotes-api-self.vercel.app/quote";
		axios.get(url)
		.then(res =>{
			setMsg(res.data.quote);
			setAut(res.data.author);
		})
		.catch(err => alert("issue" + err));
	}
    // Fetch initial quote and start interval on component mount
    useEffect(() => {
        gm(); // Fetch initial quote
        const interval = setInterval(gm, 10000); 
        return () => clearInterval(interval); 
    }, []);

return(
<>
<center>
	<h1> Inspiration Hub </h1>
	<br/>
	<h2> { msg } </h2>
	<h2 id="author-name">{aut}</h2>
	<br/><br/><br/><br/><br/>
	<h3> App created by Suraj Godse </h3>
</center>
</>




);

}

export default Motivation;

