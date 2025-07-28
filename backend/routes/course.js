
const express = require('express') ; 
const router = express.Router() ;
const upload = require('../middleware/upload');
const CourseDetail = require('../models/CourseDetail') ; 



router.post('/submit', upload.array('photos', 10), async (req, res) => {
  try {
    const formFields = req.body;

    // Add uploaded file paths to the object
    if (req.files && req.files.length > 0) {
      formFields.photoUrls = req.files.map(file => file.path);
    }

    const courseDetail = await CourseDetail.create(formFields);

    res.json({ success: true, courseDetail });
  } catch (error) {
    console.error("Error submitting course:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});



router.get('/generate/:id', async (req, res) => {
  const course = await CourseDetail.findById(req.params.id);
  // generate PDF with course details and stream back
});


module.exports = router;



// router.post('/submit', upload.array('photos' , 10) ,async (req, res) => {
//   try {
//     const courseDetail = await CourseDetail.create(req.body);

   

//     if(req.files && req.files.length > 0){
//       courseDetail.photoUrls = req.files.map(file => file.path) ; 
//     }

//     await courseDetail.save() ; 

//     res.json({ success: true, courseDetail });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });