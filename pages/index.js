import { useWeb3 } from "components/providers";
import { CourseList, Hero } from "components/ui";
import { getAllCourses } from "content";

export default function Home({ courses }) {
  const { web3, isInitialized } = useWeb3();
  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  );
}
export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}
