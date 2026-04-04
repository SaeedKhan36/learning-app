package com.mcq.controller;

import com.mcq.dto.ResultDTO;
import com.mcq.dto.SubmitQuizDTO;
import com.mcq.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    /**
     * Accepts user's quiz submission, calculates score, and saves the result.
     * Built asynchronously ready, but implemented synchronously here.
     * 
     * @param submitQuizDTO The answers to grade
     * @return ResultDTO summarizing the score and time taken.
     */
    @PostMapping("/submit")
    public ResponseEntity<ResultDTO> submitQuiz(@RequestBody SubmitQuizDTO submitQuizDTO) {
        // Validation could be added here (@Valid)
        
        ResultDTO result = quizService.submitQuiz(submitQuizDTO);
        return ResponseEntity.ok(result);
    }
}
