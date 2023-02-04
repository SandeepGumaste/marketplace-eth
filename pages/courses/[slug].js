import {
  BaseLayout,
  CourseHero,
  Curriculum,
  KeyPoints,
  Modal,
} from "components";
import { getAllCourses } from "content";

export default function Course({ course }) {
  const { title, description, coverImage } = course;
  return (
    <>
      <div className="py-4">
        <CourseHero
          title={title}
          description={description}
          coverImage={coverImage}
        />
      </div>
      <KeyPoints points={course.wsl} />
      <Curriculum locked={true} />
      <Modal />
    </>
  );
}

export function getStaticPaths() {
  const { data } = getAllCourses();

  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { data } = getAllCourses();
  const course = data.filter((c) => c.slug === params.slug)[0];
  return {
    props: {
      course,
    },
  };
}
