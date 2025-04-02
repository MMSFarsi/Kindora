
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddEvent = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });

    if (res.data.success) {
      // Send camp details to database
      const eventDetails = {
        eventName: data.eventName,
        dateTime: data.dateTime,
        description: data.description,
        image: res.data.data.display_url,
        AdminName: user.email,
      };

      const eventRes = await axiosSecure.post('/events', eventDetails);
  

      if (eventRes.data.insertedId) {
        toast.success('Event Added Successfully');
        reset();
      }
    }
  
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-3  rounded-lg mt-10">
      <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Add A Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    
        <div>
          <label className="block text-sm font-medium text-gray-700">Add a Fundraising Event</label>
          <input
            type="text"
            {...register("eventName", { required: "Event name is required" })}
            placeholder="Enter event Name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          {errors.eventName && (
            <span className="text-sm text-red-500">{errors.eventName.message}</span>
          )}
        </div>

   
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            onChange={handleImagePreview}
            className="mt-1"
            accept="image/*"
          />
          {errors.image && (
            <span className="text-sm text-red-500">{errors.image.message}</span>
          )}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-full h-40 object-cover rounded-lg"
            />
          )}
        </div>

      
        <div>
          <label className="block text-sm font-medium text-gray-700">Date & Time</label>
          <input
            type="datetime-local"
            {...register("dateTime", { required: "Date and time are required" })}
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          {errors.dateTime && (
            <span className="text-sm text-red-500">{errors.dateTime.message}</span>
          )}
        </div>

    
      

   
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Enter Event Description"
            rows="4"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-500">{errors.description.message}</span>
          )}
        </div>

    
        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#B354A6] text-white font-semibold rounded-lg  focus:ring-2 focus:ring-blue-300"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
