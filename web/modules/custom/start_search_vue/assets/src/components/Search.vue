<template>
  <div class="search-vue" v-click-outside="onClickOutside">
    <div class="search-vue__form"
         :class="{ 'search-vue__form_has-results': searchResults.length }">
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
      <button class="search-vue__clear"
              @click="onClearClick">
      </button>
    </div>

    <div class="search-vue__results"
         v-if="searchResults.length && !resultsHidden">
      <div v-for="value in searchResults"
           class="search-vue__result">
        <a :href="value.url">{{value.label}}</a>
      </div>
    </div>
    <div v-else-if="text.length > 3 && !searchResults.length && !resultsHidden"
         class="search-vue__results">
      <div class="search-vue__result">
       К сожалению, ничего не найдено...
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

      onClearClick: function() {
        this.text = '';
        document.querySelector('.search-vue__input').value = '';
      },

      onClickOutside: function(event) {
        this.resultsHidden = true;
        document.querySelector('.search-vue__input').value = '';

        let search = document.querySelector('.search-vue__submit');
        let clear = document.querySelector('.search-vue__clear');

        clear.style.display = 'none';
        search.style.display = 'block';
      },
    },

    mounted() {
      let input = document.querySelector('.search-vue__input');
      let search = document.querySelector('.search-vue__submit');
      let clear = document.querySelector('.search-vue__clear');

      input.oninput = function(e) {
        if (e.target.value.length === 1) {
        search.style.display = 'none';
        clear.style.display = 'block';
        }
      }

      document.querySelector('.search-vue__clear').onclick = function() {
        clear.style.display = 'none';
        search.style.display = 'block';
      };
    },
  };
</script>

<style lang="scss" src="./search.scss"></style>
