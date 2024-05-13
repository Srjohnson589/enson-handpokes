import GalleryTitle from "@/components/GalleryTitle";
import PicGallery from "@/components/PicGallery";


function Flash() {
    return(
        <main className={'flex min-h-screen flex-col items-center p-2'}>
            <GalleryTitle/>
            <PicGallery />
        </main>
    )
}

export default Flash;