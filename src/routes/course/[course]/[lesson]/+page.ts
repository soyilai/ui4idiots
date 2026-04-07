import type { PageLoad } from './$types';
import { course } from '$lib/course';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const courseId = parseInt(params.course);
	const lessonId = parseInt(params.lesson);

	if (isNaN(courseId) || courseId < 1 || courseId > course.length) {
		error(404, 'Course not found');
	}

	const currentSection = course[courseId - 1];
	const isInfoPage = lessonId === 0;

	if (isNaN(lessonId) || lessonId < 0 || lessonId > currentSection.lessons.length) {
		error(404, 'Lesson not found');
	}

	try {
		let next = null;
		let previous = null;

		if (isInfoPage) {
			next = {
				href: `/course/${courseId}/1`,
				title: currentSection.lessons[0].title
			};

			if (courseId > 1) {
				const prevSection = course[courseId - 2];
				const prevSectionLastLessonId = prevSection.lessons.length;
				previous = {
					href: `/course/${courseId - 1}/${prevSectionLastLessonId}`,
					title: prevSection.lessons[prevSectionLastLessonId - 1].title
				};
			}
		} else {
			if (currentSection.lessons[lessonId]) {
				next = {
					href: `/course/${courseId}/${lessonId + 1}`,
					title: currentSection.lessons[lessonId].title
				};
			} else if (courseId < course.length) {
				next = {
					href: `/course/${courseId + 1}/0`,
					title: course[courseId].title
				};
			}

			if (lessonId > 1) {
				previous = {
					href: `/course/${courseId}/${lessonId - 1}`,
					title: currentSection.lessons[lessonId - 2].title
				};
			} else if (lessonId === 1) {
				previous = {
					href: `/course/${courseId}/0`,
					title: `${currentSection.title} (Info)`
				};
			}
		}

		const lessonData = isInfoPage
			? {
					title: currentSection.title,
					description: currentSection.description,
					goal: `Overview of ${currentSection.title}`,
					lessons: currentSection.lessons
				}
			: {
					title: currentSection.lessons[lessonId - 1].title,
					description: currentSection.lessons[lessonId - 1].description,
					goal: currentSection.lessons[lessonId - 1].goal
				};

		const contentModule = isInfoPage
			? null
			: await import(`../../../../lib/course/${courseId}/${lessonId}.svx`);

		return {
			courseId,
			section: {
				title: currentSection.title,
				description: currentSection.description
			},
			lesson: {
				...lessonData,
				next,
				previous,
				content: contentModule,
				isInfoPage
			}
		};
	} catch (e) {
		console.error(e);
		error(500, 'Failed to load lesson');
	}
};
