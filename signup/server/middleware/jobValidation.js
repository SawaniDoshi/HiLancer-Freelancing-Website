const validateJobData = (req, res, next) => {
    const { Jobtitle, Jobdesc, ReqSkills, Budget, Date } = req.body;

    // Check if all fields are provided
    if (!Jobtitle || !Jobdesc || !ReqSkills || !Budget || !Date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate Budget
    if (typeof Budget !== 'number' || Budget <= 0) {
        return res.status(400).json({ message: 'Budget must be a positive number' });
    }

    // Validate Date (you can use a regex or Date.parse)
    // if (isNaN(Date.parse(Date))) {
    //     return res.status(400).json({ message: 'Invalid date format' });
    // }

    // Validate ReqSkills if it’s supposed to be an array
    if (!Array.isArray(ReqSkills) || ReqSkills.length === 0) {
        return res.status(400).json({ message: 'ReqSkills must be a non-empty array' });
    }

    next(); // Call next middleware or route handler
};

module.exports = validateJobData;
