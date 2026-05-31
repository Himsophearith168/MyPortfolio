import { ref, onMounted, onUnmounted } from "vue";

export function useScrollSpy(sections) {
  const activeSection = ref("");

  const observer = ref(null);

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.value.observe(el);
    });
  });

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect();
    }
  });

  return {
    activeSection,
  };
}
