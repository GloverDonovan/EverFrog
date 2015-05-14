// Modified source of Public domain material from https://www.youtube.com/watch?v=LAUDmZ4oC2c

// Initialize variables.
maxLines = 40; // Maximum number of lines at once.
minScale = 10; // Minimum scale of a line.
maxScale = 100; // Maximum scale of a line.

// Create an empty Movieclip to hold the Matrix.
theMatrix = createEmptyMovieClip('MatrixCode', 1);
curLines = 0; // Keeps track of the current number of lines.

// ----------------------
// Generating the Matrix.
// ----------------------

theMatrix.onEnterFrame = function() {

    // Check that the current number of lines is less than the maximum allowed.
    if (curLines <= maxLines) {
		
        curLines++; // Increment the number of lines.
        // Create a new line.
        codeLine = this.createEmptyMovieClip('codeLine', curLines);
        // Generate a random scale for the line.
        // This simulates lines at different distances.
        var ranScale = Math.round(Math.random() * (maxScale - minScale)) + minScale;
        codeLine._xscale = codeLine._yscale = ranScale;
        // Position the line at a random X location.
        codeLine._x = Math.random() * Stage.width;
        // Determine line speed based on the distance.
        codeLine.speed = (codeLine._xscale) / 10;
		
        // ---------------------------------------------
        // Creating a line of multiple pods (characters)
        // ---------------------------------------------
        codeLine.myCodes = []; // Array to store individual pods.
        numPods = 0; // Number of pods.
        while (codeLine._height < Stage.height) {
            numPods++; // Increment the number of pods.
            // Attach a single pod to the line of code.
            pod = codeLine.attachMovie('one_pod', 'pod' + numPods, numPods);
            codeLine.myCodes.push(pod); // store pod.
            // Position pod above the last one (vertical lines)
            pod._y -= (pod._height + 2) * numPods;
            // Choose a random Matrix character.
            // Character Codes for lower case letters are between 96 & 123
            pod.the_one.Neo.text = chr(Math.round(Math.random() * 27) + 96);
        }
		
        // ----------------------------
        // Initialize the white pulse.
        // ----------------------------
        // Store pod position to start at.
        codeLine.ind = 0;
        // Store delay between pulses.
        codeLine.delay = codeLines.myCodes.length;
        // ------------------------------------
        // Animating each line of code.
        // ------------------------------------
        codeLine.onEnterFrame = function() {
            // -------------------------------
            // Vertical animation of the line.
            // -------------------------------
            // Every frame make the line move down by it's speed.
            this._y += this.speed;
            // Check if the line of code has animated off the Stage 
            if (this._y - this._height >= Stage.height) {
                // Yes, so allow an additional line to be generated.
                maxLines++;
                // Remove this line and free memory.
                this.removeMovieClip();
            }
            // ----------------------------
            // Animating the white pulse.
            // ----------------------------
            // Get next pod to affect.
            this.curCode = this.myCodes[this.ind];
            // If the pod is not currently animating, start its animation.
            if (this.curCode._currentframe == 1) this.curCode.play();
            // Check if we have reached the end of the line.
            if (this.ind < this.myCodes.length && this.delay !== 0) {
                // No, then move on to next character.
                this.ind++;
                // Decrease the delay before next pulse.
                this.delay--;
            } else {
                // Yes, then reset the character position.
                this.ind = 0;
                // Reset the delay before next pulse.
                this.delay = this.myCodes.length;
            }
        };
    }
};
