
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { no } = require('multiples-of-a-number-repon01');
const { lib2 } = require('blackjack-repon01');

function combSort(arr) {
    const shrinkFactor = 1.3;
    let gap = arr.length;

    while (gap > 1) {
        gap = Math.floor(gap / shrinkFactor);
        if (gap < 1) {
            gap = 1;
        }

        for (let i = 0; i + gap < arr.length; i++) {
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
            }
        }
    }

    return arr;
}

// Example usage:
const array


module.exports = { combSort };
