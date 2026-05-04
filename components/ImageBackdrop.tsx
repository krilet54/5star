type ImageBackdropProps = {
  src: string
  position?: string
}

export default function ImageBackdrop({ src, position = 'center' }: ImageBackdropProps) {
  return (
    <>
      <div
        className="absolute inset-0 site-image-backdrop"
        style={{
          backgroundImage: `url('${src}')`,
          backgroundPosition: position,
        }}
      />
      <div className="absolute inset-0 site-image-scrim" />
    </>
  )
}
