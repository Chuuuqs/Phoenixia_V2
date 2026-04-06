const Student = require('../models/Student');

module.exports = (app) => {
    app.post('/stu', async (req, res) => {
        const { name, age, grade } = req.body;
        const student = { name, age, grade };
        if (!name || !age || !grade) {
            return res.status(400).json({ error: "Please provide name, age, and grade" });
        }
        try {
            const newStudent = new Student(student);
            await newStudent.save();
            res.status(200).json({ message: "Student added successfully", student: newStudent });
        } catch (error) {
            res.status(500).json({ error: "Failed to add student", details: error.message });
        }
    });

    app.get('/stuget', async (req, res) => {
        try {
            const students = await Student.find();
            if (students.length === 0) {
                return res.status(404).json({ error: "No students found" });
            }
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch students", details: error.message });
        }
    });

    app.get('/stuget/:name', async (req, res) => {
        const { name } = req.params;
        try {
            const student = await Student.findOne({ name });
            if (!student) {
                return res.status(404).json({ error: "Student not found" });
            }
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch student", details: error.message });
        }
    });

    app.patch('/stuput/:name', async (req, res) => {
        const { name } = req.params;
        const { age, grade } = req.body;
        try {
            const updatedStudent = await Student.findOneAndUpdate(
                { name },
                { age, grade },
                { new: true }
            );
            if (!updatedStudent) {
                return res.status(404).json({ error: "Student not found" });
            }
            res.status(200).json({ message: "Successfully updated", student: updatedStudent });
        } catch (error) {
            res.status(500).json({ error: "Failed to update student", details: error.message });
        }
    });

    app.delete('/studel/:name', async (req, res) => {
        const { name } = req.params;
        try {
            const deletedStudent = await Student.findOneAndDelete({ name });
            if (!deletedStudent) {
                return res.status(404).json({ error: "Student not found" });
            }
            res.status(200).json({ message: "Student deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to delete student", details: error.message });
        }
    });
};