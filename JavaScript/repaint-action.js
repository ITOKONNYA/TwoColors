class RepaintAction {
    constructor() {
        this.repaintButton = document.getElementById('repaint-button');
        this.colorSchemeGeneration = new ColorSchemeGeneration();
        this.historyDisplay = new HistoryDisplay();
        this.paletteUpdate = new PaletteUpdate();
        this.repaintCount = 0;
    }

    activate() {
        this.repaintButton.addEventListener('click', () => {
            this.historyDisplay.execute(this.repaintCount);
            this.paletteExchangedForHistory = new PaletteExchangedForHistory(this.repaintCount);
            this.paletteExchangedForHistory.activate();
            this.generatedColorScheme = this.colorSchemeGeneration.execute();
            this.paletteUpdate.execute(this.generatedColorScheme.mainColor, this.generatedColorScheme.accentColor);
            this.repaintCount = this.repaintCount + 1;
            colorSchemes[this.repaintCount] = {mainColor: this.generatedColorScheme.mainColor, accentColor: this.generatedColorScheme.accentColor};
        });
    }
}

const repaintAction = new RepaintAction();
repaintAction.activate();