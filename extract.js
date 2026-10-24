const mammoth = require('mammoth');

mammoth.extractRawText({path: "Deepika Resume (1).docx"})
    .then(function(result){
        const text = result.value;
        const messages = result.messages;
        console.log("=== BEGIN RESUME ===");
        console.log(text);
        console.log("=== END RESUME ===");
    })
    .catch(console.error);
