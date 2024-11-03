
import ContentLoader from 'react-content-loader'

const NavBarLoaderSkeleton = ({ ...props }) => {
  return (
    <ContentLoader  width={"100%"} height={96} {...props}>
      
      <rect x="28" y="31" rx="0" ry="10" width="365" height="65" /> 
    </ContentLoader>
  )
}


export default NavBarLoaderSkeleton