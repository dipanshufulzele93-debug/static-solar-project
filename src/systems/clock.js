/**
 * SIMULATION CLOCK
 * Tracks simulation time in Earth days. Supports pause and speed multiplier.
 */

const SimClock = (() => {
    const SPEED_LEVELS = [1, 10, 100, 1000, 10000, 100000];
    const SPEED_LABELS = ['1×', '10×', '100×', '1,000×', '10,000×', '100,000×'];

    let simTimeDays = 0;   // Total simulated days elapsed
    let speedIndex = 1;    // Default: 10×
    let paused = false;

    return {
        /** Advance clock by a real-time delta (seconds). Returns sim days advanced. */
        tick(realDeltaSeconds) {
            if (paused) return 0;
            const simDelta = realDeltaSeconds * SPEED_LEVELS[speedIndex];
            simTimeDays += simDelta;
            return simDelta;
        },

        getTimeDays() { return simTimeDays; },
        getSpeedMultiplier() { return SPEED_LEVELS[speedIndex]; },
        getSpeedLabel() { return SPEED_LABELS[speedIndex]; },
        getSpeedIndex() { return speedIndex; },
        isPaused() { return paused; },

        setSpeed(index) {
            speedIndex = Math.max(0, Math.min(index, SPEED_LEVELS.length - 1));
        },

        pause() { paused = true; },
        resume() { paused = false; },
        togglePause() { paused = !paused; return paused; },

        /** Directly set sim time (in days). */
        setTime(days) { simTimeDays = days; },

        SPEED_LEVELS,
        SPEED_LABELS,
        MAX_SPEED_INDEX: SPEED_LEVELS.length - 1,
    };
})();
