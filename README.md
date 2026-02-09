# Portfolio Website

A simple and customizable portfolio website built with React to showcase projects and skills.

## Features
- Responsive layout
- Project showcase with tabs and image slider
- Smooth scroll navigation
- Clean and modern UI
- Light & Dark themes
- Email sending with EmailJs(will require setting up a free account and adding the required keys to the project .env)

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
---
## Getting Started

### Prerequisites
- Node.js (v24+)
- npm

### Installation
```bash
    git clone https://github.com/raabdo/personal_custom_portfolio.git
    cd portfolio
    npm install
    npm run dev 
```

1. Add Your CV
    ```
    /public/files/cv.pdf
2. Place your images in
    ```
    /static/img/my
    export const personalImages = [
    "/static/img/my/image1.jpg",
    "/static/img/my/image2.jpg",
    // add more images here
    ];
3. Customize skills
    ```
    export const skills = [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "TypeScript",
        // add your skills here
    ];

4. Customer Projects
    ```
    export const projects = [
        {
            id: "project1",
            title: "My Awesome Project",
            description: "A short description of your project.",
            techStack: ["React", "TypeScript", "Tailwind CSS"],
            screenshots: [
            "/static/img/projects/project1/-1.png",
            "/static/img/projects/project1/-2.png"
            ]
        },
        // add more projects here
        ];
5. To add email functionality with EmailJS
```
create a .env file in the base folder and add these 3 variables
        VITE_EMAILJS_SERVICE_ID=
        VITE_EMAILJS_TEMPLATE_ID=
        VITE_EMAILJS_PUBLIC_KEY=
```
---
## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is open-source and free to use.



