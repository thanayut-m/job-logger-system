import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

const FormFileInput = ({ name, label }) => {
    const { setValue } = useFormContext(); 
    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length === 0) return;

        const validTypes = ["image/jpeg", "image/png"];
        const newImages = [];

        files.forEach((file) => {
            if (!validTypes.includes(file.type)) {
                console.log("ไฟล์ต้องเป็นรูปภาพเท่านั้น (JPEG, PNG)");
                return;
            }

            if (file.size > 1024 * 1024) {
                console.log("ขนาดไฟล์ต้องไม่เกิน 1MB");
                return;
            }

            if (images.length + newImages.length < 5) {
                newImages.push(Object.assign(file, { preview: URL.createObjectURL(file) }));
            } else {
                console.log("สามารถอัปโหลดได้สูงสุด 5 รูป");
            }
        });

        const updatedImages = [...images, ...newImages];
        setImages(updatedImages);
        setValue(name, updatedImages); 
    };

    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
        setValue(name, updatedImages);
    };

    return (
        <form className="grid grid-cols-2 gap-3">
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
                            <button
                                onClick={() => removeImage(index)}
                                type="button"
                                className="absolute top-0 right-0 bg-gray-500 border-none cursor-pointer w-6 h-6 flex items-center justify-center text-sm font-bold opacity-60 hover:opacity-100 transition-opacity px-1 rounded-full"
                            >
                                <FaTrashCan className="text-white w-4 h-4" />
                            </button>
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
};

export default FormFileInput;
