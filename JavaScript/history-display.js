class HistoryDisplay {
    constructor() {
        this.newlineCount = 0;
        this.historyContainers = [];
        this.historyContainers[this.newlineCount] = document.getElementsByClassName('history-container')[this.newlineCount];
        this.historyCircleMains = [];
        this.historyCircleAccents = [];
    }

    execute(repaintCount) {
        this.historyContainers[this.newlineCount].insertAdjacentHTML('beforeend', '<div class="history"><div class="history-palette"><div class="history-circle-main"></div><div class="history-circle-accent"></div></div></div>');
        this.historyCircleMains[repaintCount] = document.getElementsByClassName('history-circle-main')[repaintCount];
        this.historyCircleMains[repaintCount].style.backgroundColor = colorSchemes[repaintCount].mainColor;
        this.historyCircleAccents[repaintCount] = document.getElementsByClassName('history-circle-accent')[repaintCount];
        this.historyCircleAccents[repaintCount].style.backgroundColor = colorSchemes[repaintCount].accentColor;
        if (repaintCount % 5 === 4) {
            this.historyContainers[this.newlineCount].insertAdjacentHTML('afterend', '<div class="history-container"></div>');
            this.newlineCount = this.newlineCount + 1;
            this.historyContainers[this.newlineCount] = document.getElementsByClassName('history-container')[this.newlineCount];
        } else {
            ;
        }
    }
}