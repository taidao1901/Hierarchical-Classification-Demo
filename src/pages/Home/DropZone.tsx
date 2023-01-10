import { Button, Typography, Breadcrumbs } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const DropZoneComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [result, setResult] = useState<any>();
  const [preview, setPreview] = useState<string>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onClearFile = () => {
    setSelectedFile(undefined);
    setResult(undefined)
  };
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    // const currentFile = e.target.files[0];

    // if (currentFile != undefined) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(currentFile);
    //   reader.onload = async () => {
    //     // @ts-ignore
    //     // console.log(reader.result.split("base64,")[1])
    //     const response = await fetch(
    //       "http://34.126.96.154:80/HierarchicalMultiLabels/",
    //       {
    //         method: "POST",
    //         // mode: 'cors',
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           // @ts-ignore
    //           base64: reader.result.split("base64,")[1],
    //         }),
    //       }
    //     );
    //     response
    //       .json()
    //       .then((val) => {
    //         console.log(val);
    //       })
    //       .catch(() => {
    //         alert("An error ocurred, please try again later!");
    //       });
    //   };
    // }
  };
  const onSubmit = () => {
    const currentFile = selectedFile;

    if (currentFile != undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(currentFile);
      reader.onload = async () => {
        // @ts-ignore
        // console.log(reader.result.split("base64,")[1])
        const response = await fetch(
          "http://34.126.96.154:80/HierarchicalMultiLabels/",
          {
            method: "POST",
            // mode: 'cors',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // @ts-ignore
              base64: reader.result.split("base64,")[1],
            }),
          }
        );
        response
          .json()
          .then((val) => {
            setResult(val);
          })
          .catch(() => {
            alert("An error ocurred, please try again later!");
          });
      };
    }
  };

  return (
    <Stack spacing={5}>
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "80%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "10px",
          alignSelf: "center",
          marginTop: "30px",
          borderRadius:"30px",
          boxShadow:"1px 1px 64px 7px rgba(0,0,0,0.20)"

        }}
      >
        {selectedFile == undefined && (
          <Stack justifyContent="center">
            <Button
              variant="contained"
              component="label"
              style={{ height: "50px" }}
              startIcon={<UploadFileIcon />}
            >
              Upload
              <input hidden type="file" onChange={onSelectFile} />
            </Button>
          </Stack>
        )}
        {selectedFile && (
          <img
            src={preview}
            style={{
              maxHeight: "500px",
              objectFit: "contain",
              display: "block",
            }}
          />
        )}
      </div>{selectedFile && (
      <Stack spacing={1} direction="row" justifyContent="center" width="80%" alignSelf="center">
      
          <Button
            variant="contained"
            component="label"
            onClick={onClearFile}
            color="error"
          >
            Clear
          </Button>
      
        
          <Button
            variant="contained"
            component="label"
            onClick={onSubmit}
            color="success"
          >
            Submit
          </Button>
        
      </Stack>)}
      {result && (
        <Stack direction="row" justifyContent="center" spacing={1}>
          <Typography key="1" color="text.primary" variant="h6" fontWeight="bold" >
            {result.outputs.name[0]}
          </Typography>
          <Typography key="2" color="text.primary" variant="h6" fontWeight="bold" >
            {"  >  "}
          </Typography>
          <Typography key="3" color="text.primary" variant="h6" fontWeight="bold" >
            {result.outputs.name[1]}
          </Typography>
          <Typography key="4" color="text.primary" variant="h6" fontWeight="bold" >
            {"  >  "}
          </Typography>
          <Typography key="5" color="text.primary" variant="h6" fontWeight="bold" >
            {result.outputs.name[2]}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default DropZoneComponent;
