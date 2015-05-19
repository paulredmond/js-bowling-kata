var expect       = require('chai').expect;
    BowlingGame  = require('../src/BowlingGame.js');

describe('Bowling game class', function () {
    var subject;
    
    function rollMany(rollCount, pins) {
        for (var i = 0; i < rollCount; i++) {
            subject.roll(pins);
        }
    }
    
    function rollSpare() {
        subject.roll(5);
        subject.roll(5);
    }
    
    function rollStrike() {
        subject.roll(10);
    }
    
    beforeEach(function () {
        subject = new BowlingGame();
    });

    it ('bowls a gutter game', function () {
        rollMany(20, 0);
        expect(subject.score()).to.equal(0);
    });
    
    it ('scores the sum of all knocked down pins', function () {
        rollMany(20, 1);
        expect(subject.score()).to.eq(20);
    });
    
    it ('gives a one roll bonus for each spare', function () {
        rollSpare();
        subject.roll(3);
        rollMany(17, 0);
        expect(subject.score()).to.eq(16);
    });
    
    it ('gives a two roll bonus for each strike', function () {
        rollStrike();
        subject.roll(3);
        subject.roll(4);
        rollMany(16, 0);
        expect(subject.score()).to.eq(24);
    });
    
    it ('can calculate a perfect game', function () {
        rollMany(12, 10);
        expect(subject.score()).to.eq(300);
    });
 
});