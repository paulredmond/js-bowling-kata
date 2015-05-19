function BowlingGame() {
    this.total = 0;
    this.rolls = [];
    this.currentRoll = 0;
}

BowlingGame.prototype.roll = function (pins) {
    this.total += pins;
    this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.score = function () {
    var score = 0,
        frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
        
        if (this.isStrike(frameIndex)) {
            score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
            frameIndex++;
        } else if (this.isSpare(frameIndex)) {
            score += 10 + this.rolls[frameIndex + 2];
            frameIndex += 2;
        } else {
            score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
            frameIndex += 2;
        }
    }

    return score;
};

BowlingGame.prototype.isSpare = function (frameIndex) {
    return (this.rolls[frameIndex] + 
            this.rolls[frameIndex + 1] == 10);
};

BowlingGame.prototype.isStrike = function (frameIndex) {
    return (this.rolls[frameIndex] == 10);
};

module.exports = BowlingGame;