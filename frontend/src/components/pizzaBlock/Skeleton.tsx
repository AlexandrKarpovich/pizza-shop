import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-9" y="263" rx="9" ry="9" width="280" height="27" />
        <rect x="-4" y="314" rx="11" ry="11" width="280" height="76" />
        <rect x="0" y="423" rx="9" ry="9" width="95" height="21" />
        <rect x="48" y="442" rx="0" ry="0" width="1" height="7" />
        <rect x="106" y="415" rx="9" ry="9" width="171" height="41" />
        <circle cx="134" cy="123" r="110" />
    </ContentLoader>
)

export default Skeleton
