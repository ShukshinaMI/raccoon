import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

function ImageList() {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }: { fileList: any }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop modalTitle="Редактирвоание изображения" showGrid showReset rotationSlider>
      <Upload listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview}>
        {fileList.length < 5 && "+ Добавить фото"}
      </Upload>
    </ImgCrop>
  );
}

export default ImageList;
