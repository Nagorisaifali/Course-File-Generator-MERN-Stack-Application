
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CourseDetail = require('../models/CourseDetail');
const PDFDocument = require('pdfkit');



router.get('/generate/:id', async (req, res) => {   
 try {
    const course = await CourseDetail.findById(req.params.id);
    if (!course) return res.status(404).send('Course not found');

    const doc = new PDFDocument({ margin: 50 });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=course_file.pdf');

    doc.pipe(res);

    const sectionHeader = (title) => {
      doc.moveDown(1).fontSize(14).fillColor('black').text(title, {
        underline: true,
        continued: false
      }).moveDown(0.5);
    };

    // doc.image("uploads/medi_logo.jpeg", 50, 40, { width: 70 })
    //   .fontSize(16)
    //   .text("MEDI-CAPS UNIVERSITY, INDORE", 150, 50, { align: "center" })
    //   .fontSize(14)
    //   .text("COURSE FILE", { align: "center" })
    //   .fontSize(12)
    //   .text(`YEAR: 2024-25  SEM: ${course.semester} `, 400, 40)
    //   .text(`SEM: Even`, 400, 60);

    // doc.moveDown();

    doc.image("uploads/medi_logo.jpeg", 50, 40, { width: 70 } , {align : 'left'} ) ; 
    doc.fontSize(10).text(`Year 2024-25 Sem : ${course.semester}`, 50 , 40 ,  {align : 'right'}) ;
    doc.fontSize(14).text("MEDI-CAPS UNIVERSITY, INDORE", 50 , 40 ,  { align: 'center' });
    doc.fontSize(12).text(`Course File: ${course.courseName}`,  { align: 'center' });
     
    doc.moveDown();

    sectionHeader("1. Faculty Details:");
    doc.text(`Faculty Name: ${course.facultyName}`);
    doc.text(`Designation: ${course.designation}`);
    doc.text(`Department: ${course.department}`);
    doc.text(`Faculty: ${course.faculty}`);

    sectionHeader("2. Course Details:");
    doc.text(`Programme: ${course.programme}`);
    doc.text(`Batch: ${course.batch}`);
    doc.text(`Branch: ${course.branch}`);
    doc.text(`Semester: ${course.semester}`);
    doc.text(`Course Name: ${course.courseName}`);
    doc.text(`Course Code: ${course.courseCode}`);
    doc.text(`Course Credit: ${course.courseCredit}`);
    doc.text(`Number of Students: ${course.numStudents}`);
    doc.text(`Pre-requisites: ${course.prerequisites}`);
    doc.text(`Co-requisites: ${course.corequisites}`);
    doc.text(`Date of Approval: ${course.dateOfApproval}`);

    //////
    doc.addPage();
    doc.image("uploads/medi_logo.jpeg", 50, 40, { width: 70 } , {align : 'left'} ) ; 
    doc.fontSize(10).text(`Year 2024-25 Sem : ${course.semester}`, 50 , 40 ,  {align : 'right'}) ;
    doc.fontSize(14).text("MEDI-CAPS UNIVERSITY, INDORE", 50 , 40 ,  { align: 'center' });
    doc.fontSize(12).text(`Course File: ${course.courseName}`,  { align: 'center' });
     
    doc.moveDown();
    

    sectionHeader("3. Vision of the University:");
    doc.text(course.universityVision);

    sectionHeader("4. Mission of the University:");
    doc.text(course.universityMission);

    sectionHeader("5. Vision of the Department:");
    doc.text(course.departmentVision);

    sectionHeader("6. Mission of the Department:");
    doc.text(course.departmentMission);

    sectionHeader("7. Program Education Objectives (PEOs):");
    doc.text(course.peos);

    sectionHeader("8. Program Outcomes (POs):");
    doc.text(course.pos);

    /////

    doc.addPage();
    doc.image("uploads/medi_logo.jpeg", 50, 40, { width: 70 } , {align : 'left'} ) ; 
    doc.fontSize(10).text(`Year 2024-25 Sem : ${course.semester}`, 50 , 40 ,  {align : 'right'}) ;
    doc.fontSize(14).text("MEDI-CAPS UNIVERSITY, INDORE", 50 , 40 ,  { align: 'center' });
    doc.fontSize(12).text(`Course File: ${course.courseName}`,  { align: 'center' });
     
    doc.moveDown();

    sectionHeader("9. Program Specific Outcomes (PSOs):");
    doc.text("Not Applicable");

    sectionHeader("10. Course Learning Objectives (CLOs):");
    doc.text(course.clos);

    sectionHeader("11. Course Outcomes (COs):");
    doc.text(course.cos);

    sectionHeader("12. CO-PO Mapping:");
    doc.text("(To be formatted if detailed mapping is added)");

    sectionHeader("13. CO-PSO Mapping:");
    doc.text("Not Applicable");

    sectionHeader("14. Syllabus:");
    doc.text("(Include syllabus content if available)");

    ////////
    // doc.addPage();
    // doc.image("uploads/medi_logo.jpeg", 50, 40, { width: 70 } , {align : 'left'} ) ; 
    // doc.fontSize(10).text(`Year 2024-25 Sem : ${course.semester}`, 50 , 40 ,  {align : 'right'}) ;
    // doc.fontSize(14).text("MEDI-CAPS UNIVERSITY, INDORE", 50 , 40 ,  { align: 'center' });
    // doc.fontSize(12).text(`Course File: ${course.courseName}`,  { align: 'center' });
     
    // doc.moveDown();

    // if (course.photoUrl) {
    //   try {
    //     const imageRes = await fetch(course.photoUrl);
    //     const arrayBuffer = await imageRes.arrayBuffer();
    //     const buffer = Buffer.from(arrayBuffer);
    //     doc.image(buffer, 110 , 110 , { width: 400, height: 600 } ,  {align : 'center'}  );
    //   } catch (err) {
    //     console.error("Image fetch error:", err.message);
    //   }
    // }

    if (course.photoUrls && course.photoUrls.length > 0) {
  for (let i = 0; i < course.photoUrls.length; i++) {
    const url = course.photoUrls[i];
    try {
      const imageRes = await fetch(url);
      const arrayBuffer = await imageRes.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      doc.addPage();

    doc.image("uploads/medi_logo.jpeg", 50, 40, { width: 70 } , {align : 'left'} ) ; 
    doc.fontSize(10).text(`Year 2024-25 Sem : ${course.semester}`, 50 , 40 ,  {align : 'right'}) ;
    doc.fontSize(14).text("MEDI-CAPS UNIVERSITY, INDORE", 50 , 40 ,  { align: 'center' });
    doc.fontSize(12).text(`Course File: ${course.courseName}`,  { align: 'center' });
     
    doc.moveDown();

      doc.image(buffer, {
        fit: [500, 700],
        align: 'center',
        valign: 'center'
      });
    } catch (err) {
      console.error(`Error loading image ${i + 1}:`, err.message);
    }
  }
}




    doc.end();
  } catch (err) {
    res.status(500).send('Error generating PDF');
  }
});

module.exports = router;



