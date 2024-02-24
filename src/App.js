
import './App.css';
import { useEffect, useState } from 'react';
import { PostCard } from './components/PostCard';
import { MdVerified } from "react-icons/md";
import { SideBar } from './components/SideBar';

function App() {

  const initialList = [
    { "text": "Just watched an amazing basketball game!", "tags": "#NBA #basketball #exciting", "location": "Chennai", "time": 1, "isSelected": false },
    { "text": "Caught up on the latest blockbuster movie!", "tags": "#movie #action #entertainment", "location": "Goa", "time": 2, "isSelected": false },
    { "text": "Attended a concert of my favorite band!", "tags": "#music #concert #friends", "location": "Himalayas", "time": 3, "isSelected": false },
    { "text": "Exploring the newest tech gadgets today!", "tags": "#tech #gadgets #innovation", "location": "New York", "time": 4, "isSelected": false },
    { "text": "Just finished a thrilling mystery novel!", "tags": "#books #reading #mystery", "location": "Los Angeles", "time": 5, "isSelected": false },
    { "text": "Trying out a new recipe from a famous chef!", "tags": "#foodie #cooking #delicious", "location": "Rome", "time": 6, "isSelected": false },
    { "text": "Celebrating a friend's birthday party!", "tags": "#celebration #friends #party", "location": "London", "time": 7, "isSelected": false },
    { "text": "Learning a new language with an online course!", "tags": "#language #learning #onlinecourse", "location": "Switzerland", "time": 8, "isSelected": false },
    { "text": "Watching a documentary about space exploration!", "tags": "#documentary #space #science", "location": "Rio de Janeiro", "time": 9, "isSelected": false },
    { "text": "Working on a DIY project for home improvement!", "tags": "#DIY #homeimprovement #crafting", "location": "Paris", "time": 10, "isSelected": false },
    { "text": "Attended a workshop on personal finance!", "tags": "#finance #workshop #money", "location": "Sydney", "time": 11, "isSelected": false },
    { "text": "Enjoying a leisurely stroll in the park!", "tags": "#nature #park #relaxation", "location": "Amsterdam", "time": 12, "isSelected": false },
    { "text": "Tuned in to a live stream of a gaming tournament!", "tags": "#gaming #livestream #esports", "location": "Tokyo", "time": 13, "isSelected": false },
    { "text": "Learning to play a musical instrument!", "tags": "#music #instrument #learning", "location": "Milan", "time": 14, "isSelected": false },
    { "text": "Exploring the local art scene at a gallery!", "tags": "#art #gallery #culture", "location": "Miami", "time": 15, "isSelected": false },
    { "text": "Volunteering at a community cleanup event!", "tags": "#volunteering #community #cleanup", "location": "Yellowstone", "time": 16, "isSelected": false },
    { "text": "Attending a lecture on climate change!", "tags": "#lecture #climatechange #environment", "location": "Berlin", "time": 17, "isSelected": false },
    { "text": "Joining a group fitness class at the gym!", "tags": "#fitness #exercise #health", "location": "Seoul", "time": 18, "isSelected": false },
    { "text": "Exploring a new hiking trail in the mountains!", "tags": "#hiking #adventure #outdoors", "location": "Bali", "time": 19, "isSelected": false },
    { "text": "Planning a weekend getaway to the beach!", "tags": "#travel #beach #vacation", "location": "San Francisco", "time": 20, "isSelected": false }
  ]



  const [postdata, setPostData] = useState(initialList);
  const [dupData, setDupData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [locationInput, setlocationInput] = useState("");
  
  const [openInputSection, setOpenInputSection] = useState(false);
  const [openFilterSection, setOpenFilterSection] = useState(false);



  useEffect(() => {
    setDupData(postdata);
  }, [postdata])

  const onTextInput = (e) => {
    setTextInput(e.target.value);
  }

  const onTagInput = (e) => {
    setTagInput(e.target.value);
  }
  const onLocationInput = (e) => {
    setlocationInput(e.target.value);
  }


  const onPostAdd = () => {
    // get input values, create post obj with input DAta, change the originalstate postdata
    let newPostObj = {
      text: textInput,
      tags: tagInput,
      location: locationInput,
      time: postdata.length + 1
    };
    
    setPostData(postdata.concat(newPostObj));
    console.log("entered");
    console.log(postdata);
    setOpenInputSection(false);
    alert("Added new post");
    


  }
  const onSort = (e) => {
    let value = e.target.value;
    let newList = [];
    if (value === "asc") {
      newList = [...postdata].sort((a, b) => a.time - b.time);
    }
    else if (value === "desc") {
      newList = [...postdata].sort((b, a) => a.time - b.time);
    }
    else {
      setDupData(postdata);
      return;
    }

    setDupData(newList);

  }

  const onSearch = (value) => {

    setDupData(postdata.filter(item => item.text.toLowerCase().includes(value.toLowerCase()) || item.tags.toLowerCase().includes(value.toLowerCase())))

  }

  const onPostSelect = (post) => {
  
    let onlyObj = postdata.filter(item => item.time === post.time);
    console.log(onlyObj);
    const newb = {...onlyObj[0],isSelected:true}
    
    setDupData([newb]);


  }

  const onUnselectPost = () => {
    setDupData(postdata);
  }
  const onNewPost = ()=>{
    setOpenInputSection(true);
    setOpenFilterSection(false);
  }

  const onCloseInputSection = ()=>{
    setOpenInputSection(false);
  }

  const onFilterPost =()=>{
    setOpenFilterSection(true);
    setOpenInputSection(false);
  }

  const onCloseFilterSection = () =>{
    setOpenFilterSection(false);
  }




  return (
    <div class="container-fluid p-0 m-0 d-flex justify-content-end">
      <div className='m-0 p-0'>
        <SideBar left="0" onFilterPost={onFilterPost} onNewPost={onNewPost}/>
      </div>
      <div class="w-auto section-main p-0">
        {/* banner section */}
        <div className='banner-section d-flex flex-column justify-content-end shadow-lg'>
          <div className='d-flex'>
            <img className='profile-img' src='https://www.pixelstalk.net/wp-content/uploads/images6/LeBron-James-HD-Wallpaper.jpg'/><br/>
            <div className='profile-text ml-2 rounded w-50'>
              <h3 className='text-white ml-3 mt-3'>LeBron James {<MdVerified size='20' color='rgb(0, 145, 255)'/>}</h3>
              <p className='text-white ml-3 mt-2 '>Hey there, it's LeBron James. Join me for an inside look at my life on and off the court. From basketball highlights to family moments and social impact, let's make a difference together. Follow along and be part of the journey.</p>

          
            </div> 
              
          </div>

        </div>

        <div className='container-fluid  pt-0'>
          {/* input section */}
          {
            openInputSection ? <div className='col-10 input-section w-75  m-3 shadow-lg p-3 d-flex flex-column'>
            
            <h3 className='mb-2'>Add New Post </h3>
            <textarea rows='6' cols="80" onChange={onTextInput} value={textInput} placeholder='Enter Tweet.....'></textarea>

            <div className='d-flex justify-content-between mt-2'>
              <div>
                <input value={tagInput} className='mr-4' onChange={onTagInput} placeholder='Set #Hashtags....' />
                <input value={locationInput} onChange={onLocationInput} placeholder='Set @locations....' />
              </div>
              <div>
                <button className='btn btn-primary' onClick={onPostAdd}>Post</button>
                <button className='btn btn-primary ml-3' onClick={onCloseInputSection}>Back</button>
              </div>
            
            </div>
        
          </div>
          :
          <></>
          }
          {/* filer section */}
          {
            openFilterSection?
            
            <div className='col-10 filter-section w-75  m-3 shadow-lg p-3 d-flex flex-column'>
              <h3 className='mb-2'>Filter / Search Post </h3>
              <input className='m-3' onChange={(e) => onSearch(e.target.value)} placeholder="Search Post..." />
              
              <select className='w-25 mx-3 mt-0' onChange={onSort} name="cars" id="cars">
                <option value="none">All Post</option>
                <option value="asc">Recent</option>
                <option value="desc">Old</option>
  
              </select>
              <div className='d-flex justify-content-end w-100'>
                <button onClick={onCloseFilterSection} className='  btn btn-primary back-filter'>Back</button>
              </div>
            </div>
            : <></>

          }
          

      {/* mainDisplay */}
      <div className='row '>
        {
          dupData.map((item) => <PostCard  onUnselectPost={onUnselectPost} onPostSelect={onPostSelect} props={item} />)
        }

      </div>
        </div>





      </div>
      {/* right section other than nav */}

    </div>
    // main-bg
  );
}

export default App;

// const PostCard = (keyObj) => {
  
//   // const [isSelected,setSelected] = useState(false);

//  // console.log(isSelected)
//   const onPostSelect = () => {
//  //   setSelected(true);
//     keyObj.onPostSelect(keyObj.props);
//     console.log("passed")
//   }

//   const onUnselectPost = ()=>{

//     keyObj.onUnselectPost();
//   }

//   return (
//     <div className='col-10 product-card  m-3 shadow-lg p-3'>
//       <div onClick={onPostSelect}>
//         <div className='mb-0 h-75 '>
//           <p>{keyObj.props.text}</p>
//           <p>{keyObj.props.tags}</p>
//         </div>
//         <div className='mt-0 h-25  text-left rounded shadow-md justify-content-between d-flex flex-row'>
//           <p>{keyObj.props.time}</p>
//           <p>{keyObj.props.location}</p>

//         </div>

//       </div>
//       {
//         keyObj.props.isSelected ?
//           <button onClick={onUnselectPost} className='btn btn-primary'>Back</button>
//           :
//           <></>
//       }


//     </div>
//   )
// }