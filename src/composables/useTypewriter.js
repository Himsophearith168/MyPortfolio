import { ref, onMounted, onUnmounted } from "vue";

export function useTypewriter(text, speed = 100, loop = true) {
  const displayText = ref("");
  const isTyping = ref(true);
  const isDeleting = ref(false);
  let timer;

  const type = () => {
    const currentText = text;
    let i = 0;
    let deleting = false;

    const typeChar = () => {
      if (!deleting) {
        if (i < currentText.length) {
          displayText.value += currentText.charAt(i);
          i++;
        } else {
          if (loop) {
            deleting = true;
            isTyping.value = false;
            isDeleting.value = true;
          } else {
            return;
          }
        }
      } else {
        if (displayText.value.length > 0) {
          displayText.value = displayText.value.slice(0, -1);
        } else {
          deleting = false;
          isDeleting.value = false;
          isTyping.value = true;
          i = 0;
        }
      }

      timer = setTimeout(typeChar, speed);
    };

    typeChar();
  };

  onMounted(() => {
    type();
  });

  onUnmounted(() => {
    if (timer) clearTimeout(timer);
  });

  return {
    displayText,
    isTyping,
    isDeleting,
  };
}
