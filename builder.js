const editor = grapesjs.init({
    container: '#gjs',
    plugins: [
        'gjs-preset-webpage',
        'grapesjs-plugin-forms',
        'grapesjs-plugin-export',
        'grapesjs-blocks-basic',
        'grapesjs-plugin-ckeditor',
        'grapesjs-style-bg',
        'grapesjs-custom-code',
        'grapesjs-touch',
        'grapesjs-parser-postcss',
        'grapesjs-tooltip',
        'grapesjs-tui-image-editor',
        'grapesjs-typed',
        'grapesjs-style-filter',
        'grapesjs-preset-newsletter'
    ],
    pluginsOpts: {
        'gjs-preset-webpage': {},
        'grapesjs-plugin-forms': {},
        'grapesjs-plugin-export': {},
        'grapesjs-blocks-basic': {},
        'grapesjs-plugin-ckeditor': {},
        'grapesjs-style-bg': {},
        'grapesjs-custom-code': {},
        'grapesjs-touch': {},
        'grapesjs-parser-postcss': {},
        'grapesjs-tooltip': {},
        'grapesjs-tui-image-editor': {},
        'grapesjs-typed': {},
        'grapesjs-style-filter': {},
        'grapesjs-preset-newsletter': {}
    },
    storageManager: false,
    canvas: {
        styles: [
            'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        ],
        scripts: [
            'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js'
        ]
    },
    dragMode: 'absolute',
    deviceManager: {
        devices: [
            {
                name: 'Desktop',
                width: '',
            },
            {
                name: 'Tablet',
                width: '768px',
                widthMedia: '992px',
            },
            {
                name: 'Mobile',
                width: '320px',
                widthMedia: '480px',
            },
        ]
    },
});

const blockManager = editor.BlockManager;

// ... (Your existing block definitions)

blockManager.add('container', {
    label: 'Container',
    content: '<div class="container" style="padding: 20px; border: 1px solid #ddd;">Container</div>',
    category: 'Layout',
});

blockManager.add('row', {
    label: 'Row',
    content: '<div class="row" style="border: 1px dashed #ddd; padding: 10px;">Row</div>',
    category: 'Layout',
});

blockManager.add('column', {
    label: 'Column',
    content:
        '<div class="col" style="border: 1px solid #ddd; padding: 10px;">Column</div>',
    category: 'Layout',
});


blockManager.add('text', {
    label: 'Text',
    content: '<p style="font-size: 16px;">Insert your text here</p>',
    category: 'Basic',
});

blockManager.add('heading', {
    label: 'Heading',
    content:
        '<h1 style="font-size: 2rem; font-weight: bold;">This is a Heading</h1>',
    category: 'Basic',
});

blockManager.add('image', {
    label: 'Image',
    content:
        '<img src="https://via.placeholder.com/150" alt="Placeholder Image" style="width: 100%; height: auto;" />',
    category: 'Media',
});

blockManager.add('button', {
    label: 'Button',
    content:
        '<button class="btn btn-primary" style="padding: 10px 20px;">Click Me</button>',
    category: 'Basic',
});


blockManager.add('form', {
    label: 'Form',
    content:
        `<form style="padding: 10px; border: 1px solid #ddd;">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" class="form-control" style="margin-bottom: 10px;" />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" class="form-control" style="margin-bottom: 10px;" />
            <button type="submit" class="btn btn-success">Submit</button>
        </form>`,
    category: 'Forms',
});

blockManager.add('video', {
    label: 'Video',
    content:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    category: 'Media',
});

blockManager.add('card', {
    label: 'Card',
    content:
        `<div class="card" style="width: 18rem;">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image">
            <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`,
    category: 'Components',
});

blockManager.add('carousel', {
    label: 'Carousel',
    content:
        `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/800x400?text=First+Slide" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400?text=Second+Slide" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400?text=Third+Slide" class="d-block w-100" alt="">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide-prev>
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide-next>
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>`,
    category: 'Media',
});


// Add new blocks with animations
blockManager.add('animated-text', {
    label: 'Animated Text',
    content: '<h2 class="animate__animated animate__bounce">Animated Heading</h2>',
    category: 'Animations',
});

blockManager.add('fade-in', {
    label: 'Fade In',
    content: '<div class="animate__animated animate__fadeIn">This content fades in</div>',
    category: 'Animations',
});

blockManager.add('slide-in', {
    label: 'Slide In',
    content: '<div class="animate__animated animate__slideInLeft">This content slides in from the left</div>',
    category: 'Animations',
});

// Add interactive components
blockManager.add('accordion', {
    label: 'Accordion',
    content: `
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        This is the first item's accordion body.
                    </div>
                </div>
            </div>
        </div>
    `,
    category: 'Interactive',
});

blockManager.add('modal', {
    label: 'Modal',
    content: `
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Modal content goes here
                    </div>
                </div>
            </div>
        </div>
    `,
    category: 'Interactive',
});

// Add GSAP animation
blockManager.add('gsap-animation', {
    label: 'GSAP Animation',
    content: `
        <div id="gsap-box" style="width: 100px; height: 100px; background-color: red;"></div>
        <script>
            gsap.to("#gsap-box", {duration: 2, x: 200, rotation: 360, ease: "bounce"});
        </script>
    `,
    category: 'Animations',
});

// Add custom CSS editor
editor.Panels.addButton('options', {
    id: 'open-css',
    className: 'fa fa-cog',
    command: 'open-css',
    attributes: { title: 'Open CSS Editor' }
});

editor.Commands.add('open-css', {
    run: function(editor, sender) {
        sender && sender.set('active', 0);
        var cssCodeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
        cssCodeViewer.set({
            codeName: 'css',
            readOnly: false,
            theme: 'hopscotch',
            autoBeautify: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineWrapping: true,
            styleActiveLine: true,
            smartIndent: true,
            indentWithTabs: true
        });

        var modal = editor.Modal;
        modal.setTitle('Edit CSS');
        modal.setContent(cssCodeViewer.editor);
        modal.open();
        cssCodeViewer.setContent(editor.getCss());

        modal.onceClose(function() {
            editor.setCss(cssCodeViewer.getContent());
            editor.refresh();
        });
    }
});

// ... (Your existing download button code)
editor.Commands.add('generate-ai-text', {
    run: async (editor, sender, options) => {
        try {
            const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_API_KEY_HERE'
                },
                body: JSON.stringify({
                    prompt: "Generate a short paragraph about a company's services:",
                    max_tokens: 100
                })
            });
            const data = await response.json();
            const generatedText = data.choices[0].text;
            editor.getSelected().set('content', generatedText);
        } catch (error) {
            console.error('Error generating AI text:', error);
        }
    }
});

// Add AI button to the panel
editor.Panels.addButton('options', {
    id: 'ai-button',
    className: 'fa fa-magic',
    command: 'generate-ai-text',
    attributes: { title: 'Generate AI Content' }
});

// Add download button
editor.Panels.addButton('options', {
    id: 'download',
    className: 'btn-download',
    label: 'Download',
    command(editor) {
        const html = editor.getHtml();
        const css = editor.getCss();
        const blob = new Blob([
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Generated Page</title>
                <style>${css}</style>
            </head>
            <body>
            ${html}
            </body>
            </html>`
        ], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'website.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
});

// Modern styling
const style = document.createElement('style');
style.textContent = `
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    #gjs {
        height: 100vh;
    }

    .gjs-pn-panels {
        background-color: #1a1a2e;
    }

    .gjs-one-bg {
        background-color: #16213e;
    }

    .gjs-two-color {
        color:rgb(255, 255, 255);
    }

    .gjs-four-color {
        color: #0f3460;
    }

    // .gjs-pn-btn {
    //     border-radius: 3px;
    //     margin: 2px;
    //     transition: all 0.2s ease-in-out;
    // }

    .gjs-pn-btn:hover {
        background-color:rgb(226, 200, 205);
        color: #fff;
    }

    .gjs-block {
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
    }

    .gjs-block:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
`;

document.head.appendChild(style);
