import Sound from "../models/sounds";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import uploadOnCloudinary from "../utils/cloudinary.js";


const addSounds = asyncHandler(async (req, res) => {
    try {
        const {key, title, description} = req.body;
        if(!key || !title || !soundFile){
            throw new ApiError(400, "All fields are required");
        }
        const existingSound = await Sound.findOne({
            key: req.file.originalname
        });

        if(existingSound){
            throw new ApiError(400, "Sound already exists");
        }
        const avatarLocalPath = req.files?.avatar[0]?.path;
        const soundFileLocalPath = req.files?.soundFile[0]?.path;

        if(!avatarLocalPath || !soundFileLocalPath){
            throw new ApiError(400, "Sound upload failed");
        }
        const avatar = await uploadOnCloudinary(
            avatarLocalPath)
        const soundFile = await uploadOnCloudinary(
            soundFileLocalPath
        )
        if(!avatar || !soundFile){
            throw new ApiError(400, "Sound upload failed");
        }

        // const uploadSoundOnCloudinary = await uploadOnCloudinary(
        //     req.file.path,
        //     "sounds"
        // )

        // if(!uploadSoundOnCloudinary){
        //     throw new ApiError(400, "Sound upload failed");
        // }
        const newSound = await Sound.create({
            key: req.file.originalname, 
            title, 
            avatar: avatar.secure_url,
            soundFile: soundFile.secure_url, 
            description
        });
        const addedSound = await Sound.findById(newSound._id)

        if(!addedSound){
            throw new ApiError(400, "Soundfile upload failed");
        }
        return res
        .status(201)
        .json(new ApiResponse(201, addedSound, "Sound added successfully"));
        
    } catch (error) {
        return new ApiError(500, error.message);
    }
})


const getAllSounds = asyncHandler(async (req, res) => {
    try {
        const sounds = await Sound.find();
     return res.status(200).json( new ApiResponse(
        200, 
        sounds,
        "Sounds fetched successfully"));
    } catch (error) {
        return res.status(500).json(new ApiError(500, error.message));
        
    }
});

const getSoundById = asyncHandler(async (req, res) => {
    try {
        const sound = await Sound.findById(req.params.id);
        return res.status(200).json(new ApiResponse(200, sound, "Sound fetched successfully"));
    } catch (error) {
        return res.status(500).json(new ApiError(500, error.message));
    }
})

const deleteSound = asyncHandler(async (req, res) => {
    try {
        const sound = await Sound.findByIdAndDelete(req.params.id);
        return res.status(200).json(new ApiResponse(200, sound, "Sound deleted successfully"));
    } catch (error) {
        return res.status(500).json(new ApiError(500, error.message));
    }
})

export default {addSounds, getAllSounds, getSoundById, deleteSound} 