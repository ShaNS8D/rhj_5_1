const Image = ({imgClass, src, alt}) => {
  return (
    <img 
    className={imgClass}
    src={src}
    alt={alt}
    />
  )
}

export default Image;