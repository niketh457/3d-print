import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
import Navbars from 'views/index-sections/Navbars'
import DarkFooter from 'components/Footers/DarkFooter'
// import FileSaver from 'file-saver'


function UploadFile() {
    const [filename, setFilename] = useState('')
    const [name,setName] = useState('')
    const [files, setFiles] = useState([])
    const [status, setstatus] = useState('Not yet uploaded any file')
    const [errors,setErrors] = useState('')


    let api = 'http://127.0.0.1:8000/gcode/stl'


    const saveFile = () =>{
        console.log('Button clicked')
        setErrors('')
        let formData = new FormData();
        formData.append("file_name",name)
        formData.append("file", filename)
        formData.append("token","b409be378daaa6b7fad53714c8efb041d398470e")

        let axiosConfig = {
            headers: {
                'Content-Type': 'multpart/form-data'
            }
        }

        console.log(formData)
        axios.post(api, formData, axiosConfig).then(
            response =>{
                console.log(response)
                setstatus('File Uploaded Successfully')
            }
        ).catch(error =>{
            setErrors("Something wrong in the input file or something else")
            console.log(error)
        })
    }


    const getFiles = async() =>{
        try{
            
            const { data } = await axios.get("http://localhost:8000/gcode/download/", { params: { file_name: name } });
            if(data){
                console.log(data)
                console.log(Object.keys(data))
                let arr = []
                Object.keys(data).map((index) =>{
                    arr.push(data[index])
                }
                )
                setFiles(arr)
            }
        }catch(error){
            console.log(error);
        }

    }

    // const forceDownload = (response, title) =>{
    //     console.log(response)
    //     const url = window.URL.createObjectURL(new Blob([response.data]))
    //     const link = document.createElement('a')
    //     link.href = url
    //     link.setAttribute('download', title+'.pdf')
    //     document.body.appendChild(link)
    //     link.click()


    // }
    const forceDownload = (key) =>{
        console.log(files)
        const fileData = files[key]
        var blob = new Blob([fileData], { type: "text/plain;charset=utf-8" });
        // const url = URL.createObjectURL(blob);
        // const link = document.createElement("a");
        // link.download = "user-info.json";
        // link.href = url;
        // link.click()
        saveAs(blob,"gcode.txt")
    }

    const downloadWithAxios = ()=>{
        axios({
            method: 'get',
            responseType: 'arraybuffer'
        }).then((response)=>{
            forceDownload()
        }).catch((error)=> console.log(error))

    }


    useEffect (() =>{
        getFiles()
        console.log(files)
    }, [])



return (
    <>
    <Navbars/>
  


<div className="containerxx" style={{ background: "rgb(196 196 196 / 33%)", padding: "4rem", borderRadius: "40px" }}>
      <h1 style={{color:"#282727d6",fontWeight:"bold"}}>UPLOAD STL FILE HERE TO GET GCODE FILE</h1>
      <div className="flex justify-between">
        <div className="w-full md:w-1/2 mr-4">
          <h2 className="alert" style={{ background: "#7269695c", padding: "1rem", borderRadius: "40px", textAlign: "center",color:"#282727d6",fontWeight:"bold" }}>File Upload Section</h2>
          <form className='flex flex-col mt-4'>
            <label className="mb-2" style={{color:"black",fontWeight:"bold"}}>Please enter your file name :</label>
            <input type='text' onChange={e => setName(e.target.value)} value={name} className='border rounded-lg px-4 py-2 mb-4' placeholder='Name of the file....' />
            <label htmlFor="exampleFormControlFile1" className="my-3 mr-2" style={{color:"black",fontWeight:"bold"}}>Browse A File To Upload :</label>
            <input type="file" onChange={e => setFilename(e.target.files[0])} className="border rounded-lg px-4 py-2 mb-4" placeholder='Browse files....' />
            <div>{errors}</div>
            <button type="button" onClick={saveFile} className="btn btn-primary">Submit</button>
          </form>
          {(status !== "Not yet uploaded any file") && (
            <div className="mt-6">
              <div >Press the button for downloading files</div>
              <button type="button" className="btn btn-primary" style={{background:"green"}} onClick={getFiles}>Button</button>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="alert" style={{ background: "#7269695c", padding: "1rem", borderRadius: "40px", textAlign: "center",color:"#282727d6",fontWeight:"bold" }}>List of Gcode Files</h2>
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th scope="col">File Title</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, key) => (
                <tr key={key}>
                  <td>{`object_${key}.txt`}</td>
                  <td>
                    <button onClick={() => forceDownload(key)} className="btn btn-success">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

</>

    )
}

export default UploadFile