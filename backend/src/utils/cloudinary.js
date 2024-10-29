import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET   
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, 
            {
            resource_type: "auto",
        })
        // file has been upload successfully
        // console.log("file has been upload successfully", response.secure_url)
        // console.log("cloudinary response", response)

        // delete local file
        fs.unlinkSync(localFilePath)
        // console.log("file deleted successfully")
        return response;
    } catch (error) {
        // console.log(error)

        // delete local file as the upload operation failed
        fs.unlinkSync(localFilePath)
        return null
    }
}

export default uploadOnCloudinary