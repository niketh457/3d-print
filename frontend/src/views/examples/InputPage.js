import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
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
    <div className="container-fluid">
    <div className="col">
        <div className="col">
            <h2 className="alert alert-success">File Upload Section</h2>

        <form className='flex flex-col'>
            <div className="flex flex-col">
                <label>Please enter your file_name</label>
                <input type='text' onChange={e => setName(e.target.value)} value={name} className='form-control border' placeholder='name of the file....' />
                <label htmlFor="exampleFormControlFile1" className="my-3 mr-2">Browse A File To Upload</label>
                <input type="file" onChange={e => setFilename(e.target.files[0])} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder='browse files....'/>
                <div>{errors}</div>
            </div>
            <button type="button" onClick={saveFile} className="btn btn-primary float-left mt-2">Submit</button>
            <br/>
            <br/>
            <br/>
            {/* {status ? <h2>{status}</h2>:(
                <Segment>
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer> */}
          
                {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
              {/* </Segment>
            )} */}
        </form>
            {(status!="Not yet uploaded any file") && (
            <div>
                <div>Press the button for downloading files</div>
                <button type="button" className="btn btn-primary" onClick={getFiles}>Button</button>
            </div>
        
        )}

        </div>


         <div className="col-md-7">


            <h2 className="alert alert-success">List of Gcode Files</h2>

            <table className="table table-bordered mt-4">
            <thead>
            <tr>
            <th scope="col">File Title</th>
            <th scope="col">Download</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td></td>
                <td><a href="" target="_blank"></a> */}
                
                {/* <button onClick={()=> forceDownload(index)} className="btn btn-success">DownLoad</button> */}
                {/* </td>
            </tr> */}
            {files.map((file,key) => {
                        return(
                            <tr>
                        <td>{`object_${key}.txt`}</td>
                        <td><a href="" target="_blank"></a>
                        
                        <button onClick={()=> forceDownload(key)} className="btn btn-success">DownLoad</button>
                        </td>
                    </tr>

                            
                        )
                    })}

             






            </tbody>
            </table>

                    </div> 
    </div>
</div>

    )
}

export default UploadFile