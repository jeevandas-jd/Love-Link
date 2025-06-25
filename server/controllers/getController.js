const Letter = require('../model/letterModel');


const getLetter = async (req, res) => {
    const letterId = req.params.id;

    try {
        const letter = await Letter.findById(letterId);
        var answers=[];
        if(req.body){

            answers = req.body.answers;

        }
        

        if (!letter) {
            return res.status(404).json({ message: "Letter not found" });
        }
        if(letter.allowedUsers && ! req.body.user){
            return res.status(500).json({ message: "user auth required" });
        }
        if(letter.allowedUsers && !letter.allowedUsers.includes(req.body.user)){
            return res.status(403).json({ message: "Access denied for this user" });
        }


        // ✅ If no validation is required, return the letter directly
        if (!letter.validationRequired || letter.questions.length === 0) {
            return res.status(200).json({
                _id: letter._id,
                heading: letter.heading,
                content: letter.content,
                createdAt: letter.createdAt,
                updatedAt: letter.updatedAt,
                questions: []
            });
        }
        if(letter.validationRequired && answers.length === 0){
            const questionsOnly = letter.questions.map(q => q.question);
            return res.status(200).json({
                message: "Validation required",
                letterId: letter._id,
                questions: questionsOnly
            });
        }

        // 🟨 If validation is required, but no answers provided → send questions
        if (!answers || answers.length === 0) {
            const questionsOnly = letter.questions.map(q => q.question);
            return res.status(200).json({
                message: "Validation required",
                letterId: letter._id,
                heading: letter.heading,
                questions: questionsOnly
            });
        }

        // ✅ Validate answers
        const isValid = letter.questions.every((q, index) => {
            const userAnswer = answers[index];
            return userAnswer && userAnswer.trim().toLowerCase() === q.answer.trim().toLowerCase();
        });

        if (!isValid) {
            console.log("the validation failde for the letter with id", letterId);
            return res.status(403).json({ message: "Incorrect answers. Access denied." });
        }

        // ✅ If answers are valid, send the letter
        return res.status(200).json({
            _id: letter._id,
            heading: letter.heading,
            content: letter.content,
            createdAt: letter.createdAt,
            updatedAt: letter.updatedAt,
            questions: letter.questions
        });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

const listAll = async(req,res)=>{
    try{
    const letters=await Letter.find({},'_id contentName');
    const letterIds = letters.map(letter => ({
        id: letter._id,
        contentName: letter.contentName || "No Name" // Default to "No Name" if contentName is not set
    }));
    res.status(200).json({ letterIds });

    }catch (error){
        res.status(500).json({ message: 'Server error', error: error.message });
    }

    
}

module.exports = {
    getLetter,
    listAll
};