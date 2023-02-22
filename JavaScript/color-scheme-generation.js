class ColorSchemeGeneration {
    execute() {
        this.mainToneNumber = Math.trunc(Math.random() * 12);
        this.mainHueNumber = Math.trunc(Math.random() * 12);
        this.generateAccentColorCodes();
        this.mainColor = colorCodes[this.mainToneNumber][this.mainHueNumber];
        this.accentColor = this.accentColorCodes[Math.trunc(Math.random() * this.accentColorCodes.length)];
        this.generatedColorScheme = {mainColor: this.mainColor, accentColor: this.accentColor};
        return this.generatedColorScheme;
    }

    generateAccentColorCodes() {
        this.accentColorCodes = [];
        this.count = 0;
        for (let accentToneNumber = 0; accentToneNumber < 12; accentToneNumber ++) {
            if (this.mainToneNumber === 0) {
                //when mainTone is vivid
                if (accentToneNumber === 8) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            } else if (this.mainToneNumber === 1) {
                //when mainTone is bright
                if (accentToneNumber === 8) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            } else if (this.mainToneNumber === 2) {
                //when mainTone is strong
                if (accentToneNumber === 8) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            } else if (this.mainToneNumber === 3) {
                //when mainTone is deep
                if (accentToneNumber === 8) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            } else if (this.mainToneNumber === 4) {
                //when mainTone is light
                this.addColorCode(accentToneNumber);
            } else if (this.mainToneNumber === 5) {
                //when mainTone is soft
                if (accentToneNumber === 8) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            }else if (this.mainToneNumber === 6) {
                //when mainTone is dull
                if (accentToneNumber === 7 || accentToneNumber === 8) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            }else if (this.mainToneNumber === 7) {
                //when mainTone is dark
                if (accentToneNumber === 7 || accentToneNumber === 8 || accentToneNumber === 11) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            } else if (this.mainToneNumber === 8) {
                //when mainTone is pale
                if (accentToneNumber === 8 || accentToneNumber === 9) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            } else if (this.mainToneNumber === 9) {
                //when mainTone is lightGrayish
                if (accentToneNumber === 8 || accentToneNumber === 9) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            } else if (this.mainToneNumber === 10) {
                //when mainTone is grayish
                if (accentToneNumber === 7 || accentToneNumber === 8 || accentToneNumber === 10 || accentToneNumber === 11) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            } else {
                //when mainTone is darkGrayish
                if (accentToneNumber === 3 || accentToneNumber === 7 || accentToneNumber === 8 || accentToneNumber === 10 || accentToneNumber === 11) {
                    ;
                } else {
                    this.addColorCode(accentToneNumber);
                }
            }
        }
    }

    addColorCode(accentToneNumber) {
        if (this.mainHueNumber < 5) {
            //when mainHue is Warm Color (0 to 4)
            for (let accentHueNumber = 0; accentHueNumber < 12; accentHueNumber ++) {
                if (accentHueNumber === this.mainHueNumber % 12) {
                    ; //Exclude the mainHueNumber
                } else if (accentHueNumber === (this.mainHueNumber + 11) % 12 || accentHueNumber === (this.mainHueNumber + 13) % 12) {
                    ; //Exclude +-1 of the mainHueNumber
                } else {
                    this.accentColorCodes[this.count] = colorCodes[accentToneNumber][accentHueNumber];
                    this.count = this.count + 1;
                }
            }
        } else if (5 < this.mainHueNumber && this.mainHueNumber < 11) {
            //when mainHue is Cold Color (6 to 10)
            for (let accentHueNumber = 0; accentHueNumber < 12; accentHueNumber ++) {
                if (accentHueNumber === this.mainHueNumber % 12) {
                    ; //Exclude the mainHueNumber
                } else if (accentHueNumber === (this.mainHueNumber + 11) % 12 || accentHueNumber === (this.mainHueNumber + 13) % 12) {
                    ; //Exclude +-1 of the mainHueNumber
                } else if (accentHueNumber === (this.mainHueNumber + 10) % 12 || accentHueNumber === (this.mainHueNumber + 14) % 12) {
                    ; //Exclude +-2 of the mainHueNumber
                } else {
                    this.accentColorCodes[this.count] = colorCodes[accentToneNumber][accentHueNumber];
                    this.count = this.count + 1;
                }
            }
        } else {
            //when mainHue is Neutral Color (5 and 11)
            for (let accentHueNumber = 0; accentHueNumber < 12; accentHueNumber ++) {
                if (accentHueNumber === this.mainHueNumber % 12) {
                    ; //Exclude the mainHueNumber
                } else if (accentHueNumber === (this.mainHueNumber + 11) % 12 || accentHueNumber === (this.mainHueNumber + 13) % 12) {
                    ; //Exclude +-1 of the mainHueNumber
                } else if (accentHueNumber === (this.mainHueNumber + 14) % 12) {
                    ; //Exclude +2 of the mainHueNumber
                } else {
                    this.accentColorCodes[this.count] = colorCodes[accentToneNumber][accentHueNumber];
                    this.count = this.count + 1;
                }
            }
        }
    }
}