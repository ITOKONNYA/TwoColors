class PaletteExchangedForHistory {
    constructor(historyNumber) {
        this.historyNumber = historyNumber;
        this.history = document.getElementsByClassName('history')[this.historyNumber];
        this.historyCircleMain = document.getElementsByClassName('history-circle-main')[this.historyNumber];
        this.historyCircleAccent = document.getElementsByClassName('history-circle-accent')[this.historyNumber];
        this.paletteUpdate = new PaletteUpdate();
    }

    activate() {
        this.history.addEventListener('click', () => {
            this.selectedColorScheme = colorSchemes[this.historyNumber];
            this.historyCircleMain.style.backgroundColor = colorSchemes[colorSchemes.length - 1].mainColor;
            this.historyCircleAccent.style.backgroundColor = colorSchemes[colorSchemes.length - 1].accentColor;
            this.paletteUpdate.execute(this.selectedColorScheme.mainColor, this.selectedColorScheme.accentColor);
            colorSchemes[this.historyNumber] = colorSchemes[colorSchemes.length - 1];
            colorSchemes[colorSchemes.length - 1] = this.selectedColorScheme;
        });
    }
}