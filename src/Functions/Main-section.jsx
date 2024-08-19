import Slider from "./Slider"
import CarStock from './Car-stock'
import ImageUploader from "./Upload"

export default function MainSection() {
    return (
        <>
        <div className="main-section-container">
            <Slider />
            <CarStock />
            <ImageUploader />
        </div>
        </>
    )
}