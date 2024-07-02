import React from 'react'
import './Blog.css';
// import blogImage1 from '../../assets/blogImage1.jpg';
// import blogImage2 from '../../assets/blogImage2.jpg';
// import blogImage3 from '../../assets/blogImage3.jpg';

export default function Blog() {
  return (
    <div className="blog-container">
        <h1 className="blog-title">Nuestro Blog de Desarrollo de Software</h1>
        <p className="blog-description">
        Bienvenido a nuestro blog, donde compartimos las últimas tendencias, consejos y trucos sobre desarrollo de software. Ya sea que seas un desarrollador principiante o experimentado, aquí encontrarás contenido valioso que te ayudará a mejorar tus habilidades y mantenerte actualizado con las novedades del sector.
        </p>
        <div className="blog-images">
            <div className="blog-image">
                <img  alt="Desarrollo de software 1" />
                <p>Explora las mejores prácticas en desarrollo ágil.</p>
            </div>
            <div className="blog-image">
                <img  alt="Desarrollo de software 2" />
                <p>Conoce las últimas tendencias en tecnologías frontend y backend.</p>
            </div>
            <div className="blog-image">
                <img  alt="Desarrollo de software 3" />
                <p>Descubre cómo mejorar la colaboración en equipo con herramientas modernas.</p>
            </div>
        </div>
    </div>
  )
}
