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
    // dragMode: 'absolute',
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
    storageManager: {
        type: 'local', // Use browser's localStorage
        autosave: true, // Save automatically
        autoload: true, // Load automatically on init
        stepsBeforeSave: 1, // Save after each change
        options: {
          local: { 
            key: 'sitecraft-project' // A unique key for your project
          }
        }
    }
    
});

// To manually save the current state
editor.store();

// To manually load the saved state
editor.load();


// Add Stack functionality to GrapesJS
editor.Commands.add('stack-elements', {
    run(editor) {
      const selectedComponents = editor.getSelectedAll();
      
      if (selectedComponents.length < 2) {
        editor.Modal.open({
          title: 'Stack Elements',
          content: 'Please select at least two elements to stack.'
        });
        return;
      }
      
      const modal = editor.Modal;
      modal.setTitle('Stack Elements');
      
      const modalContent = `
        <div class="p-3">
          <h5>Choose Stack Direction</h5>
          <div class="mb-3">
            <button id="stack-vertical" class="btn btn-primary me-2">
              <i class="fas fa-arrows-alt-v me-1"></i> Stack Vertically
            </button>
            <button id="stack-horizontal" class="btn btn-primary">
              <i class="fas fa-arrows-alt-h me-1"></i> Stack Horizontally
            </button>
          </div>
          <div class="mb-3">
            <label class="form-label">Space Between Elements (px)</label>
            <input type="number" id="stack-spacing" class="form-control" value="15" min="0" max="100">
          </div>
        </div>
      `;
      
      modal.setContent(modalContent);
      modal.open();
      
      // Stack vertically
      document.getElementById('stack-vertical').addEventListener('click', () => {
        const spacing = parseInt(document.getElementById('stack-spacing').value);
        stackElements(selectedComponents, 'vertical', spacing);
        modal.close();
      });
      
      // Stack horizontally
      document.getElementById('stack-horizontal').addEventListener('click', () => {
        const spacing = parseInt(document.getElementById('stack-spacing').value);
        stackElements(selectedComponents, 'horizontal', spacing);
        modal.close();
      });
    }
  });
  
  // Function to handle stacking elements
  function stackElements(components, direction, spacing) {
    // Create a wrapper div with flexbox
    const wrapper = editor.DomComponents.addComponent({
      type: 'default',
      tagName: 'div',
      attributes: { class: 'stacked-elements' },
      style: {
        display: 'flex',
        'flex-direction': direction === 'vertical' ? 'column' : 'row',
        'gap': `${spacing}px`,
        'flex-wrap': 'wrap'
      }
    });
    
    // Get the parent of the first component
    const parent = components[0].parent();
    
    // Add all selected components to the wrapper
    components.forEach(component => {
      wrapper.append(component);
    });
    
    // Add the wrapper to the parent
    parent.append(wrapper);
    
    // Select the wrapper
    editor.select(wrapper);
  }
  
  // Add Stack button to the toolbar
  editor.Panels.addButton('options', {
    id: 'stack-elements',
    className: 'fa fa-layer-group',
    command: 'stack-elements',
    attributes: { title: 'Stack Elements' }
  });
  

// Add this after your editor initialization
editor.on('load', () => {
    setTimeout(() => {
      const categories = editor.BlockManager.getCategories();
      categories.forEach(category => {
        category.set('open', false);
      });
    }, 100);
  });
  
editor.Panels.addButton('options', {
    id: 'save-project',
    className: 'fa fa-floppy-o',
    command: 'save-project',
    attributes: { title: 'Save Project' }
  });
  
editor.Commands.add('save-project', {
    run: function(editor) {
      editor.store();
      editor.Notifications.add({
        title: 'Project saved',
        content: 'Your project has been saved successfully',
        type: 'success',
        timeout: 3000
      });
    }
  });
  

// Add this after your editor initialization
editor.on("component:selected", function(component) {
    component.set("resizable", true);
  });
  
// Create a GrapesJS plugin for AOS
const aosPlugin = (editor, opts = {}) => {
    // Add AOS initialization when the editor is loaded
    editor.on('load', () => {
      AOS.init(opts.aosOptions || {});
    });
    
    // Add AOS traits to components
    editor.DomComponents.addType('default', {
      model: {
        defaults: {
          traits: [
            // AOS animation traits as shown above
          ]
        }
      }
    });
    
    // Add AOS blocks
    const blockManager = editor.BlockManager;
    
    // Add various AOS animation blocks
    // (blocks as shown above)
  };
  
  // Use the plugin
  editor.Panels.addButton('options', {
    id: 'refresh-aos',
    className: 'fa fa-refresh',
    command: () => {
      AOS.refresh();
    },
    attributes: { title: 'Refresh AOS Animations' }
  });
  

// Add Page/Section Manager functionality
editor.Panels.addButton('options', {
    id: 'section-manager',
    className: 'fa fa-columns',
    command: 'open-sections',
    attributes: { title: 'Section Manager' }
});

// Create Section Manager Command
editor.Commands.add('open-sections', {
    run(editor) {
        const modal = editor.Modal;
        modal.setTitle('Section Manager');
        
        // Get all available sections from the block manager
        const sectionBlocks = editor.BlockManager.getAll().filter(block => 
            block.get('category') && block.get('category').id === 'Sections'
        );
        
        let sectionsHtml = `
            <div class="section-manager-container p-3">
                <div class="d-flex justify-content-between mb-3">
                    <h5>Available Sections</h5>
                </div>
                <div class="sections-list row">`;
        
        // List all available sections
        sectionBlocks.forEach(block => {
            sectionsHtml += `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${block.get('label')}</h5>
                            <button class="btn btn-sm btn-primary add-section" data-section-id="${block.get('id')}">
                                Add to Page
                            </button>
                        </div>
                    </div>
                </div>`;
        });
        
        // Add custom section option
        sectionsHtml += `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Custom Section</h5>
                            <button class="btn btn-sm btn-success" id="create-custom-section">
                                Create New
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <h5>Current Page Sections</h5>
            <div id="page-sections" class="list-group mb-3">
                <!-- Current sections will be listed here -->
            </div>
        </div>`;
        
        modal.setContent(sectionsHtml);
        modal.open();
        
        // Update the current sections list
        updateCurrentSections();
        
        // Add section to page
        document.querySelectorAll('.add-section').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const sectionId = e.target.getAttribute('data-section-id');
                const block = editor.BlockManager.get(sectionId);
                if (block) {
                    editor.addComponents(block.get('content'));
                    modal.close();
                }
            });
        });

        
        
        // Create custom section
        document.getElementById('create-custom-section').addEventListener('click', () => {
            createCustomSection();
        });
        
        // Function to update current sections list
        function updateCurrentSections() {
            const pageComponents = editor.DomComponents.getWrapper().find('section');
            const sectionsContainer = document.getElementById('page-sections');
            sectionsContainer.innerHTML = '';
            
            if (pageComponents.length === 0) {
                sectionsContainer.innerHTML = '<p>No sections added yet</p>';
                return;
            }
            
            pageComponents.forEach((component, index) => {
                const sectionItem = document.createElement('div');
                sectionItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                sectionItem.innerHTML = `
                    <span>Section ${index + 1}</span>
                    <div>
                        <button class="btn btn-sm btn-primary edit-section" data-section-index="${index}">Edit</button>
                        <button class="btn btn-sm btn-warning move-up" data-section-index="${index}" ${index === 0 ? 'disabled' : ''}>↑</button>
                        <button class="btn btn-sm btn-warning move-down" data-section-index="${index}" ${index === pageComponents.length - 1 ? 'disabled' : ''}>↓</button>
                        <button class="btn btn-sm btn-danger remove-section" data-section-index="${index}">Remove</button>
                    </div>
                `;
                sectionsContainer.appendChild(sectionItem);
            });
            
            // Add event listeners to section actions
            document.querySelectorAll('.edit-section').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.getAttribute('data-section-index');
                    editor.select(pageComponents[index]);
                    modal.close();
                });
            });
            
            document.querySelectorAll('.move-up').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.getAttribute('data-section-index'));
                    if (index > 0) {
                        const component = pageComponents[index];
                        const target = pageComponents[index - 1];
                        component.move(editor.DomComponents.getWrapper(), { at: index - 1 });
                        updateCurrentSections();
                    }
                });
            });
            
            document.querySelectorAll('.move-down').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.getAttribute('data-section-index'));
                    if (index < pageComponents.length - 1) {
                        const component = pageComponents[index];
                        const target = pageComponents[index + 1];
                        component.move(editor.DomComponents.getWrapper(), { at: index + 1 });
                        updateCurrentSections();
                    }
                });
            });
            
            document.querySelectorAll('.remove-section').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.getAttribute('data-section-index');
                    if (confirm('Are you sure you want to remove this section?')) {
                        pageComponents[index].remove();
                        updateCurrentSections();
                    }
                });
            });
        }
        
        // Function to create custom section
        function createCustomSection() {
            const customSectionHtml = `
                <div class="p-3">
                    <div class="mb-3">
                        <label for="section-rows" class="form-label">Number of Rows</label>
                        <input type="number" class="form-control" id="section-rows" min="1" max="5" value="1">
                    </div>
                    <div class="mb-3">
                        <label for="section-bg" class="form-label">Background Color</label>
                        <input type="color" class="form-control" id="section-bg" value="#ffffff">
                    </div>
                    <div class="mb-3">
                        <label for="section-padding" class="form-label">Padding (px)</label>
                        <input type="number" class="form-control" id="section-padding" min="0" max="100" value="20">
                    </div>
                    <button id="generate-section" class="btn btn-primary">Generate Section</button>
                </div>
            `;
            
            modal.setContent(customSectionHtml);
            
            document.getElementById('generate-section').addEventListener('click', () => {
                const rows = parseInt(document.getElementById('section-rows').value);
                const bgColor = document.getElementById('section-bg').value;
                const padding = document.getElementById('section-padding').value;
                
                let sectionHtml = `<section style="background-color: ${bgColor}; padding: ${padding}px;">`;
                
                for (let i = 0; i < rows; i++) {
                    sectionHtml += `
                        <div class="row" style="margin-bottom: 15px;">
                            <div class="col-md-6" style="border: 1px dashed #ccc; padding: 15px;">
                                <p>Column 1 Content</p>
                            </div>
                            <div class="col-md-6" style="border: 1px dashed #ccc; padding: 15px;">
                                <p>Column 2 Content</p>
                            </div>
                        </div>
                    `;
                }
                
                sectionHtml += `</section>`;
                
                editor.addComponents(sectionHtml);
                modal.close();
            });
        }
    }
});


editor.Commands.add('edit-form', {
    run(editor) {
        const selectedComponent = editor.getSelected();
        
        // Check if the selected component is a form
        if (!selectedComponent || selectedComponent.get('tagName') !== 'FORM') {
            editor.Modal.open({
                title: 'Form Editor',
                content: 'Please select a form element first'
            });
            return;
        }
        
        const form = selectedComponent;
        const formFields = form.find('input, textarea, select');
        
        let fieldsHtml = `
            <div class="p-3">
                <h5 class="mb-3">Form Fields</h5>
                <div class="mb-3">
                    <button id="add-text-field" class="btn btn-sm btn-primary me-2">Add Text Field</button>
                    <button id="add-email-field" class="btn btn-sm btn-primary me-2">Add Email Field</button>
                    <button id="add-textarea" class="btn btn-sm btn-primary me-2">Add Textarea</button>
                    <button id="add-select" class="btn btn-sm btn-primary me-2">Add Dropdown</button>
                    <button id="add-checkbox" class="btn btn-sm btn-primary me-2">Add Checkbox</button>
                    <button id="add-radio" class="btn btn-sm btn-primary me-2">Add Radio Button</button>
                    <button id="add-date" class="btn btn-sm btn-primary me-2">Add Date Field</button>
                    <button id="add-file" class="btn btn-sm btn-primary me-2">Add File Upload</button>
                </div>
                <div id="form-fields-list" class="list-group mb-3">`;
        
        // List existing form fields
        formFields.forEach((field, index) => {
            const fieldType = field.get('type') || field.get('tagName').toLowerCase();
            const fieldName = field.get('name') || '';
            const fieldLabel = field.parent().find('label')[0]?.get('content') || 'No Label';
            
            fieldsHtml += `
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${fieldLabel}</strong> (${fieldType})
                    </div>
                    <div>
                        <button class="btn btn-sm btn-warning edit-field" data-field-index="${index}">Edit</button>
                        <button class="btn btn-sm btn-danger remove-field" data-field-index="${index}">Remove</button>
                    </div>
                </div>`;
        });
        
        fieldsHtml += `
                </div>
                <div class="mb-3">
                    <h5>Conditional Logic</h5>
                    <button id="add-condition" class="btn btn-sm btn-success">Add Condition</button>
                </div>
            </div>`;
        
        editor.Modal.setTitle('Form Field Editor');
        editor.Modal.setContent(fieldsHtml);
        editor.Modal.open();
        
        // Add field event listeners
        document.getElementById('add-text-field').addEventListener('click', () => {
            addFormField(form, 'text');
        });
        
        document.getElementById('add-email-field').addEventListener('click', () => {
            addFormField(form, 'email');
        });
        
        document.getElementById('add-textarea').addEventListener('click', () => {
            addFormField(form, 'textarea');
        });
        
        document.getElementById('add-select').addEventListener('click', () => {
            addFormField(form, 'select');
        });
        
        document.getElementById('add-checkbox').addEventListener('click', () => {
            addFormField(form, 'checkbox');
        });
        
        document.getElementById('add-radio').addEventListener('click', () => {
            addFormField(form, 'radio');
        });
        
        document.getElementById('add-date').addEventListener('click', () => {
            addFormField(form, 'date');
        });
        
        document.getElementById('add-file').addEventListener('click', () => {
            addFormField(form, 'file');
        });
        
        // Add condition button
        document.getElementById('add-condition').addEventListener('click', () => {
            addCondition(form);
        });
        
        // Edit field event listeners
        document.querySelectorAll('.edit-field').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-field-index');
                editFormField(formFields[index]);
            });
        });
        
        // Remove field event listeners
        document.querySelectorAll('.remove-field').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-field-index');
                if (confirm('Are you sure you want to remove this field?')) {
                    const field = formFields[index];
                    // If there's a label associated with this field, remove it too
                    const fieldParent = field.parent();
                    const label = fieldParent.find('label')[0];
                    if (label) label.remove();
                    field.remove();
                    editor.Modal.close();
                    editor.Commands.run('edit-form');
                }
            });
        });
        
        // Function to add a new form field
        function addFormField(form, type) {
            let fieldHtml = '';
            const fieldId = 'field-' + Math.random().toString(36).substring(2, 9);
            
            switch(type) {
                case 'text':
                    fieldHtml = `
                        <div class="mb-3">
                            <label for="${fieldId}" class="form-label">Text Field</label>
                            <input type="text" class="form-control" id="${fieldId}" name="${fieldId}" placeholder="Enter text">
                        </div>`;
                    break;
                case 'email':
                    fieldHtml = `
                        <div class="mb-3">
                            <label for="${fieldId}" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="${fieldId}" name="${fieldId}" placeholder="name@example.com">
                        </div>`;
                    break;
                case 'textarea':
                    fieldHtml = `
                        <div class="mb-3">
                            <label for="${fieldId}" class="form-label">Message</label>
                            <textarea class="form-control" id="${fieldId}" name="${fieldId}" rows="3" placeholder="Enter your message"></textarea>
                        </div>`;
                    break;
                case 'select':
                    fieldHtml = `
                        <div class="mb-3">
                            <label for="${fieldId}" class="form-label">Select Option</label>
                            <select class="form-select" id="${fieldId}" name="${fieldId}">
                                <option selected>Choose an option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>`;
                    break;
                    case 'checkbox':
                        fieldHtml = `
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="${fieldId}" name="${fieldId}">
                                <label class="form-check-label" for="${fieldId}">Checkbox Label</label>
                            </div>`;
                        break;
                    case 'radio':
                        fieldHtml = `
                            <div class="mb-3">
                                <label class="form-label">Radio Options</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="${fieldId}" id="${fieldId}-1" value="option1">
                                    <label class="form-check-label" for="${fieldId}-1">Option 1</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="${fieldId}" id="${fieldId}-2" value="option2">
                                    <label class="form-check-label" for="${fieldId}-2">Option 2</label>
                                </div>
                            </div>`;
                        break;
                    case 'date':
                        fieldHtml = `
                            <div class="mb-3">
                                <label for="${fieldId}" class="form-label">Date</label>
                                <input type="date" class="form-control" id="${fieldId}" name="${fieldId}">
                            </div>`;
                        break;
                    case 'file':
                        fieldHtml = `
                            <div class="mb-3">
                                <label for="${fieldId}" class="form-label">File Upload</label>
                                <input type="file" class="form-control" id="${fieldId}" name="${fieldId}">
                            </div>`;
                        break;
                }
                
                form.append(fieldHtml);
                editor.Modal.close();
                editor.Commands.run('edit-form');
            }
            
            // Function to edit an existing form field
            function editFormField(field) {
                const fieldType = field.get('type') || field.get('tagName').toLowerCase();
                const fieldId = field.get('id') || '';
                const fieldName = field.get('name') || '';
                const fieldPlaceholder = field.get('placeholder') || '';
                const fieldRequired = field.get('required') || false;
                const fieldParent = field.parent();
                const label = fieldParent.find('label')[0];
                const labelText = label ? label.get('content') : '';
                
                let editHtml = `
                    <div class="p-3">
                        <div class="mb-3">
                            <label class="form-label">Field Label</label>
                            <input type="text" class="form-control" id="edit-label" value="${labelText}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Field ID</label>
                            <input type="text" class="form-control" id="edit-id" value="${fieldId}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Field Name</label>
                            <input type="text" class="form-control" id="edit-name" value="${fieldName}">
                        </div>`;
                
                if (fieldType !== 'checkbox' && fieldType !== 'radio' && fieldType !== 'select' && fieldType !== 'file') {
                    editHtml += `
                        <div class="mb-3">
                            <label class="form-label">Placeholder</label>
                            <input type="text" class="form-control" id="edit-placeholder" value="${fieldPlaceholder}">
                        </div>`;
                }
                
                if (fieldType === 'select') {
                    const options = field.find('option');
                    editHtml += `
                        <div class="mb-3">
                            <label class="form-label">Options (one per line)</label>
                            <textarea class="form-control" id="edit-options" rows="4">${options.map(opt => opt.get('content')).join('\n')}</textarea>
                        </div>`;
                }
                
                editHtml += `
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="edit-required" ${fieldRequired ? 'checked' : ''}>
                            <label class="form-check-label" for="edit-required">Required field</label>
                        </div>
                        <button id="save-field-edit" class="btn btn-primary">Save Changes</button>
                    </div>`;
                
                editor.Modal.setTitle('Edit Form Field');
                editor.Modal.setContent(editHtml);
                
                document.getElementById('save-field-edit').addEventListener('click', () => {
                    const newLabel = document.getElementById('edit-label').value;
                    const newId = document.getElementById('edit-id').value;
                    const newName = document.getElementById('edit-name').value;
                    const newRequired = document.getElementById('edit-required').checked;
                    
                    // Update field attributes
                    field.set('id', newId);
                    field.set('name', newName);
                    field.set('required', newRequired);
                    
                    if (document.getElementById('edit-placeholder')) {
                        const newPlaceholder = document.getElementById('edit-placeholder').value;
                        field.set('placeholder', newPlaceholder);
                    }
                    
                    // Update label if it exists
                    if (label) {
                        label.set('content', newLabel);
                        label.set('for', newId);
                    }
                    
                    // Update select options if applicable
                    if (fieldType === 'select' && document.getElementById('edit-options')) {
                        const optionsText = document.getElementById('edit-options').value;
                        const optionLines = optionsText.split('\n');
                        
                        // Clear existing options
                        field.empty();
                        
                        // Add new options
                        optionLines.forEach((line, i) => {
                            field.append(`<option value="option${i+1}">${line}</option>`);
                        });
                    }
                    
                    editor.Modal.close();
                    editor.Commands.run('edit-form');
                });
            }
            
            // Function to add conditional logic
            function addCondition(form) {
                const formFields = form.find('input, textarea, select');
                
                // Only proceed if we have at least one field to base conditions on
                if (formFields.length === 0) {
                    alert('Add some fields first before creating conditions');
                    return;
                }
                
                let conditionHtml = `
                    <div class="p-3">
                        <h5>Create Condition</h5>
                        <div class="mb-3">
                            <label class="form-label">If this field:</label>
                            <select id="condition-field" class="form-select">`;
                
                formFields.forEach((field, index) => {
                    const fieldType = field.get('type') || field.get('tagName').toLowerCase();
                    const fieldId = field.get('id') || '';
                    const fieldName = field.get('name') || '';
                    const fieldLabel = field.parent().find('label')[0]?.get('content') || 'Unlabeled Field';
                    
                    conditionHtml += `<option value="${fieldId}">${fieldLabel}</option>`;
                });
                
                conditionHtml += `
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Condition:</label>
                            <select id="condition-operator" class="form-select">
                                <option value="equals">Equals</option>
                                <option value="not_equals">Does not equal</option>
                                <option value="contains">Contains</option>
                                <option value="not_contains">Does not contain</option>
                                <option value="greater_than">Is greater than</option>
                                <option value="less_than">Is less than</option>
                                <option value="is_checked">Is checked</option>
                                <option value="is_not_checked">Is not checked</option>
                            </select>
                        </div>
                        <div class="mb-3" id="condition-value-container">
                            <label class="form-label">Value:</label>
                            <input type="text" id="condition-value" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Then:</label>
                            <select id="condition-action" class="form-select">
                                <option value="show">Show</option>
                                <option value="hide">Hide</option>
                                <option value="enable">Enable</option>
                                <option value="disable">Disable</option>
                                <option value="require">Make required</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">These fields:</label>
                            <select id="condition-target-fields" class="form-select" multiple size="4">`;
                
                formFields.forEach((field, index) => {
                    const fieldType = field.get('type') || field.get('tagName').toLowerCase();
                    const fieldId = field.get('id') || '';
                    const fieldName = field.get('name') || '';
                    const fieldLabel = field.parent().find('label')[0]?.get('content') || 'Unlabeled Field';
                    
                    conditionHtml += `<option value="${fieldId}">${fieldLabel}</option>`;
                });
                
                conditionHtml += `
                            </select>
                            <small class="form-text text-muted">Hold Ctrl/Cmd to select multiple fields</small>
                        </div>
                        <button id="save-condition" class="btn btn-primary">Add Condition</button>
                    </div>`;
                
                editor.Modal.setTitle('Add Conditional Logic');
                editor.Modal.setContent(conditionHtml);
                
                // Handle condition operator change to show/hide value input
                document.getElementById('condition-operator').addEventListener('change', function() {
                    const operator = this.value;
                    const valueContainer = document.getElementById('condition-value-container');
                    
                    if (operator === 'is_checked' || operator === 'is_not_checked') {
                        valueContainer.style.display = 'none';
                    } else {
                        valueContainer.style.display = 'block';
                    }
                });
                
                // Handle save condition
                document.getElementById('save-condition').addEventListener('click', () => {
                    const sourceFieldId = document.getElementById('condition-field').value;
                    const operator = document.getElementById('condition-operator').value;
                    const value = document.getElementById('condition-value').value;
                    const action = document.getElementById('condition-action').value;
                    const targetSelect = document.getElementById('condition-target-fields');
                    const targetFields = Array.from(targetSelect.selectedOptions).map(option => option.value);
                    
                    if (targetFields.length === 0) {
                        alert('Please select at least one target field');
                        return;
                    }
                    
                    // Generate conditional JavaScript
                    let conditionScript = `
                    <script>
                        document.getElementById('${sourceFieldId}').addEventListener('change', function() {
                            const sourceValue = this.value;
                            const targetFields = ${JSON.stringify(targetFields)};
                            let conditionMet = false;
                            
                            // Check condition
                            `;
                    
                    switch (operator) {
                        case 'equals':
                            conditionScript += `conditionMet = sourceValue === '${value}';`;
                            break;
                        case 'not_equals':
                            conditionScript += `conditionMet = sourceValue !== '${value}';`;
                            break;
                        case 'contains':
                            conditionScript += `conditionMet = sourceValue.includes('${value}');`;
                            break;
                        case 'not_contains':
                            conditionScript += `conditionMet = !sourceValue.includes('${value}');`;
                            break;
                        case 'greater_than':
                            conditionScript += `conditionMet = parseFloat(sourceValue) > parseFloat('${value}');`;
                            break;
                        case 'less_than':
                            conditionScript += `conditionMet = parseFloat(sourceValue) < parseFloat('${value}');`;
                            break;
                        case 'is_checked':
                            conditionScript += `conditionMet = this.checked;`;
                            break;
                        case 'is_not_checked':
                            conditionScript += `conditionMet = !this.checked;`;
                            break;
                    }
                    
                    conditionScript += `
                            
                            // Apply action to target fields
                            targetFields.forEach(fieldId => {
                                const field = document.getElementById(fieldId);
                                const fieldContainer = field.closest('.mb-3, .form-check');
                                
                                if (field) {
                                    switch('${action}') {
                                        case 'show':
                                            fieldContainer.style.display = conditionMet ? 'block' : 'none';
                                            break;
                                        case 'hide':
                                            fieldContainer.style.display = conditionMet ? 'none' : 'block';
                                            break;
                                        case 'enable':
                                            field.disabled = !conditionMet;
                                            break;
                                        case 'disable':
                                            field.disabled = conditionMet;
                                            break;
                                        case 'require':
                                            field.required = conditionMet;
                                            break;
                                    }
                                }
                            });
                        });
                    </script>`;
                    
                    // Add the script to the form
                    form.append(conditionScript);
                    
                    editor.Modal.close();
                    editor.Commands.run('edit-form');
                });
            }
        }
    });
    
    // Add edit form button to the toolbar
    editor.Panels.addButton('options', {
        id: 'edit-form-btn',
        className: 'fa fa-wpforms',
        command: 'edit-form',
        attributes: { title: 'Edit Form' }
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
        font-family: 'Poppins', sans-serif;
    }

    #gjs {
        height: 100vh;
    }

    .gjs-pn-panels {
        background-color:#4a6cf7;
    }

    .gjs-one-bg {
        background-color: #4a6cf7;
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
        background-color : #16213e;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        display : flex;
        justify-content : center;
        align-item : center;
    }

    .gjs-block:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
`;

document.head.appendChild(style);
