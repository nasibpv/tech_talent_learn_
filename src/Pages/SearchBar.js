import {React,useState} from 'react'
import '../style/SearchBar.css'
function SearchBar({ onChildData }) {
    const [inputValue, setInputValue] = useState('');
    onChildData(inputValue)
    // onTrigger = (event) => {
    //     // Call the parent callback function
    //     this.props.parentCallback(
    //         event.target.myname.value
    //     );
    //     event.preventDefault();
    // };
  return (
<div >
<div class="search-container">
    <input type="text" id='sreach' class="search-input" placeholder="Search..." value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
    <i class="bi bi-search search-icon" id='search'></i>
  </div>
</div>
  )
}

export default SearchBar