// This file manages multiple language support, loading the appropriate language files based on user selection.

const i18n = {
    currentLanguage: 'en',
    translations: {},

    loadLanguage: function (lang) {
        this.currentLanguage = lang;
        fetch(`locales/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                this.translations = data;
                this.applyTranslations();
            })
            .catch(error => console.error('Error loading language file:', error));
    },

    applyTranslations: function () {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.translations[key] || key;
        });
    },

    init: function () {
        const langSelector = document.getElementById('language-selector');
        langSelector.addEventListener('change', (event) => {
            this.loadLanguage(event.target.value);
        });

        // Load default language
        this.loadLanguage(this.currentLanguage);
    }
};

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});