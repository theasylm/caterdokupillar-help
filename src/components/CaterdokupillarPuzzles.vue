<template>
  <v-sheet theme="dark" class="intro">
    <h1 class="margin-bottom">Caterdokupillar Help</h1>
    <v-img class="mb-4" src="@/assets/logo.png" />
    <p class="margin-bottom">This document is intended to assist you in completing the Caterdokupillar. To complete the Caterdokupillar, start in the top left, and as you complete each grid, you will automatically carry 4 digits over to the next grid as givens for that puzzle. Read the rules carefully for each puzzle, as many contain variants.</p>
    <p>Furthermore, if the unthinkable should happen and you get stuck on a particular puzzle, don't fret, as that's where this document comes in. It not only contains the rules for each puzzle, but most importantly, it has the digits you need for the next grid available for viewing.</p>
    <v-container max-width="100%">
      <v-row>
        <v-col cols="2">
          <v-btn class="mt-4" @click="closeAllPanels" size="x-large">Close All Rules</v-btn>
        </v-col>
        <v-col>
          <v-text-field
            v-model="searchQuery"
            label="Search puzzles by title, author, rules language or number"
            class="mt-4"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <v-sheet class="d-flex flex-wrap bg-surface-variant">
    <v-sheet class="ma-2 pa-2" elevation="5" rounded="true" v-for="(puzzle, index) in filteredPuzzles" :key="index" width="400">
      <div style="text-align: center;">
        <h3>{{ puzzle.originalIndex + 1 }}. {{ puzzle.title }}</h3>
        <h3>by {{ puzzle["author"] }}</h3>
      </div>
      <v-expansion-panels variant="accordion" multiple v-model="openPanels[index]">
        <v-expansion-panel :key="rulesKey(puzzle.originalIndex)" title="Rules">
          <v-expansion-panel-text>
            <!-- Use v-html to render HTML content -->
            <div v-html="formatRules(puzzle.rules)"></div>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel :key="digitsKey(puzzle.originalIndex)" title="Digits">
          <v-expansion-panel-text>
            <!-- Use v-html to render HTML content -->
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

  const filteredPuzzles = computed(() => {
    // If the search query is empty, return the original puzzles array, sorted by originalIndex
    if (!searchQuery.value || !searchQuery.value.trim()) {
      return clonedPuzzles.sort((a, b) => a.originalIndex - b.originalIndex);
    }

    // Otherwise, filter the puzzles based on the search query and sort by originalIndex
    const searchLower = searchQuery.value.toLowerCase().trim();
    return clonedPuzzles
      .filter((puzzle) => {
        // Handle potential null or undefined values by treating them as empty strings
        const title = puzzle.title ? puzzle.title.toLowerCase() : '';
        const author = puzzle.author ? puzzle.author.toLowerCase() : '';
        const rules = puzzle.rules ? puzzle.rules.toLowerCase() : '';
        const indexString = (puzzle.originalIndex + 1).toString();

        return (
          title.includes(searchLower) ||
          author.includes(searchLower) ||
          rules.includes(searchLower) ||
          indexString.includes(searchLower)
        );
      })
      .sort((a, b) => a.originalIndex - b.originalIndex);
  });
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
</style>
