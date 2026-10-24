const mammoth = require('mammoth');
const fs = require('fs');

mammoth.extractRawText({path: "Deepika Resume (1).docx"})
    .then(function(result){
        fs.writeFileSync("resume.txt", result.value);
        console.log("Saved to resume.txt");
    })
    .catch(console.error);
