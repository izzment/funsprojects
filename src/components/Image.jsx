import { IKImage } from 'imagekitio-react';


const Image = ({ src, className, w, h, alt }) => {
    return (
        <IKImage
            urlEndpoint="https://ik.imagekit.io/izzment/"
            path={src}
            className={className}
            lqip={{ active: true, quality: 20 }}
            width={w}
            height={h}
            alt={alt}
            transformation={[
                {
                    width:w,
                    height:h,
                }
            ]}
        />
    )
}

export default Image