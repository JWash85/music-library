import GalleryItem from './GalleryItem'

const Gallery = (props) => {
    console.log(props)
    //const data = props.data.result.read()

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
