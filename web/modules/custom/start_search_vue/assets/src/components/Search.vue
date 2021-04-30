<template>
  <div class="search-vue" v-click-outside="onClickOutside">
    <div class="search-vue__form"
         :class="{ 'search-vue__form_has-results': searchResults.length}">
      <input type="search"
             autocomplete="off"
             class="search-vue__input"
             placeholder="Поиск по сайту"
             @input="onTextInput"
             @focus="onTextFocus"
             @keypress.enter="onButtonClick">
      <button class="search-vue__submit"
              @click="onButtonClick">
      </button>
    </div>

    <div class="search-vue__results"
         v-if="searchResults.length && !resultsHidden">
      <div v-for="value in searchResults"
           class="search-vue__result">
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
