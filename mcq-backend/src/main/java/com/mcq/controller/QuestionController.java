package com.mcq.controller;

import com.mcq.dto.QuestionDTO;
import com.mcq.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.event.RequestHandledEvent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    /**
     * Endpoint to fetch all questions for a quiz session.
     * 
     * Scale notes: For high throughput, responses should be paginated
     * and cached using a distributed cache like Redis.
     * 
     * @return List of DTOs hiding actual domain models and correct answers.
     */
    @GetMapping
    public ResponseEntity<List<QuestionDTO>> getAllQuestions() {
        // Log access in prod
        List<QuestionDTO> questions = questionService.getAllMockQuestions();
        return ResponseEntity.ok(questions);
    }
}
