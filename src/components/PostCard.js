const PostCard = (keyObj) => {
  
    // const [isSelected,setSelected] = useState(false);
  
   // console.log(isSelected)
    const onPostSelect = () => {
   //   setSelected(true);
      keyObj.onPostSelect(keyObj.props);
      console.log("passed")
    }
  
    const onUnselectPost = ()=>{
  
      keyObj.onUnselectPost();
    }
  
    return (
      <div className='col-10 col-md-6 col-lg-4 product-card  m-3 shadow-lg p-3'>
        <div onClick={onPostSelect}>
          <div className='mb-0 h-75 '>
            <p>{keyObj.props.text}</p>
            <p>{keyObj.props.tags}</p>
          </div>
          <div className='mt-0 h-25  text-left rounded shadow-md justify-content-between d-flex flex-row'>
            <p>{keyObj.props.time}</p>
            <p>{keyObj.props.location}</p>
  
          </div>
  
        </div>
        {
          keyObj.props.isSelected ?
            <button onClick={onUnselectPost} className='btn btn-primary'>Back</button>
            :
            <></>
        }
  
  
      </div>
    )
  }
  export {PostCard}