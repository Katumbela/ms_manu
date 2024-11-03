import ContentLoader, { type IContentLoaderProps } from 'react-content-loader';

interface DashCoursesSkeletonProps extends IContentLoaderProps {
  count?: number;
}

const DashCoursesSkeleton = ({ count = 1, ...props }: DashCoursesSkeletonProps) => {
  const skeletons = Array.from({ length: count }).map((_, index) => (
    <ContentLoader
      key={index}
      speed={2}
      width="90%"
      height={90} 
      backgroundColor="#B9B9B9EE"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="80%" height="75" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="75" />
    </ContentLoader>
  ));

  return <>{skeletons}</>;
};

export default DashCoursesSkeleton;
