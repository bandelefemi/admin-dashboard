import React from 'react'
import ReactDOM from 'react-dom/client'
// import _ from 'lodash'









/*
const chars = tests.split(" ")
for (var i=0; i<chars.length; i++){
	chars[i] = chars[i].charAt(0).toUpperCase() + chars[i].slice(1)

	const final = chars.join(" ")
	
}
const final = chars.join(" ")
console.log(final)

*/


function App(){
	
	
	
/*

// class based component

	class Header extends React.Component {
		constructor(props) {
		    super(props)
		}
		
		
		render() {
			return(
				<header>
					<div className="header-wrapper">
						<h1>30 days of react</h1>
						<h2>Getting started with react</h2>
						<h3>Javascript library</h3>
						<p>Bandele Femi</p>
						<small>june 6, 2022</small>
					</div>
				</header>
			)
		}
	}

*/

	const [val, setVal] = React.useState(0)

	function addVal(){
		setVal(prevVal => prevVal+1)
	}

	function subVal(){
		setVal(prevVal => prevVal-1)
	}

	return(
		<div>
			
			<button onMouseEnter={subVal}> - </button>
			<span> {val} </span>
			<button onClick={addVal}> + </button>


		</div>
	)
	
	
   
   
   
   
   

   
   
   
   /*
   _____________________________________________________________________________________
	
		const getAvg =(products)=> _.mergeWith({}, ...products, (a,b) =>{
			if(_.isNumber(b)) {
				return ((b || 0) / products.length) + (_.isNumber(a)? (a || b) : 0)
			}
		})
		
		const result1 = getAvg(products)
		
		console.log(result1.ratings)
		
	*/	
		
	
 
	   
	   
	
	
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<App />
)