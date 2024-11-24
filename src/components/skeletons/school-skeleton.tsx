import ContentLoader, { type IContentLoaderProps } from 'react-content-loader';

interface SchoolComponentSkeletonProps extends IContentLoaderProps {
  count?: number;
}

const SchoolComponentSkeleton = ({ count = 1, ...props }: SchoolComponentSkeletonProps) => {
  const skeletons = Array.from({ length: count }).map((_, index) => (
    <ContentLoader
      key={index}
      speed={2}
      width="100%"
      height={90}
      backgroundColor="#B9B9B9EE"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="10" y="10" rx="50%" ry="50%" width="50" height="50" /> {/* Placeholder for the logo */}
      <rect x="70" y="15" rx="4" ry="4" width="60%" height="15" />  {/* Placeholder for the school name */}
      <rect x="70" y="40" rx="4" ry="4" width="40%" height="12" />  {/* Placeholder for courses count */}
      <rect x="70" y="60" rx="4" ry="4" width="20%" height="12" />  {/* Placeholder for province */}
    </ContentLoader>
  ));

  return <>{skeletons}</>;
};

export default SchoolComponentSkeleton;
