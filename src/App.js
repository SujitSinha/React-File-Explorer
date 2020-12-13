import './App.css';
import React,{useState} from 'react';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import FolderTwoToneIcon from '@material-ui/icons/FolderTwoTone';
import Modal from './Components/Modal'
import Breadcrumbs from './Components/Breadcrumbs'

function App() {
const[modalopen,setModalopen]=useState(false);
const[clickedfolder,setClickedfolder]=useState();
const [folderstructure, setFolderstrucuture] = React.useState([]);
const[currentPath,setCurrentPath]=useState('Home');


const openDialog=()=>{
  modalopen?setModalopen(false):setModalopen(true)
}


const handleClose=()=>{
  setModalopen(false);
}

const saveFolder=(name)=>{
  setFolderstrucuture([...folderstructure,{name:name,currentPath: currentPath,hidden:false}])
}

const newDirectory =(name)=>{
  folderstructure.forEach((item)=>{
     item.currentPath===name?item.hidden=false:item.hidden=true;

  })
  setFolderstrucuture([...folderstructure]);
}

const insideFolder=(foldername)=>{
  setCurrentPath(foldername);
setClickedfolder(foldername);
newDirectory(foldername);
}


  return (
    <div>
       <Breadcrumbs clickedfolder={clickedfolder} newDirectory={newDirectory}/>
    <div className="App">
      {folderstructure &&  folderstructure.map((folderitem,index)=>{
        if(!folderitem.hidden)
        return <div key={index} >  
          <FolderTwoToneIcon color="primary"
      style={{ fontSize: 100,paddingLeft:15 }}
      onDoubleClick={()=>insideFolder(folderitem.name)}
      />
      <div className="name">{folderitem.name}</div>
      </div>
      
      })}
    

  <div className="addfolder" onClick={openDialog}>
      <AddBoxRoundedIcon color="action" style= {{ fontSize: 120,paddingLeft:15}}></AddBoxRoundedIcon>
</div>
</div>
{
  modalopen &&
  <Modal modalopen={handleClose} saveFolder={saveFolder}/>
}

    </div>
  );
}

export default App;
