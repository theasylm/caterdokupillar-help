<template>
  <v-sheet theme="dark" class="intro">
    <h1 class="margin-bottom">Caterdokupillar Help</h1>
    <v-img class="mb-4" src="@/assets/logo.png" />
    <p class="margin-bottom">This document is intended to assist you in completing the Caterdokupillar. To complete the Caterdokupillar, start in the top left, and as you complete each grid, you will automatically carry 4 digits over to the next grid as givens for that puzzle. Read the rules carefully for each puzzle, as many contain variants.</p>
    <p>Furthermore, if the unthinkable should happen and you get stuck on a particular puzzle, don't fret, as that's where this document comes in. It not only contains the rules for each puzzle, but most importantly, it has the digits you need for the next grid available for viewing.</p>
  </v-sheet>
  <v-sheet class="d-flex flex-wrap bg-surface-variant justify-space-between">
    <v-sheet class="ma-2 pa-2" elevation="5" rounded="true" v-for="(puzzle, index) in puzzles" :key="index" max-width="400">
      <div style="text-align: center;">
        <h3>{{ index + 1 }}. {{ puzzle.title }}</h3>
        <h3>by {{ puzzle["author"] }}</h3>
      </div>
      <v-expansion-panels variant="accordion" multiple v-model="openPanels[index]">
        <v-expansion-panel :key="rulesKey(index)" title="Rules">
          <v-expansion-panel-text>
            <!-- Use v-html to render HTML content -->
            <div v-html="formatRules(puzzle.rules)"></div>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel :key="digitsKey(index)" title="Digits">
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

  const openPanels = ref(puzzles.map(() => [0]));
  
  function formatDigits(digits) {
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
</script>

<style>
  .v-application { background-color: rgb(var(--v-theme-surface-variant)) !important }
  .intro {
    padding: 2rem;
  }
  .intro h1 {
    text-align: center;
  }
  .margin-bottom {
    margin-bottom: 1.5rem;
  }
</style>
