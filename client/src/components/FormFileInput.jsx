import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";

const FormFileInput = ({ name, label, setValue }) => {
    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];
        if (!validTypes.includes(file.type)) {
            console.log("ไฟล์ต้องเป็นรูปภาพเท่านั้น (JPEG, PNG, GIF, WEBP, SVG)");
            return;
        }

        if (file.size > 1024 * 1024) {
            console.log("ขนาดไฟล์ต้องไม่เกิน 1MB");
            return;
        }

        if (images.length >= 5) {
            console.log("สามารถอัปโหลดได้สูงสุด 5 รูป");
            return;
        }

        const newImage = Object.assign(file, { preview: URL.createObjectURL(file) });
        const updatedImages = [...images, newImage];

        setImages(updatedImages)
        setValue(name, updatedImages)
    };

    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
        setValue(name, updatedImages);
    };


    return (
        <form
            className="grid grid-cols-2 gap-3">
            <div>
                <label htmlFor={name} className="font-semibold text-sm">
                    {label}
                </label>
                <input
                    id={name}
                    onChange={handleImageChange}
                    accept="image/*"
                    type="file"
                    className="file-input file-input-neutral w-full"
                    multiple
                />
            </div>
            <div>
                <h1 className="-mb-4 text-center font-semibold">จำนวนรูป {images.length}/5</h1>
                <div className="grid grid-cols-5 gap-2 mt-4 px-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image.preview}
                                alt="preview"
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            <div
                                className="absolute top-0 right-0 bg-gray-500 border-none  w-full h-6 flex items-center justify-end text-sm font-bold opacity-60 px-1"
                            >
                                <FaTrashCan
                                    onClick={() => removeImage(index)}
                                    className="text-white w-4 h-4 hover:opacity-100 transition-opacity cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </form>
    );
};

FormFileInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default FormFileInput;
