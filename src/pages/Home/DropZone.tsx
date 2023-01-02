import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

const DropZoneComponent = () => {
  //   const onDrop = useCallback((acceptedFiles: any) => {
  //     // Do something with the files
  //   }, []);
  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //   return (
  //     <div {...getRootProps()} style={{ background: "red" }}>
  //       <input {...getInputProps()} />
  //       <Box sx={{ justifyContent: "center", display: "flex", height: 100 }}>
  //         {isDragActive ? (
  //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //             Drop here
  //           </Typography>
  //         ) : (
  //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //             Kéo ảnh vào đây
  //           </Typography>
  //         )}
  //       </Box>
  //     </div>
  //   );
  const [selectedFile, setSelectedFile] = useState();
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

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <Stack spacing={5}>
      <Button variant="contained" component="label">
        Upload
        <input hidden type="file" onChange={onSelectFile} />
      </Button>

      {selectedFile && <img src={preview} style={{ width: "100%" }} />}
    </Stack>
  );
};

export default DropZoneComponent;
