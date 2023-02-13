class PaletteUpdate {
    constructor() {
        this.circleMain = document.getElementById('circle-main');
        this.circleAccent = document.getElementById('circle-accent');
        this.codeMain = document.getElementById('code-main');
        this.codeAccent = document.getElementById('code-accent');
        this.lineMain = document.getElementById('line-main');
        this.lineAccent = document.getElementById('line-accent');
    }

    execute(mainColor, accentColor) {
        this.circleMain.style.backgroundColor = mainColor;
        this.circleAccent.style.backgroundColor = accentColor;
        this.codeMain.textContent = mainColor;
        this.codeAccent.textContent = accentColor;
        this.lineMain.style.backgroundColor = mainColor;
        this.lineAccent.style.backgroundColor = accentColor;
    }
}