import './Blog.css';
import team from '../../assets/team.png'
import develop from '../../assets/develop.png'
import agile from '../../assets/agile.png'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
export default function Blog() {
    return (
        <>
            <Header />
            <div className="blog-container">
                <h1 className="blog-title">Nuestro Blog de Desarrollo de Software</h1>
                <p className="blog-description">
                    Bienvenido a nuestro blog, donde compartimos las últimas tendencias, consejos y trucos sobre desarrollo de software. Ya sea que seas un desarrollador principiante o experimentado, aquí encontrarás contenido valioso que te ayudará a mejorar tus habilidades y mantenerte actualizado con las novedades del sector.
                </p>
                <div className="blog-images">
                    <div className="blog-image">
                        <img src={agile} alt="Desarrollo de software 1" width={100} height={100} />
                        <p>Explora las mejores prácticas en desarrollo ágil.</p>
                    </div>
                    <div className="blog-image">
                        <img src={develop} alt="Desarrollo de software 2" />
                        <p>Conoce las últimas tendencias en tecnologías frontend y backend.</p>
                    </div>
                    <div className="blog-image">
                        <img src={team} alt="Desarrollo de software 3" />
                        <p>Descubre cómo mejorar la colaboración en equipo con herramientas modernas.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}