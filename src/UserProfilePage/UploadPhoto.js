import React, { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import "antd/es/modal/style";
import "antd/es/slider/style";
import "./UserInfo.css";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }

  this.setState({
    previewImage: file.url || file.preview,
    previewVisible: true,
    previewTitle:
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
  });
};
export default function Avatar() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(false);
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
        message.success(`image uploaded successfully.`);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const [previewImage, setPreviewImage] = useState(imageUrl);

  return (
    <ImgCrop rotate>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        onPreview={handlePreview}
      >
        {imageUrl ? (
          <img alt="avatar" style={{ width: "100%" }} src={imageUrl} />
        ) : (
          uploadButton
        )}
      </Upload>
    </ImgCrop>
  );
}
