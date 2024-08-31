<template>
  <span :class="part.selected ? 'selection' : ''" v-for="(part) in parts">
    {{ part.text }}
  </span>
</template>

<script setup>
  const props = defineProps({
    // Text to render
    text: [String, Number],
    // Selection to highlight in the text
    selection: String,
  });

  // Split the text by the selection string, return both matched and unmatched parts
  const parts = computed(() => {
    const selectionLower = props.selection.toLowerCase().trim();

    let remainingText = props.text.toString();

    const result = [];

    // Go over the text from start to end while finding the selection string
    while (remainingText && selectionLower) {
      const index = remainingText.toLowerCase().indexOf(selectionLower);
      if (index < 0) {
        break;
      }

      if (index) {
        result.push({
          text: remainingText.substring(0, index),
          selected: false,
        });
      }
      result.push({
        text: remainingText.substring(index, index + selectionLower.length),
        selected: true,
      });

      // Cut the text after the matched selection
      remainingText = remainingText.substring(index + selectionLower.length);
    }

    // Add the remaining part of the text after the last occurrence of the selection string
    if (remainingText) {
      result.push({
        text: remainingText,
        selected: false,
      })
    }

    return result;
  });
</script>

<style scoped>
  .selection {
    background: #ff0;
  }
</style>
