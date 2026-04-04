package com.mcq.util;

public class ScoreCalculator {

    /**
     * Reusable scale component for microservices metrics module.
     * Calculates user score percentage based on total correct answers.
     *
     * @param score total correct answers
     * @param totalQuestions total questions present in quiz
     * @return percentage
     */
    public static double calculatePercentage(int score, int totalQuestions) {
        if (totalQuestions <= 0) {
            return 0.0;
        }
        return Math.round(((double) score / totalQuestions) * 100.0 * 10.0) / 10.0;
    }
}
