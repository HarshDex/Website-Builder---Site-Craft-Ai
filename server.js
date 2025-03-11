const express = require('express');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Route to download the codebase as a ZIP file
app.get('/download', (req, res) => {
    const output = fs.createWriteStream(path.join(__dirname, 'codebase.zip'));
    const archive = archiver('zip', { zlib: { level: 9 } });

    // Handle errors
    archive.on('error', (err) => {
        throw err;
    });

    // Pipe archive data to the output file
    archive.pipe(output);

    // Add files from the "public" directory to the ZIP archive
    archive.directory('public/', 'website-builder');

    // Finalize the archive (finish writing)
    archive.finalize();

    // Send the ZIP file as a response once it's ready
    output.on('close', () => {
        res.download(path.join(__dirname, 'codebase.zip'), 'website-builder.zip', (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Website builder running at http://localhost:${port}`);
});
