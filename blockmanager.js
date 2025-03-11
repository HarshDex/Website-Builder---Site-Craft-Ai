const blockManager = editor.BlockManager;

// Sections category
blockManager.add('hero-section', {
    label: 'Hero Section',
    content: `
        <section style="padding: 80px 0; background-color: #f8f9fa;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h1 style="font-size: 3rem; font-weight: bold;">Welcome to Our Website</h1>
                        <p style="font-size: 1.2rem; margin: 20px 0;">This is a hero section with a text and a button. You can edit this text and replace it with your own content.</p>
                        <button class="btn btn-primary btn-lg">Get Started</button>
                    </div>
                    <div class="col-md-6">
                        <img src="https://via.placeholder.com/600x400" alt="Hero Image" style="width: 100%; height: auto; border-radius: 10px;">
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('gallery-section', {
    label: 'Gallery Section',
    content: `
        <section style="padding: 70px 0; background-color: #f8f9fa;">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Our Gallery</h2>
                        <p style="font-size: 1.1rem;">Check out our latest work</p>
                    </div>
                </div>
                <div class="row g-4">
                    <div class="col-md-4">
                        <img src="https://via.placeholder.com/600x400" alt="Gallery Image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    </div>
                    <div class="col-md-4">
                        <img src="https://via.placeholder.com/600x400" alt="Gallery Image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    </div>
                    <div class="col-md-4">
                        <img src="https://via.placeholder.com/600x400" alt="Gallery Image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    </div>
                    <div class="col-md-4">
                        <img src="https://via.placeholder.com/600x400" alt="Gallery Image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    </div>
                    <div class="col-md-4">
                        <img src="https://via.placeholder.com/600x400" alt="Gallery Image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    </div>
                    <div class="col-md-4">
                        <img src="https://via.placeholder.com/600x400" alt="Gallery Image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('services-section', {
    label: 'Services Section',
    content: `
        <section style="padding: 80px 0; background-color: #ffffff;">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Our Services</h2>
                        <p style="font-size: 1.1rem;">We offer a wide range of services to meet your needs</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 h-100 shadow-sm hover-shadow">
                            <div class="card-body p-5 text-center">
                                <div style="font-size: 3rem; color: #007bff; margin-bottom: 20px;">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Web Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.</p>
                                <a href="#" class="btn btn-outline-primary mt-3">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 h-100 shadow-sm hover-shadow">
                            <div class="card-body p-5 text-center">
                                <div style="font-size: 3rem; color: #007bff; margin-bottom: 20px;">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Mobile App Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.</p>
                                <a href="#" class="btn btn-outline-primary mt-3">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 h-100 shadow-sm hover-shadow">
                            <div class="card-body p-5 text-center">
                                <div style="font-size: 3rem; color: #007bff; margin-bottom: 20px;">
                                    <i class="fas fa-search"></i>
                                </div>
                                <h3 style="font-size: 1.5rem; margin-bottom: 15px;">SEO Services</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.</p>
                                <a href="#" class="btn btn-outline-primary mt-3">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('blog-section', {
    label: 'Blog Section',
    content: `
        <section style="padding: 70px 0; background-color: #f9f9f9;">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Latest Blog Posts</h2>
                        <p style="font-size: 1.1rem;">Stay updated with our latest news and articles</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 shadow-sm h-100">
                            <img src="https://via.placeholder.com/600x400" class="card-img-top" alt="Blog Image">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <span class="badge bg-primary">Technology</span>
                                    <small class="text-muted">March 5, 2025</small>
                                </div>
                                <h4 style="font-size: 1.3rem;">The Future of Web Development</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.</p>
                                <a href="#" class="btn btn-link p-0">Read More →</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 shadow-sm h-100">
                            <img src="https://via.placeholder.com/600x400" class="card-img-top" alt="Blog Image">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <span class="badge bg-success">Design</span>
                                    <small class="text-muted">March 8, 2025</small>
                                </div>
                                <h4 style="font-size: 1.3rem;">UI/UX Design Trends for 2025</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.</p>
                                <a href="#" class="btn btn-link p-0">Read More →</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 shadow-sm h-100">
                            <img src="https://via.placeholder.com/600x400" class="card-img-top" alt="Blog Image">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <span class="badge bg-danger">Marketing</span>
                                    <small class="text-muted">March 10, 2025</small>
                                </div>
                                <h4 style="font-size: 1.3rem;">Digital Marketing Strategies</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.</p>
                                <a href="#" class="btn btn-link p-0">Read More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
})

blockManager.add('features-section', {
    label: 'Features Section',
    content: `
        <section style="padding: 60px 0; background-color: #ffffff;">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Our Features</h2>
                        <p style="font-size: 1.1rem;">Discover what makes our product special</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body text-center p-4">
                                <div style="font-size: 3rem; color: #007bff; margin-bottom: 20px;">
                                    <i class="fas fa-bolt"></i>
                                </div>
                                <h3 style="font-size: 1.5rem;">Fast & Reliable</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body text-center p-4">
                                <div style="font-size: 3rem; color: #007bff; margin-bottom: 20px;">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <h3 style="font-size: 1.5rem;">Secure</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body text-center p-4">
                                <div style="font-size: 3rem; color: #007bff; margin-bottom: 20px;">
                                    <i class="fas fa-headset"></i>
                                </div>
                                <h3 style="font-size: 1.5rem;">24/7 Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('testimonial-section', {
    label: 'Testimonial Section',
    content: `
        <section style="padding: 60px 0; background-color: #f8f9fa;">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">What Our Clients Say</h2>
                        <p style="font-size: 1.1rem;">Testimonials from our happy customers</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body p-4">
                                <div style="font-size: 1.5rem; color: #ffc107; margin-bottom: 15px;">
                                    ★★★★★
                                </div>
                                <p style="font-style: italic;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</p>
                                <div class="d-flex align-items-center mt-3">
                                    <img src="https://via.placeholder.com/50" alt="Client" style="width: 50px; height: 50px; border-radius: 50%;">
                                    <div class="ms-3">
                                        <h5 style="margin: 0;">John Doe</h5>
                                        <small>CEO, Company Inc.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body p-4">
                                <div style="font-size: 1.5rem; color: #ffc107; margin-bottom: 15px;">
                                    ★★★★★
                                </div>
                                <p style="font-style: italic;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</p>
                                <div class="d-flex align-items-center mt-3">
                                    <img src="https://via.placeholder.com/50" alt="Client" style="width: 50px; height: 50px; border-radius: 50%;">
                                    <div class="ms-3">
                                        <h5 style="margin: 0;">Jane Smith</h5>
                                        <small>Marketing Director</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body p-4">
                                <div style="font-size: 1.5rem; color: #ffc107; margin-bottom: 15px;">
                                    ★★★★★
                                </div>
                                <p style="font-style: italic;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</p>
                                <div class="d-flex align-items-center mt-3">
                                    <img src="https://via.placeholder.com/50" alt="Client" style="width: 50px; height: 50px; border-radius: 50%;">
                                    <div class="ms-3">
                                        <h5 style="margin: 0;">Robert Johnson</h5>
                                        <small>Freelancer</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('contact-section', {
    label: 'Contact Section',
    content: `
        <section style="padding: 60px 0; background-color: #ffffff;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Get In Touch</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 30px;">We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.</p>
                        <div class="mb-4">
                            <h5><i class="fas fa-map-marker-alt me-2" style="color: #007bff;"></i> Address</h5>
                            <p>123 Street Name, City, Country</p>
                        </div>
                        <div class="mb-4">
                            <h5><i class="fas fa-phone me-2" style="color: #007bff;"></i> Phone</h5>
                            <p>+1 (123) 456-7890</p>
                        </div>
                        <div class="mb-4">
                            <h5><i class="fas fa-envelope me-2" style="color: #007bff;"></i> Email</h5>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm">
                            <div class="card-body p-4">
                                <form>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Your Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="John Doe">
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email Address</label>
                                        <input type="email" class="form-control" id="email" placeholder="john@example.com">
                                    </div>
                                    <div class="mb-3">
                                        <label for="message" class="form-label">Message</label>
                                        <textarea class="form-control" id="message" rows="4" placeholder="Your message here..."></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('header-section', {
    label: 'Header Section',
    content: `
        <header style="padding: 20px 0; background-color: #ffffff; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <a href="#" style="text-decoration: none;">
                            <h2 style="font-weight: bold; color: #007bff; margin: 0;">LOGO</h2>
                        </a>
                    </div>
                    <div class="col-md-9">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Portfolio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    `,
    category: 'Sections',
});

blockManager.add('menu-section', {
    label: 'Menu Navigation',
    content: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="padding: 15px 0;">
            <div class="container">
                <a class="navbar-brand" href="#">Brand Name</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNavbar">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Products
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Product 1</a></li>
                                <li><a class="dropdown-item" href="#">Product 2</a></li>
                                <li><a class="dropdown-item" href="#">Product 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
    category: 'Sections',
});

blockManager.add('footer-section', {
    label: 'Footer Section',
    content: `
        <footer style="background-color: #212529; color: #fff; padding: 60px 0 30px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <h4 style="color: #fff; margin-bottom: 20px;">About Us</h4>
                        <p style="color: rgba(255,255,255,0.7);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.</p>
                        <div class="d-flex mt-3">
                            <a href="#" class="me-2" style="color: #fff; font-size: 20px;"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="me-2" style="color: #fff; font-size: 20px;"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="me-2" style="color: #fff; font-size: 20px;"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="me-2" style="color: #fff; font-size: 20px;"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <h4 style="color: #fff; margin-bottom: 20px;">Quick Links</h4>
                        <ul class="list-unstyled" style="color: rgba(255,255,255,0.7);">
                            <li class="mb-2"><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none;">Home</a></li>
                            <li class="mb-2"><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none;">About Us</a></li>
                            <li class="mb-2"><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none;">Services</a></li>
                            <li class="mb-2"><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none;">Portfolio</a></li>
                            <li class="mb-2"><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none;">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-4">
                        <h4 style="color: #fff; margin-bottom: 20px;">Contact Info</h4>
                        <ul class="list-unstyled" style="color: rgba(255,255,255,0.7);">
                            <li class="mb-2"><i class="fas fa-map-marker-alt me-2"></i> 123 Street, City, Country</li>
                            <li class="mb-2"><i class="fas fa-phone me-2"></i> +1 234 567 8900</li>
                            <li class="mb-2"><i class="fas fa-envelope me-2"></i> info@example.com</li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 text-center">
                        <hr style="background-color: rgba(255,255,255,0.1);">
                        <p style="color: rgba(255,255,255,0.7); margin: 0;">© 2025 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    `,
    category: 'Sections',
});

blockManager.add('about-section', {
    label: 'About Us Section',
    content: `
        <section style="padding: 70px 0; background-color: #f9f9f9;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="https://via.placeholder.com/600x400" alt="About Us" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    </div>
                    <div class="col-md-6 d-flex flex-column justify-content-center">
                        <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 20px;">About Our Company</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac.</p>
                        <p style="font-size: 1.1rem; margin-bottom: 30px;">Aenean ut magna lobortis nunc feugiat sagittis. Maecenas ut magna quis turpis mattis venenatis. Donec fermentum aliquet sapien, a cursus lectus pharetra ut.</p>
                        <button class="btn btn-primary btn-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('pricing-section', {
    label: 'Pricing Section',
    content: `
        <section style="padding: 80px 0; background-color: #ffffff;">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Our Pricing Plans</h2>
                        <p style="font-size: 1.1rem;">Choose the perfect plan for your needs</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body text-center p-5">
                                <h3 style="font-size: 1.5rem;">Basic</h3>
                                <div style="font-size: 3rem; font-weight: bold; margin: 20px 0;">$19<span style="font-size: 1rem; font-weight: normal;">/month</span></div>
                                <ul class="list-unstyled mb-4">
                                    <li class="mb-3">5 Projects</li>
                                    <li class="mb-3">20GB Storage</li>
                                    <li class="mb-3">Basic Support</li>
                                </ul>
                                <button class="btn btn-outline-primary btn-lg w-100">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow" style="transform: scale(1.05); z-index: 1; background-color: #f8f9fa;">
                            <div class="card-body text-center p-5">
                                <span class="badge bg-primary mb-2">Popular</span>
                                <h3 style="font-size: 1.5rem;">Professional</h3>
                                <div style="font-size: 3rem; font-weight: bold; margin: 20px 0;">$49<span style="font-size: 1rem; font-weight: normal;">/month</span></div>
                                <ul class="list-unstyled mb-4">
                                    <li class="mb-3">10 Projects</li>
                                    <li class="mb-3">50GB Storage</li>
                                    <li class="mb-3">Priority Support</li>
                                </ul>
                                <button class="btn btn-primary btn-lg w-100">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body text-center p-5">
                                <h3 style="font-size: 1.5rem;">Enterprise</h3>
                                <div style="font-size: 3rem; font-weight: bold; margin: 20px 0;">$99<span style="font-size: 1rem; font-weight: normal;">/month</span></div>
                                <ul class="list-unstyled mb-4">
                                    <li class="mb-3">Unlimited Projects</li>
                                    <li class="mb-3">100GB Storage</li>
                                    <li class="mb-3">24/7 Support</li>
                                </ul>
                                <button class="btn btn-outline-primary btn-lg w-100">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('team-section', {
    label: 'Team Section',
    content: `
        <section style="padding: 70px 0; background-color: #ffffff;">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Meet Our Team</h2>
                        <p style="font-size: 1.1rem;">The talented people behind our success</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card border-0 shadow-sm">
                            <img src="https://via.placeholder.com/400x400" class="card-img-top" alt="Team Member">
                            <div class="card-body text-center p-4">
                                <h4 style="font-size: 1.3rem;">John Doe</h4>
                                <p class="text-muted">CEO & Founder</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.</p>
                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-linkedin"></i></a>
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card border-0 shadow-sm">
                            <img src="https://via.placeholder.com/400x400" class="card-img-top" alt="Team Member">
                            <div class="card-body text-center p-4">
                                <h4 style="font-size: 1.3rem;">Jane Smith</h4>
                                <p class="text-muted">Creative Director</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.</p>
                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-linkedin"></i></a>
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card border-0 shadow-sm">
                            <img src="https://via.placeholder.com/400x400" class="card-img-top" alt="Team Member">
                            <div class="card-body text-center p-4">
                                <h4 style="font-size: 1.3rem;">Mike Johnson</h4>
                                <p class="text-muted">Lead Developer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.</p>
                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-linkedin"></i></a>
                                    <a href="#" class="btn btn-sm btn-outline-primary mx-1"><i class="fab fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('cta-section', {
    label: 'Call to Action Section',
    content: `
        <section style="padding: 80px 0; background-color: #007bff; color: white;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 mb-4 mb-lg-0">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Ready to Get Started?</h2>
                        <p style="font-size: 1.2rem; opacity: 0.9;">Join thousands of satisfied customers using our product</p>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <button class="btn btn-light btn-lg px-4 me-2">Sign Up Free</button>
                        <button class="btn btn-outline-light btn-lg px-4">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});

blockManager.add('stats-section', {
    label: 'Statistics Section',
    content: `
        <section style="padding: 70px 0; background-color: #f8f9fa;">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 style="font-size: 2.5rem; font-weight: bold;">Our Impact</h2>
                        <p style="font-size: 1.1rem;">Some numbers that we are proud of</p>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-3 mb-4">
                        <div class="p-4 bg-white rounded shadow-sm">
                            <h3 style="font-size: 3rem; font-weight: bold; color: #007bff;">500+</h3>
                            <p style="font-size: 1.1rem; color: #6c757d;">Projects Completed</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="p-4 bg-white rounded shadow-sm">
                            <h3 style="font-size: 3rem; font-weight: bold; color: #007bff;">100+</h3>
                            <p style="font-size: 1.1rem; color: #6c757d;">Team Members</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="p-4 bg-white rounded shadow-sm">
                            <h3 style="font-size: 3rem; font-weight: bold; color: #007bff;">50+</h3>
                            <p style="font-size: 1.1rem; color: #6c757d;">Countries Served</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="p-4 bg-white rounded shadow-sm">
                            <h3 style="font-size: 3rem; font-weight: bold; color: #007bff;">15+</h3>
                            <p style="font-size: 1.1rem; color: #6c757d;">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Sections',
});





//Layout Category

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

blockManager.add('two-columns', {
    label: 'Two Columns',
    content: `
        <div class="row" style="border: 1px dashed #ddd; padding: 15px;">
            <div class="col-md-6" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 1</p>
            </div>
            <div class="col-md-6" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 2</p>
            </div>
        </div>
    `,
    category: 'Layout',
});

blockManager.add('three-columns', {
    label: 'Three Columns',
    content: `
        <div class="row" style="border: 1px dashed #ddd; padding: 15px;">
            <div class="col-md-4" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 1</p>
            </div>
            <div class="col-md-4" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 2</p>
            </div>
            <div class="col-md-4" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 3</p>
            </div>
        </div>
    `,
    category: 'Layout',
});

blockManager.add('four-columns', {
    label: 'Four Columns',
    content: `
        <div class="row" style="border: 1px dashed #ddd; padding: 15px;">
            <div class="col-md-3" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 1</p>
            </div>
            <div class="col-md-3" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 2</p>
            </div>
            <div class="col-md-3" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 3</p>
            </div>
            <div class="col-md-3" style="border: 1px solid #ddd; padding: 15px;">
                <p>Column 4</p>
            </div>
        </div>
    `,
    category: 'Layout',
});

blockManager.add('sidebar-layout', {
    label: 'Sidebar Layout',
    content: `
        <div class="row" style="border: 1px dashed #ddd; padding: 15px;">
            <div class="col-md-8" style="border: 1px solid #ddd; padding: 15px;">
                <p>Main Content Area</p>
            </div>
            <div class="col-md-4" style="border: 1px solid #ddd; padding: 15px; background-color: #f8f9fa;">
                <p>Sidebar</p>
            </div>
        </div>
    `,
    category: 'Layout',
});

blockManager.add('grid-layout', {
    label: 'Grid Layout',
    content: `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; border: 1px dashed #ddd; padding: 15px;">
            <div style="border: 1px solid #ddd; padding: 15px; min-height: 100px;">Grid Item 1</div>
            <div style="border: 1px solid #ddd; padding: 15px; min-height: 100px;">Grid Item 2</div>
            <div style="border: 1px solid #ddd; padding: 15px; min-height: 100px;">Grid Item 3</div>
            <div style="border: 1px solid #ddd; padding: 15px; min-height: 100px;">Grid Item 4</div>
            <div style="border: 1px solid #ddd; padding: 15px; min-height: 100px;">Grid Item 5</div>
            <div style="border: 1px solid #ddd; padding: 15px; min-height: 100px;">Grid Item 6</div>
        </div>
    `,
    category: 'Layout',
});

blockManager.add('flex-container', {
    label: 'Flex Container',
    content: `
        <div style="display: flex; flex-wrap: wrap; gap: 15px; border: 1px dashed #ddd; padding: 15px;">
            <div style="flex: 1; min-width: 200px; border: 1px solid #ddd; padding: 15px;">Flex Item 1</div>
            <div style="flex: 1; min-width: 200px; border: 1px solid #ddd; padding: 15px;">Flex Item 2</div>
            <div style="flex: 1; min-width: 200px; border: 1px solid #ddd; padding: 15px;">Flex Item 3</div>
        </div>
    `,
    category: 'Layout',
});





//Basic Category
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

blockManager.add('button', {
    label: 'Button',
    content:
        '<button class="btn btn-primary" style="padding: 10px 20px;">Click Me</button>',
    category: 'Basic',
});





//Form Category

blockManager.add('form', {
    label: 'Basic Form',
    content: `
        <form style="padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
            <h3 style="margin-bottom: 20px;">Contact Form</h3>
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" id="name" name="name" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" name="email" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message:</label>
                <textarea id="message" name="message" class="form-control" rows="4"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    `,
    category: 'Forms',
});

blockManager.add('survey-form', {
    label: 'Survey Form',
    content: `
        <form style="padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
            <h3 style="margin-bottom: 20px;">Customer Survey</h3>
            <div class="mb-3">
                <label class="form-label">How would you rate our service?</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="rating" id="rating5" value="5">
                    <label class="form-check-label" for="rating5">Excellent</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="rating" id="rating4" value="4">
                    <label class="form-check-label" for="rating4">Good</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="rating" id="rating3" value="3">
                    <label class="form-check-label" for="rating3">Average</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="rating" id="rating2" value="2">
                    <label class="form-check-label" for="rating2">Below Average</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="rating" id="rating1" value="1">
                    <label class="form-check-label" for="rating1">Poor</label>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">What aspects of our service did you like? (Select all that apply)</label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="aspects" id="aspect1" value="quality">
                    <label class="form-check-label" for="aspect1">Quality</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="aspects" id="aspect2" value="speed">
                    <label class="form-check-label" for="aspect2">Speed</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="aspects" id="aspect3" value="price">
                    <label class="form-check-label" for="aspect3">Price</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="aspects" id="aspect4" value="support">
                    <label class="form-check-label" for="aspect4">Customer Support</label>
                </div>
            </div>
            <div class="mb-3">
                <label for="feedback" class="form-label">Additional Feedback:</label>
                <textarea id="feedback" name="feedback" class="form-control" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit Survey</button>
        </form>
    `,
    category: 'Forms',
});

blockManager.add('registration-form', {
    label: 'Registration Form',
    content: `
        <form style="padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
            <h3 style="margin-bottom: 20px;">Create Account</h3>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName" class="form-label">First Name:</label>
                    <input type="text" id="firstName" name="firstName" class="form-control" required />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName" class="form-label">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" class="form-control" required />
                </div>
            </div>
            <div class="mb-3">
                <label for="regEmail" class="form-label">Email Address:</label>
                <input type="email" id="regEmail" name="email" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" name="password" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="dob" class="form-label">Date of Birth:</label>
                <input type="date" id="dob" name="dob" class="form-control" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="terms" required>
                <label class="form-check-label" for="terms">I agree to the Terms and Conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    `,
    category: 'Forms',
});

blockManager.add('conditional-form', {
    label: 'Conditional Form',
    content: `
        <form style="padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
            <h3 style="margin-bottom: 20px;">Event Registration</h3>
            <div class="mb-3">
                <label for="eventType" class="form-label">Type of Event:</label>
                <select id="eventType" name="eventType" class="form-select" onchange="toggleEventFields(this.value)">
                    <option value="">Select Event Type</option>
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="webinar">Webinar</option>
                </select>
            </div>
            
            <!-- Conditional fields that will be shown/hidden based on selection -->
            <div id="conferenceFields" style="display: none;">
                <div class="mb-3">
                    <label class="form-label">Which days will you attend?</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="days" id="day1" value="day1">
                        <label class="form-check-label" for="day1">Day 1 - Keynote Sessions</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="days" id="day2" value="day2">
                        <label class="form-check-label" for="day2">Day 2 - Workshops</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="days" id="day3" value="day3">
                        <label class="form-check-label" for="day3">Day 3 - Networking</label>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="dietaryRestrictions" class="form-label">Dietary Restrictions:</label>
                    <input type="text" id="dietaryRestrictions" name="dietaryRestrictions" class="form-control" />
                </div>
            </div>
            
            <div id="workshopFields" style="display: none;">
                <div class="mb-3">
                    <label for="workshopTopic" class="form-label">Select Workshop Topic:</label>
                    <select id="workshopTopic" name="workshopTopic" class="form-select">
                        <option value="design">UX Design</option>
                        <option value="development">Web Development</option>
                        <option value="marketing">Digital Marketing</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="experienceLevel" class="form-label">Experience Level:</label>
                    <select id="experienceLevel" name="experienceLevel" class="form-select">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
            </div>
            
            <div id="webinarFields" style="display: none;">
                <div class="mb-3">
                    <label for="deviceType" class="form-label">Device you'll use to join:</label>
                    <select id="deviceType" name="deviceType" class="form-select">
                        <option value="desktop">Desktop/Laptop</option>
                        <option value="tablet">Tablet</option>
                        <option value="mobile">Mobile Phone</option>
                    </select>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="recordingConsent" name="recordingConsent">
                    <label class="form-check-label" for="recordingConsent">I consent to being recorded during the webinar</label>
                </div>
            </div>
            
            <div class="mb-3">
                <label for="comments" class="form-label">Additional Comments:</label>
                <textarea id="comments" name="comments" class="form-control" rows="3"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Register for Event</button>
        </form>
        
        <script>
            function toggleEventFields(eventType) {
                document.getElementById('conferenceFields').style.display = 'none';
                document.getElementById('workshopFields').style.display = 'none';
                document.getElementById('webinarFields').style.display = 'none';
                
                if (eventType === 'conference') {
                    document.getElementById('conferenceFields').style.display = 'block';
                } else if (eventType === 'workshop') {
                    document.getElementById('workshopFields').style.display = 'block';
                } else if (eventType === 'webinar') {
                    document.getElementById('webinarFields').style.display = 'block';
                }
            }
        </script>
    `,
    category: 'Forms',
});





//Media Category

blockManager.add('video', {
    label: 'Video',
    content:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
    category: 'Media',
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

blockManager.add('image', {
    label: 'Image',
    content:
        '<img src="https://via.placeholder.com/150" alt="Placeholder Image" style="width: 100%; height: auto;" />',
    category: 'Media',
});

blockManager.add('auto-scroll-carousel', {
    label: 'Auto-Scroll Carousel',
    content: `
        <div class="auto-carousel" style="width: 100%; overflow: hidden; position: relative; margin: 20px 0;">
            <div class="carousel-track" style="display: flex; animation: carousel-scroll 20s linear infinite;">
                <img src="https://via.placeholder.com/300x200" style="min-width: 300px; height: 200px; margin-right: 15px;" alt="Carousel Image">
                <img src="https://via.placeholder.com/300x200" style="min-width: 300px; height: 200px; margin-right: 15px;" alt="Carousel Image">
                <img src="https://via.placeholder.com/300x200" style="min-width: 300px; height: 200px; margin-right: 15px;" alt="Carousel Image">
                <img src="https://via.placeholder.com/300x200" style="min-width: 300px; height: 200px; margin-right: 15px;" alt="Carousel Image">
                <img src="https://via.placeholder.com/300x200" style="min-width: 300px; height: 200px; margin-right: 15px;" alt="Carousel Image">
                <!-- Duplicate images for seamless scrolling -->
                <img src="https://via.placeholder.com/300x200" style="min-width: 300px; height: 200px; margin-right: 15px;" alt="Carousel Image">
                <img src="https://via.placeholder.com/300x200" style="min-width: 300px; height: 200px; margin-right: 15px;" alt="Carousel Image">
                <img src="https://via.placeholder.com/300x200" style="min-width: 300px; height: 200px; margin-right: 15px;" alt="Carousel Image">
            </div>
            <style>
                @keyframes carousel-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-300px * 5 - 15px * 5)); }
                }
            </style>
        </div>
    `,
    category: 'Media',
});

blockManager.add('image-gallery', {
    label: 'Image Gallery',
    content: `
        <div class="image-gallery" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px; transition: transform 0.3s;">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px; transition: transform 0.3s;">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px; transition: transform 0.3s;">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px; transition: transform 0.3s;">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px; transition: transform 0.3s;">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px; transition: transform 0.3s;">
        </div>
        <style>
            .image-gallery img:hover {
                transform: scale(1.05);
                cursor: pointer;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
        </style>
    `,
    category: 'Media',
});

blockManager.add('video-background', {
    label: 'Video Background',
    content: `
        <div style="position: relative; height: 500px; overflow: hidden; margin: 20px 0;">
            <video autoplay muted loop style="position: absolute; min-width: 100%; min-height: 100%; width: auto; height: auto; z-index: -1; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div style="position: relative; z-index: 1; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white; padding: 20px; background-color: rgba(0,0,0,0.4);">
                <h2 style="font-size: 3rem; margin-bottom: 20px;">Your Heading Here</h2>
                <p style="font-size: 1.2rem; max-width: 600px; margin-bottom: 30px;">Your descriptive text goes here. Add details about your product, service, or content.</p>
                <button class="btn btn-light btn-lg">Call to Action</button>
            </div>
        </div>
    `,
    category: 'Media',
});

blockManager.add('audio-player', {
    label: 'Audio Player',
    content: `
        <div class="audio-container" style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <h4 style="margin-bottom: 15px;">Audio Title</h4>
            <audio controls style="width: 100%;">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <p style="margin-top: 10px; font-size: 0.9rem; color: #6c757d;">Audio description or transcript can go here.</p>
        </div>
    `,
    category: 'Media',
});

blockManager.add('responsive-iframe', {
    label: 'Responsive iFrame',
    content: `
        <div style="position: relative; overflow: hidden; padding-top: 56.25%; margin: 20px 0;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645189421172!5m2!1sen!2sin" 
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    `,
    category: 'Media',
});

blockManager.add('before-after', {
    label: 'Before-After Slider',
    content: `
        <div class="image-comparison" style="position: relative; width: 100%; height: 400px; margin: 20px 0; overflow: hidden;">
            <img src="https://via.placeholder.com/800x400/FF5733/FFFFFF?text=AFTER" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
            <div class="before-image" style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden;">
                <img src="https://via.placeholder.com/800x400/33A8FF/FFFFFF?text=BEFORE" style="width: 200%; height: 100%; object-fit: cover;">
            </div>
            <div class="slider-handle" style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background-color: white; cursor: ew-resize; z-index: 10;">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background-color: white; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                    <i class="fas fa-arrows-alt-h" style="color: #333;"></i>
                </div>
            </div>
        </div>
        <script>
            // This would need proper implementation with JavaScript for the slider functionality
            console.log('Before-After slider needs JavaScript implementation');
        </script>
    `,
    category: 'Media',
});

blockManager.add('masonry-gallery', {
    label: 'Masonry Gallery',
    content: `
        <div class="masonry-gallery" style="column-count: 3; column-gap: 15px; margin: 20px 0;">
            <div style="break-inside: avoid; margin-bottom: 15px;">
                <img src="https://via.placeholder.com/800x600" style="width: 100%; border-radius: 5px;">
            </div>
            <div style="break-inside: avoid; margin-bottom: 15px;">
                <img src="https://via.placeholder.com/800x1200" style="width: 100%; border-radius: 5px;">
            </div>
            <div style="break-inside: avoid; margin-bottom: 15px;">
                <img src="https://via.placeholder.com/800x800" style="width: 100%; border-radius: 5px;">
            </div>
            <div style="break-inside: avoid; margin-bottom: 15px;">
                <img src="https://via.placeholder.com/800x500" style="width: 100%; border-radius: 5px;">
            </div>
            <div style="break-inside: avoid; margin-bottom: 15px;">
                <img src="https://via.placeholder.com/800x900" style="width: 100%; border-radius: 5px;">
            </div>
            <div style="break-inside: avoid; margin-bottom: 15px;">
                <img src="https://via.placeholder.com/800x700" style="width: 100%; border-radius: 5px;">
            </div>
        </div>
    `,
    category: 'Media',
});

blockManager.add('video-playlist', {
    label: 'Video Playlist',
    content: `
        <div class="video-playlist" style="display: flex; flex-wrap: wrap; gap: 20px; margin: 20px 0;">
            <div style="flex: 2; min-width: 300px;">
                <div class="main-video" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Video Player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <h4 style="margin-top: 15px;">Video Title</h4>
                <p style="color: #6c757d;">Video description goes here. Provide context about what viewers will learn or experience.</p>
            </div>
            <div style="flex: 1; min-width: 200px;">
                <h5 style="margin-bottom: 15px;">Playlist</h5>
                <div class="playlist-items" style="display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; gap: 10px; background-color: #f8f9fa; padding: 10px; border-radius: 5px; cursor: pointer;">
                        <img src="https://via.placeholder.com/120x68" style="width: 120px; height: 68px; object-fit: cover; border-radius: 3px;">
                        <div>
                            <p style="margin: 0; font-weight: bold;">Video 1</p>
                            <small style="color: #6c757d;">3:45</small>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; background-color: #f8f9fa; padding: 10px; border-radius: 5px; cursor: pointer;">
                        <img src="https://via.placeholder.com/120x68" style="width: 120px; height: 68px; object-fit: cover; border-radius: 3px;">
                        <div>
                            <p style="margin: 0; font-weight: bold;">Video 2</p>
                            <small style="color: #6c757d;">2:30</small>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; background-color: #f8f9fa; padding: 10px; border-radius: 5px; cursor: pointer;">
                        <img src="https://via.placeholder.com/120x68" style="width: 120px; height: 68px; object-fit: cover; border-radius: 3px;">
                        <div>
                            <p style="margin: 0; font-weight: bold;">Video 3</p>
                            <small style="color: #6c757d;">4:15</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    category: 'Media',
});





//Component Category

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

blockManager.add('profile-card', {
    label: 'Profile Card',
    content: `
        <div class="card border-0 shadow-sm" style="max-width: 300px; margin: 15px auto;">
            <div class="card-body text-center p-4">
                <img src="https://via.placeholder.com/150" class="rounded-circle mb-3" alt="Profile Image" style="width: 100px; height: 100px; object-fit: cover;">
                <h4 style="font-size: 1.3rem;">John Doe</h4>
                <p class="text-muted">Product Designer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="d-flex justify-content-center">
                    <a href="#" class="btn btn-outline-primary btn-sm mx-1"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="btn btn-outline-primary btn-sm mx-1"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="btn btn-outline-primary btn-sm mx-1"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    `,
    category: 'Components',
});

blockManager.add('pricing-table', {
    label: 'Pricing Table',
    content: `
        <div class="card border-0 shadow-sm" style="max-width: 300px; margin: 15px auto;">
            <div class="card-header bg-primary text-white text-center py-3">
                <h4 class="mb-0">Premium Plan</h4>
            </div>
            <div class="card-body text-center p-4">
                <h2 class="card-title pricing-card-title">$49<small class="text-muted fw-light">/mo</small></h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-primary btn-lg w-100">Get started</button>
            </div>
        </div>
    `,
    category: 'Components',
});

blockManager.add('progress-bar', {
    label: 'Progress Bar',
    content: `
        <div style="margin: 15px 0;">
            <label class="form-label">Web Design</label>
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
        </div>
    `,
    category: 'Components',
});

blockManager.add('timeline', {
    label: 'Timeline',
    content: `
        <div class="timeline" style="position: relative; max-width: 500px; margin: 20px auto;">
            <div class="timeline-item" style="position: relative; padding-left: 40px; margin-bottom: 30px;">
                <div class="timeline-dot" style="position: absolute; left: 0; top: 0; width: 20px; height: 20px; border-radius: 50%; background-color: #007bff;"></div>
                <div class="timeline-date" style="font-weight: bold; margin-bottom: 5px;">2023</div>
                <div class="timeline-content" style="padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
                    <h5>Company Founded</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="timeline-item" style="position: relative; padding-left: 40px; margin-bottom: 30px;">
                <div class="timeline-dot" style="position: absolute; left: 0; top: 0; width: 20px; height: 20px; border-radius: 50%; background-color: #007bff;"></div>
                <div class="timeline-date" style="font-weight: bold; margin-bottom: 5px;">2024</div>
                <div class="timeline-content" style="padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
                    <h5>Major Milestone</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    `,
    category: 'Components',
});

blockManager.add('testimonial-slider', {
    label: 'Testimonial Slider',
    content: `
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px; margin: 20px auto;">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4 text-center">
                            <img src="https://via.placeholder.com/80" class="rounded-circle mb-3" alt="Testimonial">
                            <p class="lead">"This product has completely transformed our business operations."</p>
                            <h5>John Smith</h5>
                            <p class="text-muted">CEO, Company Inc.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4 text-center">
                            <img src="https://via.placeholder.com/80" class="rounded-circle mb-3" alt="Testimonial">
                            <p class="lead">"The customer support team is incredibly responsive and helpful."</p>
                            <h5>Jane Doe</h5>
                            <p class="text-muted">Marketing Director</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    `,
    category: 'Components',
});

blockManager.add('social-icons', {
    label: 'Social Icons',
    content: `
        <div class="social-icons" style="display: flex; gap: 10px; justify-content: center; margin: 15px 0;">
            <a href="#" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background-color: #3b5998; color: white; text-decoration: none;">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background-color: #1da1f2; color: white; text-decoration: none;">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background-color: #0077b5; color: white; text-decoration: none;">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background-color: #e4405f; color: white; text-decoration: none;">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
    `,
    category: 'Components',
});






//Animation category 
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

blockManager.add('bounce-in', {
    label: 'Bounce In',
    content: '<div class="animate__animated animate__bounceIn">This content bounces in</div>',
    category: 'Animations',
});

blockManager.add('flip', {
    label: 'Flip Animation',
    content: '<div class="animate__animated animate__flip">This content flips</div>',
    category: 'Animations',
});

blockManager.add('pulse', {
    label: 'Pulse Effect',
    content: '<div class="animate__animated animate__pulse animate__infinite">This content pulses continuously</div>',
    category: 'Animations',
});

blockManager.add('zoom-in', {
    label: 'Zoom In',
    content: '<div class="animate__animated animate__zoomIn">This content zooms in</div>',
    category: 'Animations',
});

blockManager.add('shake', {
    label: 'Shake Effect',
    content: '<div class="animate__animated animate__shakeX">This content shakes horizontally</div>',
    category: 'Animations',
});

blockManager.add('aos-fade-up', {
    label: 'AOS Fade Up',
    content: `
      <div data-aos="fade-up" style="padding: 30px; background-color: #f0f0f0; margin: 20px 0;">
        <h3>This content will animate when scrolled into view</h3>
        <p>Scroll down to see the animation effect</p>
      </div>
    `,
    category: 'Animations',
  });
  
  blockManager.add('aos-fade-down', {
    label: 'AOS Fade Down',
    content: `
      <div data-aos="fade-down" data-aos-duration="1000" style="padding: 30px; background-color: #f0f0f0; margin: 20px 0;">
        <h3>This content fades down</h3>
        <p>With a 1 second duration</p>
      </div>
    `,
    category: 'Animations',
  });
  
blockManager.add('animated-section', {
    label: 'Animated Section',
    content: `
        <section class="animate__animated animate__fadeIn" style="padding: 50px 0; background-color: #f8f9fa;">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="animate__animated animate__slideInDown" style="animation-delay: 0.5s;">Animated Section</h2>
                        <p class="animate__animated animate__fadeIn" style="animation-delay: 1s;">This entire section has animations applied to different elements</p>
                        <button class="btn btn-primary animate__animated animate__bounceIn" style="animation-delay: 1.5s;">Click Me</button>
                    </div>
                </div>
            </div>
        </section>
    `,
    category: 'Animations',
});

blockManager.add('typing-text', {
    label: 'Typing Text',
    content: `
        <div style="padding: 20px; text-align: center;">
            <h3>I am a <span id="typed-text"></span></h3>
            <script>
                setTimeout(() => {
                    new Typed('#typed-text', {
                        strings: ['Designer', 'Developer', 'Marketer', 'Photographer'],
                        typeSpeed: 50,
                        backSpeed: 30,
                        loop: true
                    });
                }, 1000);
            </script>
        </div>
    `,
    category: 'Animations',
});

blockManager.add('scroll-reveal', {
    label: 'Scroll Reveal',
    content: `
        <div data-aos="fade-up" data-aos-duration="1000" style="padding: 30px; background-color: #f0f0f0; margin: 20px 0;">
            <h3>This content will animate when scrolled into view</h3>
            <p>Add the AOS library to your page to enable this effect</p>
            <script>
                // Note: This requires AOS library to be included in your project
                document.addEventListener('DOMContentLoaded', function() {
                    AOS.init();
                });
            </script>
        </div>
    `,
    category: 'Animations',
});





//Interactive Category

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
                        This is the first item's accordion body. Click the header to expand/collapse.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        This is the second item's accordion body. It's hidden by default.
                    </div>
                </div>
            </div>
        </div>
    `,
    category: 'Interactive',
});

blockManager.add('tabs', {
    label: 'Tabs',
    content: `
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">Home</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button">Contact</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active p-3" id="home" role="tabpanel">
                    This is the home tab content.
                </div>
                <div class="tab-pane fade p-3" id="profile" role="tabpanel">
                    This is the profile tab content.
                </div>
                <div class="tab-pane fade p-3" id="contact" role="tabpanel">
                    This is the contact tab content.
                </div>
            </div>
        </div>
    `,
    category: 'Interactive',
});

blockManager.add('modal-popup', {
    label: 'Modal Popup',
    content: `
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Open Modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Modal content goes here.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    category: 'Interactive',
});

blockManager.add('tooltip-element', {
    label: 'Tooltip',
    content: `
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="This is a tooltip">
            Hover over me
        </button>
        <script>
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
        </script>
    `,
    category: 'Interactive',
});

blockManager.add('image-lightbox', {
    label: 'Image Lightbox',
    content: `
        <div class="image-gallery">
            <a href="https://via.placeholder.com/1200x800" data-lightbox="gallery" data-title="Image 1">
                <img src="https://via.placeholder.com/300x200" alt="Gallery Image" style="cursor: pointer;">
            </a>
            <script>
                // Note: This requires lightbox2 library to be included in your project
                document.addEventListener('DOMContentLoaded', function() {
                    // Initialize lightbox if the library is available
                    if (typeof lightbox !== 'undefined') {
                        lightbox.option({
                            'resizeDuration': 200,
                            'wrapAround': true
                        });
                    }
                });
            </script>
        </div>
    `,
    category: 'Interactive',
});

blockManager.add('interactive-map', {
    label: 'Interactive Map',
    content: `
        <div id="map" style="height: 400px; width: 100%;"></div>
        <script>
            function initMap() {
                // Create a map centered at a specific location
                const map = new google.maps.Map(document.getElementById("map"), {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8,
                });
                
                // Add a marker
                const marker = new google.maps.Marker({
                    position: { lat: -34.397, lng: 150.644 },
                    map: map,
                    title: "Hello World!",
                });
            }
            
            // Note: You'll need to add your Google Maps API key
            // and include the Google Maps JavaScript API in your project
        </script>
    `,
    category: 'Interactive',
});

blockManager.add('countdown-timer', {
    label: 'Countdown Timer',
    content: `
        <div class="countdown-timer text-center" style="margin: 20px 0;">
            <h3>Product Launch</h3>
            <div id="countdown" style="display: flex; justify-content: center; gap: 15px; margin-top: 15px;">
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; min-width: 80px;">
                    <div id="days" style="font-size: 2rem; font-weight: bold;">00</div>
                    <div>Days</div>
                </div>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; min-width: 80px;">
                    <div id="hours" style="font-size: 2rem; font-weight: bold;">00</div>
                    <div>Hours</div>
                </div>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; min-width: 80px;">
                    <div id="minutes" style="font-size: 2rem; font-weight: bold;">00</div>
                    <div>Minutes</div>
                </div>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; min-width: 80px;">
                    <div id="seconds" style="font-size: 2rem; font-weight: bold;">00</div>
                    <div>Seconds</div>
                </div>
            </div>
            <script>
                // Set the countdown date (1 month from now)
                const countdownDate = new Date();
                countdownDate.setMonth(countdownDate.getMonth() + 1);
                
                // Update the countdown every 1 second
                const countdownTimer = setInterval(function() {
                    const now = new Date().getTime();
                    const distance = countdownDate - now;
                    
                    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
                    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    if (distance < 0) {
                        clearInterval(countdownTimer);
                        document.getElementById("countdown").innerHTML = "EXPIRED";
                    }
                }, 1000);
            </script>
        </div>
    `,
    category: 'Interactive',
});

blockManager.add('text-scroller', {
    label: 'Text Scroller',
    content: `
        <div class="scroller-container" style="width: 100%; overflow: hidden; background-color: #f8f9fa; padding: 15px 0; margin: 20px 0;">
            <div class="scrolling-text" style="white-space: nowrap; animation: scroll-left 20s linear infinite;">
                <span style="margin-right: 50px; font-size: 18px;">Important Announcement</span>
                <span style="margin-right: 50px; font-size: 18px;">Breaking News</span>
                <span style="margin-right: 50px; font-size: 18px;">Special Offer: 50% Off</span>
                <span style="margin-right: 50px; font-size: 18px;">Limited Time Deal</span>
                <span style="margin-right: 50px; font-size: 18px;">New Products Available</span>
            </div>
            <style>
                @keyframes scroll-left {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            </style>
        </div>
    `,
    category: 'Interactive',
});

blockManager.add('news-ticker', {
    label: 'News Ticker',
    content: `
        <div class="ticker-container" style="background-color: #343a40; color: white; padding: 10px 0; overflow: hidden; position: relative;">
            <div class="ticker-wrapper" style="animation: ticker-scroll 30s linear infinite;">
                <div class="ticker-item" style="display: inline-block; padding: 0 30px;">Breaking News: Website Builder Launches New Features</div>
                <div class="ticker-item" style="display: inline-block; padding: 0 30px;">Tech Update: AI Integration Now Available</div>
                <div class="ticker-item" style="display: inline-block; padding: 0 30px;">Market Alert: Digital Trends for 2025</div>
                <div class="ticker-item" style="display: inline-block; padding: 0 30px;">Event Announcement: Join Our Webinar Next Week</div>
            </div>
            <style>
                @keyframes ticker-scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            </style>
        </div>
    `,
    category: 'Interactive',
});

blockManager.add('vertical-news-scroller', {
    label: 'Vertical News Scroller',
    content: `
        <div class="vertical-scroller" style="height: 300px; overflow: hidden; border: 1px solid #ddd; border-radius: 5px; position: relative; margin: 20px 0;">
            <div class="scroller-header" style="background-color: #007bff; color: white; padding: 10px; text-align: center; font-weight: bold;">
                Latest Updates
            </div>
            <div class="vertical-scroll-container" style="height: calc(100% - 40px); overflow: hidden; position: relative;">
                <div class="scroll-content" style="animation: scroll-up 20s linear infinite;">
                    <div class="news-item" style="padding: 15px; border-bottom: 1px solid #eee;">
                        <h5 style="margin: 0 0 5px 0;">New Feature Released</h5>
                        <p style="margin: 0;">Our latest update includes exciting new features for all users.</p>
                    </div>
                    <div class="news-item" style="padding: 15px; border-bottom: 1px solid #eee;">
                        <h5 style="margin: 0 0 5px 0;">Upcoming Maintenance</h5>
                        <p style="margin: 0;">Scheduled maintenance will occur on March 15, 2025.</p>
                    </div>
                    <div class="news-item" style="padding: 15px; border-bottom: 1px solid #eee;">
                        <h5 style="margin: 0 0 5px 0;">New Partnership Announced</h5>
                        <p style="margin: 0;">We're excited to announce our partnership with Tech Solutions Inc.</p>
                    </div>
                    <div class="news-item" style="padding: 15px; border-bottom: 1px solid #eee;">
                        <h5 style="margin: 0 0 5px 0;">Customer Spotlight</h5>
                        <p style="margin: 0;">See how ABC Company achieved success using our platform.</p>
                    </div>
                    <!-- Duplicate items for seamless scrolling -->
                    <div class="news-item" style="padding: 15px; border-bottom: 1px solid #eee;">
                        <h5 style="margin: 0 0 5px 0;">New Feature Released</h5>
                        <p style="margin: 0;">Our latest update includes exciting new features for all users.</p>
                    </div>
                    <div class="news-item" style="padding: 15px; border-bottom: 1px solid #eee;">
                        <h5 style="margin: 0 0 5px 0;">Upcoming Maintenance</h5>
                        <p style="margin: 0;">Scheduled maintenance will occur on March 15, 2025.</p>
                    </div>
                </div>
            </div>
            <style>
                @keyframes scroll-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
            </style>
        </div>
    `,
    category: 'Interactive',
});


// E-commerce Category
blockManager.add('product-card', {
    label: 'Product Card',
    content: `
        <div class="card product-card border-0 shadow-sm" style="max-width: 300px; margin: 15px auto;">
            <div class="badge bg-danger position-absolute" style="top: 10px; right: 10px;">Sale</div>
            <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product Image">
            <div class="card-body p-4">
                <h5 class="card-title">Product Name</h5>
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div>
                        <span class="text-danger fw-bold">$49.99</span>
                        <span class="text-muted text-decoration-line-through ms-2">$69.99</span>
                    </div>
                    <div style="color: #ffc107;">★★★★☆</div>
                </div>
                <p class="card-text">Short product description goes here.</p>
                <button class="btn btn-primary w-100">Add to Cart</button>
            </div>
        </div>
    `,
    category: 'E-commerce',
});

blockManager.add('product-grid', {
    label: 'Product Grid',
    content: `
        <div class="container">
            <h2 class="text-center mb-4">Featured Products</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card product-card h-100 border-0 shadow-sm">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product Image">
                        <div class="card-body p-4">
                            <h5 class="card-title">Product 1</h5>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="fw-bold">$29.99</span>
                                <div style="color: #ffc107;">★★★★★</div>
                            </div>
                            <p class="card-text">Short product description goes here.</p>
                            <button class="btn btn-outline-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card product-card h-100 border-0 shadow-sm">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product Image">
                        <div class="card-body p-4">
                            <h5 class="card-title">Product 2</h5>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="fw-bold">$39.99</span>
                                <div style="color: #ffc107;">★★★★☆</div>
                            </div>
                            <p class="card-text">Short product description goes here.</p>
                            <button class="btn btn-outline-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card product-card h-100 border-0 shadow-sm">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product Image">
                        <div class="card-body p-4">
                            <h5 class="card-title">Product 3</h5>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="fw-bold">$49.99</span>
                                <div style="color: #ffc107;">★★★★★</div>
                            </div>
                            <p class="card-text">Short product description goes here.</p>
                            <button class="btn btn-outline-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    category: 'E-commerce',
});


// Charts Category
blockManager.add('bar-chart', {
    label: 'Bar Chart',
    content: `
        <div class="chart-container" style="position: relative; height:300px; width:100%; margin: 20px 0;">
            <canvas id="barChart"></canvas>
            <script>
                setTimeout(() => {
                    const ctx = document.getElementById('barChart').getContext('2d');
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Sales',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }, 1000);
            </script>
        </div>
    `,
    category: 'Charts',
});


// SEO Category
blockManager.add('seo-meta', {
    label: 'SEO Meta Tags',
    content: `
        <div class="seo-meta-container p-3 bg-light border rounded" style="margin: 20px 0;">
            <h5>SEO Meta Tags</h5>
            <div class="mb-3">
                <label class="form-label">Page Title</label>
                <input type="text" class="form-control" placeholder="Enter page title (55-60 characters)" maxlength="60">
            </div>
            <div class="mb-3">
                <label class="form-label">Meta Description</label>
                <textarea class="form-control" rows="3" placeholder="Enter meta description (150-160 characters)" maxlength="160"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Focus Keywords</label>
                <input type="text" class="form-control" placeholder="keyword1, keyword2, keyword3">
            </div>
            <small class="text-muted">These tags will be added to your page's head section.</small>
        </div>
    `,
    category: 'SEO',
});


// Social Media Category
blockManager.add('social-feed', {
    label: 'Social Media Feed',
    content: `
        <div class="social-feed-container" style="max-width: 500px; margin: 20px auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <div class="social-header bg-primary text-white p-3 d-flex align-items-center">
                <i class="fab fa-twitter me-2" style="font-size: 24px;"></i>
                <h5 class="m-0">Twitter Feed</h5>
            </div>
            <div class="p-3">
                <div class="social-post mb-3 pb-3 border-bottom">
                    <div class="d-flex align-items-center mb-2">
                        <img src="https://via.placeholder.com/40" class="rounded-circle me-2" alt="Profile">
                        <div>
                            <strong>User Name</strong> <span class="text-muted">@username</span>
                            <div class="text-muted small">2 hours ago</div>
                        </div>
                    </div>
                    <p>This is a sample tweet with some #hashtags and @mentions that demonstrates what your embedded social feed might look like.</p>
                    <div class="d-flex">
                        <button class="btn btn-sm btn-outline-secondary me-2"><i class="far fa-heart me-1"></i> 24</button>
                        <button class="btn btn-sm btn-outline-secondary me-2"><i class="far fa-comment me-1"></i> 5</button>
                        <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-retweet me-1"></i> 12</button>
                    </div>
                </div>
                <div class="social-post">
                    <div class="d-flex align-items-center mb-2">
                        <img src="https://via.placeholder.com/40" class="rounded-circle me-2" alt="Profile">
                        <div>
                            <strong>Another User</strong> <span class="text-muted">@anotheruser</span>
                            <div class="text-muted small">5 hours ago</div>
                        </div>
                    </div>
                    <p>Another sample tweet to show multiple posts in the feed. Check out this link: https://example.com</p>
                    <div class="d-flex">
                        <button class="btn btn-sm btn-outline-secondary me-2"><i class="far fa-heart me-1"></i> 18</button>
                        <button class="btn btn-sm btn-outline-secondary me-2"><i class="far fa-comment me-1"></i> 3</button>
                        <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-retweet me-1"></i> 7</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    category: 'Social Media',
});
