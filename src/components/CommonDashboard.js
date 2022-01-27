
import doctorsList from "./../assets/doctors.json";

import Doctor from "./Doctor";
import Dropdown from "react-dropdown";
import DropdownButton from "react-dropdown";
import ReactPaginate from "react-paginate";
import { useState } from "react";

import "./CommonDashboard.css"

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>

function CommonDashboard(){

    
    const[items, setItems]=useState(doctorsList["doctors"]);

    const[selectedOption, setSelectedOption]=useState(0);
    const [pageNumber, setPageNumber]= useState(0);
    const itemsPerPage = 4
    const [opt, setOpt] = useState('name');
    const [order, setOrder] = useState(true);
    const [incdec, setIncdec] = useState('Decreasing Order');

    if (order){
      items.sort((a,b)=>a[opt]>b[opt]?1:-1);
    }else{
      items.sort((a,b)=>a[opt]<b[opt]?1:-1);
    }
    //items.sort((a,b)=>a[opt]>b[opt]?1:-1);
    const pagesVisited = pageNumber*itemsPerPage


    // console.log(items.length, displayItems)
    
    const displayItems=items.slice(pagesVisited, pagesVisited+itemsPerPage).map((doc)=>
    <Doctor docData={doc}/>)


    const PageCount = Math.ceil(items.length / itemsPerPage);
    const changePage = ({selected})=>{
        setPageNumber(selected);
    };

    const options = ["f_name", "l_name", "email", "user_name", "city", "state", "specialization", "year_of_exp"]
    const options1 = {
      "f_name":"First Name", "l_name":"Last Name", "email":"Email", "user_name":"User name", "city":"City", "state":"State", "specialization":"Specialization", "year_of_exp":"Years Of Experience"
    }
    const defaultOption = selectedOption;
    //console.log(options1.values())
    const selectedOptionHandler = (e)=>{

      setSelectedOption(e.value)
      setOpt(e.value)

    }

    //console.log(items)
    if(items.length===0){
      return(
        <h1>No items found</h1>
      )
    }

    //<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>


    const changeOrder = (e)=>{
      
      if(order){
        setIncdec("Increasing order")
      }else{
        setIncdec("Decreasing order")
      }
      setOrder(!order);
    }

    return (

        <div>
          
          <center>
          <h1>Choose your Doctor 🩺</h1>
          <div style={{ width:"150px", padding:"5px"}}>
              <Dropdown options={options} onChange={selectedOptionHandler} value={defaultOption} placeholder="Sort By" />
          </div>
          <button style={{ padding:"5px 10px", margin:"10px", backgroundColor:"cyan", color:"black", border:"0px", borderRadius:"10%" }} type="button" className="btn btn-primary" onClick={changeOrder} >{incdec}</button>
          </center>
            
            {displayItems}
            <br/>
            <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={PageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}/>
        </div>

    );


}

export default CommonDashboard;


/*

<label htmlFor="sortOption" style={{ fontSize:"large", fontWeight:"700" }}>Sort By </label>
          <form id="sortOption" >
            <select value={defaultOption} onChange={selectedOptionHandler}>
              <option value="name">{options[0]}</option>
              <option value="description">{options[1]}</option>
              <option value="price">{options[2]}</option>
            </select>
          </form>

*/



/*


constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

const component1 = () => <Text>Hello</Text>
const component2 = () => <Text>World</Text>
const component3 = () => <Text>ButtonGroup</Text>

render () {
  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
  const { selectedIndex } = this.state
  return (
    <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 100}} />
  )
}



            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Name</a>
                <a class="dropdown-item" href="#">Location</a>
                <a class="dropdown-item" href="#">Charge Fee</a>
            </div>

            </div>


          <Dropdown className="Dropdown-root" options={options} onChange={()=>selectedOptionHandler} value={defaultOption} placeholder="Select an option" arrowClassName="Dropdown-arrow" />

          <DropdownButton id="dropdown-basic-button" placeholder="Select an option" title="Dropdown button" onSelect={selectedOptionHandler}>
            <Dropdown.Item >Action</Dropdown.Item>
            <Dropdown.Item >Another action</Dropdown.Item>
            <Dropdown.Item >Something else</Dropdown.Item>
          </DropdownButton>



*/