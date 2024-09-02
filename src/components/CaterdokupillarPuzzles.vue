<template>
  <v-sheet theme="dark" class="intro">
    <h1 class="margin-bottom">Caterdokupillar Help</h1>
    <v-img class="mb-4" src="@/assets/caterdokupillar.svg" />
    <p class="margin-bottom">This document is intended to assist you in completing the Caterdokupillar. Start in the top left, and as each 6x6 puzzle is completed, 4 digits will automatically carry over as givens for the next puzzle. Read the rules carefully for each puzzle, as many contain variants.</p>
    <p>Furthermore, if you get stuck on a particular puzzle, don't fret, as that's where this document comes in. It not only contains the rules for each puzzle, but most importantly, it has the digits you need for the next puzzle available for viewing.</p>
    <v-container max-width="100%">
      <v-row justify="center">
        <v-col>
          <v-text-field
            v-model="searchQuery"
            label="Search puzzles by title, author, rules language or number"
            class="mt-4"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3" class="d-flex justify-center">
          <v-btn class="mt-4" @click="openAllPanels" size="x-large">Open Selected Puzzles' Rules</v-btn>
        </v-col>
        <v-col cols="3" class="d-flex justify-center">
          <v-btn class="mt-4" @click="closeAllPanels" size="x-large">Close All Puzzles' Rules</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <v-sheet class="d-flex flex-wrap bg-surface-variant" id="puzzles">
    <v-sheet class="ma-2 pa-2" elevation="5" rounded="true" v-for="(puzzle, index) in filteredPuzzles" :key="index" width="400">
      <div style="text-align: center;">
        <h3 v-html="`${puzzle.highlightedIndex} ${puzzle.highlightedTitle}`"></h3>
        <h3 v-html="`by ${puzzle.highlightedAuthor}`"></h3>
      </div>
      <v-expansion-panels variant="accordion" multiple v-model="openPanels[puzzle.originalIndex]">
        <v-expansion-panel :key="rulesKey(puzzle.originalIndex)" title="Rules">
          <v-expansion-panel-text>
            <div v-html="puzzle.highlightedRules"></div>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel :key="digitsKey(puzzle.originalIndex)" title="Digits">
          <v-expansion-panel-text>
            <div v-html="formatDigits(puzzle.digits)"></div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue';
  import puzzles from '@/assets/caterpillar-grids.json';

  const searchQuery = ref('');
  const openPanels = ref(puzzles.map(() => [0]));
  
  // Utility function to escape special characters in a regex pattern
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function formatDigits(digits) {
    if (!digits)
      return ''
    const firstHalf = digits.slice(0, 2);
    const secondHalf = digits.slice(2, 4);

    return `${firstHalf}<br/>${secondHalf}`;
  }

  function formatRules(rules){
    return rules.replaceAll("\n","<br/>")
  }

  function rulesKey(index) {
    return `rules-${index}`
  }
  
  function digitsKey(index) {
    return `digits-${index}`
  }

  function closeAllPanels() {
    openPanels.value = openPanels.value.map((panels) => {
      return panels.filter(panel => panel !== 0);
    });
  }

  const clonedPuzzles =  puzzles.map((puzzle, index) => ({ ...puzzle, originalIndex: index }));

  const highlightMatch = (text, query) => {
    const escapedQuery = escapeRegExp(query);
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  const filteredPuzzles = computed(() => {
  if (!searchQuery.value || !searchQuery.value.trim()) {
    return clonedPuzzles.map(puzzle => ({
      ...puzzle,
      highlightedTitle: puzzle.title,
      highlightedAuthor: puzzle.author,
      highlightedRules: formatRules(puzzle.rules),
      highlightedIndex: `${puzzle.originalIndex + 1}.`
    })).sort((a, b) => a.originalIndex - b.originalIndex);
  }

  const searchLower = searchQuery.value.toLowerCase().trim();

  return clonedPuzzles
    .map(puzzle => {
      const title = puzzle.title ? puzzle.title.toLowerCase() : '';
      const author = puzzle.author ? puzzle.author.toLowerCase() : '';
      const rules = puzzle.rules ? puzzle.rules.toLowerCase() : '';
      const indexString = `${puzzle.originalIndex + 1}.`;

      const highlightedTitle = highlightMatch(puzzle.title || '', searchLower);
      const highlightedAuthor = highlightMatch(puzzle.author || '', searchLower);
      const highlightedRules = highlightMatch(formatRules(puzzle.rules), searchLower);
      const highlightedIndex = highlightMatch(indexString, searchLower);

      return {
        ...puzzle,
        highlightedTitle,
        highlightedAuthor,
        highlightedRules,
        highlightedIndex,
      };
    })
    .filter(puzzle => {
      const title = puzzle.title ? puzzle.title.toLowerCase() : '';
      const author = puzzle.author ? puzzle.author.toLowerCase() : '';
      const rules = puzzle.rules ? puzzle.rules.toLowerCase() : '';
      const indexString = `${puzzle.originalIndex + 1}.`;

      return (
        title.includes(searchLower) ||
        author.includes(searchLower) ||
        rules.includes(searchLower) ||
        indexString.includes(searchLower)
      );
    })
    .sort((a, b) => a.originalIndex - b.originalIndex);
});

  function openAllPanels() {
    filteredPuzzles.value.forEach(puzzle => {
      if (!openPanels.value[puzzle.originalIndex].includes(0)) {
        openPanels.value[puzzle.originalIndex].push(0);
      }
    });
  }
</script>

<style scoped>
  .intro {
    padding: 2rem 2rem 0 2rem;
  }
  .intro h1 {
    text-align: center;
  }
  .margin-bottom {
    margin-bottom: 1.5rem;
  }
  #puzzles .v-sheet {
    background: #e0e0e0;
  }
</style>
