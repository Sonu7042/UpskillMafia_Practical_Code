const express = require('express');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser'); 

const secretKey = "computer";
const app = express();

app.use(express.json());
app.use(cookieParser()); 


const generateToken = (req, res, next) => {
    const token = jwt.sign({ user: req.body }, secretKey, { expiresIn: "1hr" });
    res.cookie("token", token);
    next();
};



const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.send("Cannot fetch token");
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).send("Failed to authenticate token");
        }
        console.log("Token:", token);
        req.user = decoded; 
        next();
    });
};






app.post('/create', generateToken, (req, res) => {
    const user = req.body;
    res.status(201).json({
        message: "User Created Successfully",
        User: user
    });
});

app.get("/", verifyToken, (req, res) => {
    res.status(200).json({
        message: "All data fetched"
    });
});

app.listen(9000, () => {
    console.log("Server is listening on port 9000...");
});
