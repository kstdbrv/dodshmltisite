<template>
  <div class="search" v-click-outside="onClickOutside">
    <div class="search__form"
         :class="{ 'search__form_has-results': searchResults.length}">
      <input type="text"
             autocomplete="off"
             class="frontpage-global-search__search-input"
             placeholder="Поиск по сайту"
             @input="onTextInput"
             @focus="onTextFocus"
             @keypress.enter="onButtonClick">
      <button class="search__submit"
              @click="onButtonClick">Поиск
      </button>
    </div>

    <div class="search__results"
         v-if="searchResults.length && !resultsHidden">
      <div v-for="value in searchResults"
           class="search__result">
        <a :href="value.url">{{value.label}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import debounce from 'lodash-es/debounce';

  export default {
    data() {
      return {
        text: '',
        searchResults: {},
        resultsHidden: false,
      };
    },

    watch: {
      text(newValue, oldValue) {
        if (newValue.length > 2) {
          this.$store.dispatch('api/doSearchGlobal', newValue)
            .then(result => this.searchResults = result.items);
        }
        else {
          this.searchResults = {};
        }
      },
    },

    methods: {
      onTextInput: debounce(function(e) {
        this.text = e.target.value;
      }, 200),

      onTextFocus: function(e) {
        this.resultsHidden = false;
      },

      onButtonClick: function() {
        let url = new URL('/search', window.location.origin);
        url.searchParams.append('text', this.text);
        window.location.href = url.href;
      },

      onClickOutside: function(event) {
        this.resultsHidden = true;
      },
    },
  };
</script>

<style lang="scss" src="./search.scss" scoped></style>
