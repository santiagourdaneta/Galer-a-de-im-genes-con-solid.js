import { createSignal } from 'solid-js';
import './style.css';
import image1 from '../public/images/image1.jpg';
import image2 from '../public/images/image2.jpg';
import image3 from '../public/images/image3.jpg';
import image4 from '../public/images/image4.jpg';
import image5 from '../public/images/image5.jpg';
import image6 from '../public/images/image6.jpg';
import image7 from '../public/images/image7.jpg';
import image8 from '../public/images/image8.jpg';
import image9 from '../public/images/image9.jpeg';
import image10 from '../public/images/image10.jpg';



function App() {
    const [images] = createSignal([
        { id: 1, src: image1, alt: 'Imagen 1' },
        { id: 2, src: image2, alt: 'Imagen 2' },
        { id: 3, src: image3, alt: 'Imagen 3' },
        { id: 4, src: image4, alt: 'Imagen 4' },
        { id: 5, src: image5, alt: 'Imagen 5' },
        { id: 6, src: image6, alt: 'Imagen 6' },
        { id: 7, src: image7, alt: 'Imagen 7' },
        { id: 8, src: image8, alt: 'Imagen 8' },
        { id: 9, src: image9, alt: 'Imagen 9' },
        { id: 10, src: image10, alt: 'Imagen 10' },

        // Puedes agregar más imágenes aquí
    ]);

    return (
        <div class="gallery-container">
            {images().map(image => (
                <div class="gallery-item">
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
}

export default App;