

// import React, { useState } from 'react';
// import { api_base_url } from '../helper';

// function CourseForm() {
//   const [formData, setFormData] = useState({
//     facultyName: '', designation: '', department: '', faculty: '',
//     programme: '', batch: '', branch: '', semester: '',
//     courseName: '', courseCode: '', courseCredit: '', numStudents: '',
//     prerequisites: '', corequisites: '', dateOfApproval: '',
//     universityVision: '', universityMission: '',
//     departmentVision: '', departmentMission: '',
//     peos: '', pos: '', clos: '', cos: ''
//   });
//   const [photo, setPhoto] = useState([]);
//   const [courseId, setCourseId] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files && files.length > 0) {
//       // setPhoto(files[0]);
//       setPhoto(Array.from(files))
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const formDataWithImage = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataWithImage.append(key, formData[key]);
//       });


//       if (photo) {
//         // formDataWithImage.append("photo", photo);

//         photo.forEach((file, i) => {
//           formDataWithImage.append("photos", file);
//         });
//       }

//       const res = await fetch(`${api_base_url}/api/course/submit`, {
//         method: 'POST',
//         headers: { Authorization: `Bearer ${token}` },
//         body: formDataWithImage
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error);

//       setCourseId(data.courseDetail._id);
//       alert('Course details submitted successfully!');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const downloadPDF = async () => {
//     if (!courseId) {
//       alert("Please submit the form first before downloading PDF.");
//       return;
//     }
//     try {
//       const res = await fetch(`${api_base_url}/api/pdf/generate/${courseId}`);
//       const blob = await res.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'CourseFile.pdf';
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//     } catch (error) {
//       alert("Error generating PDF.");
//     }
//   };

//   return (
//     <div
//       className="w-screen h-screen bg-cover bg-center bg-no-repeat relative overflow-auto"
//       style={{ backgroundImage: "url('/home1.jpg')" }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"></div>

//       {/* Form Card */}
//       <div className="relative z-10 flex items-center justify-center py-10 px-4">
//         <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8">
//           <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6 drop-shadow">
//             Course File Generator
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
//             {Object.entries(formData).map(([key, value]) => (
//               <div key={key}>
//                 <input
//                   type="text"
//                   name={key}
//                   placeholder={key.replace(/([A-Z])/g, ' $1')}
//                   value={value}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
//                 />
//               </div>
//             ))}

//             {/* Image upload */}
//             <input
//               type="file"
//               name="photo"
//               accept="image/*"
//               multiple
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
//             />


//             <button
//               type="submit"
//               className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition duration-300"
//             >
//               Submit
//             </button>
//           </form>

//           <button
//             type="button"
//             onClick={downloadPDF}
//             className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
//           >
//             Download PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseForm;

import React, { useState } from 'react';
import { api_base_url } from '../helper';

function CourseForm() {
  const [formData, setFormData] = useState({
    facultyName: '', designation: '', department: '', faculty: '',
    programme: '', batch: '', branch: '', semester: '',
    courseName: '', courseCode: '', courseCredit: '', numStudents: '',
    prerequisites: '', corequisites: '', dateOfApproval: '',
    universityVision: '', universityMission: '',
    departmentVision: '', departmentMission: '',
    peos: '', pos: '', clos: '', cos: ''
  });
  const [photos, setPhotos] = useState([]);
  const [courseId, setCourseId] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setPhotos(Array.from(files));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formDataWithImages = new FormData();
      
      // Append all form data
      Object.keys(formData).forEach((key) => {
        formDataWithImages.append(key, formData[key]);
      });

      // Append all photos
      photos.forEach((file) => {
        formDataWithImages.append("photos", file);
      });

      const res = await fetch(`${api_base_url}/api/course/submit`, {
        method: 'POST',
        headers: { 
          Authorization: `Bearer ${token}`,
        },
        body: formDataWithImages,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setCourseId(data.courseDetail._id);
      alert('Course details submitted successfully!');
      setUploadProgress(0);
    } catch (error) {
      alert(error.message);
      setUploadProgress(0);
    }
  };

  const downloadPDF = async () => {
    if (!courseId) {
      alert("Please submit the form first before downloading PDF.");
      return;
    }
    try {
      const res = await fetch(`${api_base_url}/api/pdf/generate/${courseId}`);
      if (!res.ok) throw new Error('Failed to generate PDF');
      
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `CourseFile_${formData.courseName}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      alert("Error generating PDF: " + error.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-no-repeat relative overflow-auto"
      style={{ backgroundImage: "url('/home1.jpg')" }}>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"></div>

      <div className="relative z-10 flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6 drop-shadow">
            Course File Generator
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <input
                  type="text"
                  name={key}
                  placeholder={key.replace(/([A-Z])/g, ' $1')}
                  value={value}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
            ))}

            {/* Multiple image upload */}
            <div>
              <label className="block text-white mb-2">Upload Images (Max 10)</label>
              <input
                type="file"
                name="photos"
                accept="image/*"
                multiple
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              {photos.length > 0 && (
                <div className="mt-2 text-sm text-white">
                  Selected files: {photos.map((file, i) => (
                    <span key={i} className="mr-2">{file.name}</span>
                  ))}
                </div>
              )}
            </div>

            {/* Upload progress */}
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition duration-300"
              disabled={uploadProgress > 0 && uploadProgress < 100}
            >
              {uploadProgress > 0 ? `Uploading... ${uploadProgress}%` : 'Submit'}
            </button>
          </form>

          <button
            type="button"
            onClick={downloadPDF}
            className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            disabled={!courseId}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseForm;