import Slider from "./Slider"
import CarStock from './Car-stock'
import ImageUploader from "./Upload"
import FinalSection from "./FinalSection"
import Footer from "./Footer"

export default function MainSection() {
    return (
        <>
        <div className="main-section-container">
            <Slider />
            <CarStock />
            <ImageUploader />
            <FinalSection />
            <Footer />
        </div>
        </>
    )
}