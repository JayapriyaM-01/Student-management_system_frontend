import './Navcss.css'

import { useState } from "react";

function ProfileUpload() {

  // Stores selected image URL
  const [image, setImage] = useState("");

  // Runs when user selects image
  const handleImageChange = (event) => {

    // Get selected file
    const file = event.target.files[0];

    // Check if file exists
    if (file) {

      // Convert file into temporary URL
      const imageURL = URL.createObjectURL(file);

      // Store image URL in state
      setImage(imageURL);

      // Check in console
      console.log("Selected File:", file);
      console.log("Image URL:", imageURL);
    }
  };

  return (

    <div className="container mt-5 text-center">

      

      {/* Image Preview */}
      <div className="mb-4">

        {
          image ? (

            <img
              src={image}
              alt="Profile"
              width="150"
              height="150"
              className="rounded-circle border"
            />

          ) : (

            <div
              className="border rounded-circle d-flex justify-content-center align-items-center mx-auto"
              style={{
                width: "150px",
                height: "150px"
              }}
            >
              No Image
            </div>

          )
        }

      </div>

      {/* Upload Button */}
      <input
        type="file"
        accept="image/*"
        className="form-control"
        onChange={handleImageChange}
      />

    </div>
  );
}

export default ProfileUpload;