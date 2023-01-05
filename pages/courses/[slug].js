import {
  BaseLayout,
  CourseHero,
  Curriculum,
  KeyPoints,
  Modal,
} from "components";

export default function Course() {
  return (
    <>
      <div className="py-4">
        <CourseHero />
      </div>
      <KeyPoints />
      <Curriculum />
      <Modal />
    </>
  );
}
