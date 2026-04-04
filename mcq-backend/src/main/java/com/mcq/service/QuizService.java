package com.mcq.service;

import com.mcq.dto.ResultDTO;
import com.mcq.dto.SubmitQuizDTO;
import com.mcq.util.DateUtil;
import com.mcq.util.ScoreCalculator;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class QuizService {

    /**
     * Submit user answers and calculate results.
     * Demonstrates complex business logic separation and DTO usage.
     * 
     * @param dto Expected form mapping question IDs to the selected answer strings 
     * @return ResultDTO summarizing the run
     */
    public ResultDTO submitQuiz(SubmitQuizDTO dto) {
        // Mock processing logic
        // Normally: 
        // 1. Fetch valid actual answers from QuestionRepository
        // 2. Iterate map comparing db correct answers to user selections
        // 3. Build Result entity, save to ResultRepository
        // 4. Return Data Transfer Object wrapper
        
        int mockScore = (int) (Math.random() * 5) + 5; // random 5 to 10
        int mockTotal = 10;
        
        double percentage = ScoreCalculator.calculatePercentage(mockScore, mockTotal);
        
        return ResultDTO.builder()
                .id(999L)
                .userId(dto.getUserId())
                .userName("MockUser")
                .score(mockScore)
                .totalQuestions(mockTotal)
                .percentage(percentage)
                .timeTaken(dto.getTimeTakenSeconds())
                .formattedTimeTaken(DateUtil.formatDuration(dto.getTimeTakenSeconds()))
                .submittedAt(LocalDateTime.now())
                .build();
    }
}
